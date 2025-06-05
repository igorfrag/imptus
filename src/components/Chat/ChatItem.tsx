'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import Button from '../Button';

interface UserInput {
  name: string;
  email: string;
  company: string;
  message: string;
  isHuman: boolean;
}

export default function ChatItem() {
  const [userInput, setUserInput] = useState<UserInput>({
    name: '',
    email: '',
    company: '',
    message: '',
    isHuman: false,
  });

  const fields = [
    { type: 'text', placeholder: 'Nome', name: 'name' },
    { type: 'email', placeholder: 'Endereço de e-mail', name: 'email' },
    { type: 'text', placeholder: 'Empresa', name: 'company' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    setUserInput((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userInput.isHuman) {
      toast.error('Por favor, confirme que você não é um robô.');
      return;
    }

    const serviceID = 'service_hhbq9i8';
    const templateID = 'template_xikysly';
    const userID = 'GeT1RDu4SnLJUvyB_';

    try {
      const emailParams = {
        name: userInput.name,
        email: userInput.email,
        company: userInput.company,
        message: userInput.message,
      };

      const res = await emailjs.send(serviceID, templateID, emailParams, userID);

      if (res.status === 200) {
        toast.success('Mensagem enviada com sucesso!');
        setUserInput({
          name: '',
          email: '',
          company: '',
          message: '',
          isHuman: false,
        });
      }
    } catch (error) {
      toast.error('Falha ao enviar a mensagem. Por favor, tente novamente.');
    }
  };

  return (
    <form
      className="w-full py-8 p-6 rounded-[10px] bg-gradient-form shadow space-y-4 text-white font-[var(--font-barlow-semi-condensed)] text-[18px] leading-[21.5px] text-center flex flex-col"
      onSubmit={handleSubmit}
    >
      <div>
        <h3 className="text-[45px] font-semibold mb-6">Envie sua Mensagem</h3>
        <p className="mb-6 text-[18px] md:text-base">
          Converse com a gente e descubra como podemos impulsionar o seu negócio.
        </p>

        {fields.map(({ type, placeholder, name }, index) => (
          <input
            key={index}
            type={type}
            placeholder={placeholder}
            name={name}
            value={userInput[name as keyof UserInput] as string}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[var(--color-neutral-cinzamedio)] text-neutral-800 placeholder-neutral-500 mb-3 text-base"
            required
          />
        ))}

        <textarea
          placeholder="Mensagem"
          name="message"
          value={userInput.message}
          onChange={handleChange}
          rows={5}
          className="w-full p-3 rounded bg-[var(--color-neutral-cinzamedio)] text-neutral-800 placeholder-neutral-500 mb-3 text-base resize-y"
          required
        />
      </div>

      <div className="flex flex-col items-center mt-6">
        <label className="flex items-center mb-4 text-sm cursor-pointer">
          <input
            type="checkbox"
            name="isHuman"
            checked={userInput.isHuman}
            onChange={handleChange}
            className="mr-2 h-4 w-4 text-[var(--color-secondary-azulneon)] rounded focus:ring-[var(--color-secondary-azulneon)]"
          />
          I'm not a robot
        </label>

        <Button
          size="xl"
          bgColor="primary-azulprofundo"
          textColor="secondary-azulneon"
          borderColor="secondary-azulneon"
          hover
          hoverBorder="secondary-laranjaqueimado"
          hoverText="secondary-laranjaqueimado"
        >
          Enviar
        </Button>
      </div>
    </form>
  );
}
