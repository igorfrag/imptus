import Chat from '@/components/Chat/Chat';
import FloatingChat from '@/components/FloatingChat/FloatingChat';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pt-[180px] bg-hero-image">
      <Chat />
      <FloatingChat />
    </main>
  );
}
