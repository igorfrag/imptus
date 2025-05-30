type ButtonProps = {
  size: 'xl' | '3xl';
  children: React.ReactNode;
};

const Button = ({ size = 'xl', children }: ButtonProps) => {
  const sizeClasses = {
    'xl': 'h-[50px] min-w-[120px] text-xl',
    '3xl': 'h-[72px] min-w-[259px] text-3xl',
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 bg-primary-azultecnologico border-solid border border-primary-azulescuro text-primary-azulescuro font-barlow-condensed font-medium rounded-[10px] cursor-pointer ${sizeClasses[size]} hover:opacity-80`}
    >
      {children}
    </button>
  );
};

export default Button;
