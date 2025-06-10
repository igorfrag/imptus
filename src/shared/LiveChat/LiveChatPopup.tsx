'use client';
import { useState } from 'react';
import Button from '@/components/Button';

type LiveChatPopupProps = {
  onClick: () => void;
};

const LiveChatPopup = ({ onClick }: LiveChatPopupProps) => {
  const [isChatStarted, setIsChatStarted] = useState(false);

  return (
    <div className="bg-primary-azulescuro text-white w-md aspect-square fixed right-10 bottom-10 flex flex-col items-center justify-center border-2 border-secondary-laranjaqueimado rounded-xl">
      <button
        className="absolute right-3 top-2 hover:text-red-500 cursor-pointer"
        onClick={onClick}
      >
        X
      </button>
      <h3>Live Chat</h3>
      <div className="w-sm aspect-square bg-primary-azulclaro border-1 border-neutral-cinzaclaro rounded-xl">
        {isChatStarted ? (
          <div>
            <ul className="m-5 h-72 overflow-y-auto break-words">
              <li>Cliente: Bom dia</li>
              <li>Suporte: Ola</li>
              <li>Cliente: Bom dia</li>
            </ul>
            <div>
              <form action="" className="flex justify-between pr-5 pl-5">
                <input
                  type="text"
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
              </form>
            </div>
          </div>
        ) : (
          <form action="" className="flex flex-col items-center text-center">
            <label>
              Nome Completo:
              <input
                type="text"
                required
                className="bg-neutral-cinzaclaro border-2 rounded-sm border-neutral-cinzamedio w-xs pl-1 pr-1 m-1 focus:outline-0 text-primary-azulescuro"
              />
            </label>
            <label>
              Empresa:
              <input
                type="text"
                className="bg-neutral-cinzaclaro border-2 rounded-sm border-neutral-cinzamedio w-xs pl-1 pr-1 m-1 mb-40 focus:outline-0 text-primary-azulescuro"
              />
            </label>

            <Button
              onClick={() => setIsChatStarted(true)}
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
