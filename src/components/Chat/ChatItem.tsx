export default function ChatItem() {
  const fields = [
    { type: 'text', placeholder: 'Nome' },
    { type: 'email', placeholder: 'Endereço de e-mail' },
    { type: 'text', placeholder: 'Empresa' },
  ];

  return (
    <form className="w-full py-8 p-6 rounded-[10px] bg-gradient-form shadow space-y-4 text-white font-[var(--font-barlow-semi-condensed)] text-[18px] leading-[21.5px] text-center flex flex-col">
      <div>
        <h3 className="text-2xl font-semibold mb-3">Envie sua Mensagem</h3>
        <p className="mb-6 text-sm md:text-base">
          Converse com a gente e descubra como podemos impulsionar o seu negócio.
        </p>
        {fields.map(({ type, placeholder }, index) => (
          <input
            key={index}
            type={type}
            placeholder={placeholder}
            className="w-full p-3 rounded bg-[var(--color-neutral-cinzamedio)] text-neutral-800 placeholder-neutral-500 mb-3 text-base"
          />
        ))}
        <textarea
          placeholder="Mensagem"
          rows={5}
          className="w-full p-3 rounded bg-[var(--color-neutral-cinzamedio)] text-neutral-800 placeholder-neutral-500 mb-3 text-base resize-y"
        />
      </div>

      <div className="flex flex-col items-center mt-6">
        <label className="flex items-center mb-4 text-sm cursor-pointer">
          <input
            type="checkbox"
            className="mr-2 h-4 w-4 text-[var(--color-secondary-azulneon)] rounded focus:ring-[var(--color-secondary-azulneon)]"
          />
          I'm not a robot
        </label>
        <button
          type="submit"
          className="w-full bg-[var(--color-secondary-azulneon)] text-black font-semibold py-3 rounded hover:bg-[var(--color-secondary-laranjaqueimado)] transition-colors"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
