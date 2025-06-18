'use client';
import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';
import Button from '@/components/Button';

type LiveChatPopupProps = {
  onClick: () => void;
};

const socket = io(process.env.NEXT_PUBLIC_LIVECHAT_SERVER || 'http://localhost:4000', {
  autoConnect: false,
});
const LiveChatPopup = ({ onClick }: LiveChatPopupProps) => {
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isAtendimentoFinalizado, setIsAtendimentoFinalizado] = useState(false);
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [posicaoFila, setPosicaoFila] = useState<number | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    socket.connect();
    const formData = { nome: nome, empresa: empresa };
    socket.emit('new-client', formData);
  };

  useEffect(() => {
    // Quando cliente for colocado na fila
    socket.on('waiting', ({ posicao }) => {
      setIsWaiting(true);
      setPosicaoFila(posicao);
    });

    // Quando a sala for criada
    socket.on('room-created', ({ roomId }) => {
      setIsChatStarted(true);
      setIsWaiting(false);
      console.log('✅ Entrou na sala:', roomId);
    });

    socket.on('message', (msg) => {
      setMessages((prev) => [...prev, `Atendente: ${msg}`]);
    });

    socket.on('partner-disconnected', () => {
      setMessages((prev) => [...prev, '🔴 Atendimento finalizado.']);
      setIsAtendimentoFinalizado(true);
    });

    socket.on('end-chat', () => {
      setMessages((prev) => [...prev, '🔴 Atendimento finalizado.']);
      setIsAtendimentoFinalizado(true);
    });

    return () => {
      socket.off('waiting');
      socket.off('room-created');
      socket.off('message');
      socket.off('partner-disconnected');
      socket.off('end-chat');
    };
  }, []);

  return (
    <div className="bg-primary-azulescuro text-white w-md aspect-square fixed right-10 bottom-10 flex flex-col items-center justify-center border-2 border-secondary-laranjaqueimado rounded-xl">
      {isChatStarted ? (
        <></>
      ) : (
        <button
          className="absolute right-3 top-2 hover:text-red-500 cursor-pointer"
          onClick={onClick}
        >
          X
        </button>
      )}

      <h3>Live Chat</h3>
      <div className="w-sm aspect-square bg-primary-azulclaro border-1 border-neutral-cinzaclaro rounded-xl">
        {isChatStarted ? (
          <div>
            <ul className="m-5 h-72 overflow-y-auto break-words">
              <p>🎉 Seu atendimento começou!</p>
              {messages.map((msg, idx) => (
                <li key={idx} className="text-sm mb-1">
                  {msg}
                </li>
              ))}
            </ul>
            <div>
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                  if (inputMessage.trim()) {
                    socket.emit('message', inputMessage);
                    setMessages((prev) => [...prev, `Você: ${inputMessage}`]);
                    setInputMessage('');
                  }
                }}
                className="flex justify-between pr-5 pl-5"
              >
                {isAtendimentoFinalizado ? (
                  <></>
                ) : (
                  <>
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Digite sua mensagem"
                      name=""
                      autoComplete="off"
                      id=""
                      className="bg-neutral-cinzaclaro border-2 rounded-sm border-neutral-cinzamedio w-full pl-1 pr-1 mr-6 focus:outline-0 text-primary-azulescuro"
                    />
                    <button
                      type="submit"
                      className="pl-2 pr-2 border-2 rounded-sm border-neutral-cinzamedio hover:cursor-pointer"
                    >
                      Enviar
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        ) : isWaiting ? (
          <div>
            <p>⏳ Você está na fila de atendimento.</p>
            {posicaoFila !== null && (
              <p>
                Sua posição: <strong>{posicaoFila}</strong>
              </p>
            )}
            <p>Aguarde, você será redirecionado assim que for sua vez.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center text-center">
            <label>
              Nome Completo:
              <input
                type="text"
                name="nome"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className="bg-neutral-cinzaclaro border-2 rounded-sm border-neutral-cinzamedio w-xs pl-1 pr-1 m-1 focus:outline-0 text-primary-azulescuro"
              />
            </label>
            <label>
              Empresa:
              <input
                name="empresa"
                id="empresa"
                type="text"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                className="bg-neutral-cinzaclaro border-2 rounded-sm border-neutral-cinzamedio w-xs pl-1 pr-1 m-1 mb-40 focus:outline-0 text-primary-azulescuro"
              />
            </label>
            <Button
              type="submit"
              size="xl"
              bgColor="primary-azulescuro"
              textColor="secondary-laranjaqueimado"
              borderColor="secondary-laranjaqueimado"
              hover
              hoverBorder="secondary-azulneon"
              hoverText="secondary-azulneon"
            >
              Iniciar Chat
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LiveChatPopup;
