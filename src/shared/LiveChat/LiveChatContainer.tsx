'use client';
import { useState } from 'react';
import LiveChatButton from './LiveChatButton';
import LiveChatPopup from './LiveChatPopup';
const LiveChatContainer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return isChatOpen ? (
    <LiveChatPopup onClick={() => setIsChatOpen(false)} />
  ) : (
    <LiveChatButton onClick={() => setIsChatOpen(true)} />
  );
};

export default LiveChatContainer;
