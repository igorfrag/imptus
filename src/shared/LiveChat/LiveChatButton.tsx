import { MessageSquare } from 'lucide-react';
type LiveChatButtonProps = {
  onClick: () => void;
};

const LiveChatButton = ({ onClick }: LiveChatButtonProps) => {
  return (
    <button
      className="bg-secondary-laranjaqueimado hover:bg-secondary-azulneon right-10 bottom-10 fixed items-center justify-center flex text-secondary-laranjaqueimado  hover:text-secondary-azulneon cursor-pointer"
      style={{
        aspectRatio: 'cos(30deg)',
        clipPath: 'polygon(-50% 50%,50% 100%,150% 50%,50% 0)',
        height: '70px',
      }}
      onClick={onClick}
    >
      <span
        className="relative z-10 items-center justify-center flex"
        style={{
          clipPath: 'polygon(-50% 50%,50% 100%,150% 50%,50% 0)',
          backgroundColor: 'var(--color-primary-azulprofundo)',
          height: '66px',
          aspectRatio: 'cos(30deg)',
        }}
      >
        <MessageSquare width={35} height={35} />
      </span>
    </button>
  );
};

export default LiveChatButton;
