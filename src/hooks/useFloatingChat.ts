import { useState, useEffect, useRef } from 'react';
import { io, type Socket } from 'socket.io-client';
import { Message } from '@/types/floatingChat';

export function useFloatingChat(chatOpen: boolean) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [atendimentoId, setAtendimentoId] = useState<string | null>(null);
  const [connected, setConnected] = useState(false);
  const [waitingForAgent, setWaitingForAgent] = useState(false);
  const [atendimentoCreated, setAtendimentoCreated] = useState(false);

  const socketRef = useRef<Socket | null>(null);

  const getCurrentTime = () =>
    new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });

  const addMessage = (text: string, isUser: boolean, id?: string | number) => {
    const newMessage: Message = {
      id: id || Date.now() + Math.random(),
      text,
      isUser,
      timestamp: getCurrentTime(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const createAtendimentoAutomatically = () => {
    if (!socketRef.current || atendimentoCreated) return;
    const visitorId = `visitor_${Date.now()}`;
    socketRef.current.emit('atendimento:create', {
      clientName: `Visitante ${visitorId.slice(-4)}`,
      email: `${visitorId}@landing.com`,
      source: 'landing-page',
      autoCreated: true,
    });
  };

  const handleSend = () => {
    if (inputValue.trim() === '' || !connected) return;

    const messageText = inputValue.trim();
    addMessage(messageText, true);
    setInputValue('');

    if (!atendimentoId) {
      addMessage('Aguarde um momento, estamos conectando você...', false, 'system-' + Date.now());
      return;
    }

    if (socketRef.current) {
      socketRef.current.emit('message:send', {
        atendimentoId,
        content: messageText,
        sender: 'client',
        clientName: `Visitante`,
        clientEmail: 'visitante@landing.com',
      });
      setWaitingForAgent(true);
    }
  };

  useEffect(() => {
    if (!chatOpen) return;

    const SOCKET_SERVER_URL = process.env.NEXT_PUBLIC_SOCKET_SERVER || 'http://localhost:3002';
    if (!socketRef.current) {
      socketRef.current = io(SOCKET_SERVER_URL, {
        transports: ['websocket', 'polling'],
      });

      socketRef.current.on('connect', () => {
        setConnected(true);
        if (!atendimentoCreated) createAtendimentoAutomatically();
      });

      socketRef.current.on('disconnect', () => {
        setConnected(false);
      });

      socketRef.current.on('message:new', (message: any) => {
        if (message.sender === 'agent') {
          setWaitingForAgent(false);
          setIsTyping(false);
          addMessage(message.content, false, message.id);
        }
      });

      socketRef.current.on('atendimento:accepted', (data: any) => {
        setWaitingForAgent(false);
        addMessage(
          `${data.agentName} entrou no chat. Como posso te ajudar?`,
          false,
          'system-' + Date.now(),
        );
      });

      socketRef.current.on('atendimento:created', (data: any) => {
        setAtendimentoId(data.id);
        setAtendimentoCreated(true);
        addMessage(
          'Conectado! Digite sua mensagem que um atendente irá responder.',
          false,
          'system-' + Date.now(),
        );
      });

      socketRef.current.on('agent:typing', (data: any) => {
        if (data.atendimentoId === atendimentoId) {
          setIsTyping(true);
          setTimeout(() => setIsTyping(false), 3000);
        }
      });
    }
  }, [chatOpen, atendimentoCreated, atendimentoId]);

  return {
    messages,
    inputValue,
    setInputValue,
    isTyping,
    waitingForAgent,
    handleSend,
    connected,
  };
}
