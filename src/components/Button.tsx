type ButtonProps = {
  size: 'xl' | '3xl';
  children: React.ReactNode;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  hover?: boolean;
  hoverBg?: string;
  hoverText?: string;
  hoverBorder?: string;
  onClick?: () => void;
};

const Button = ({
  size = 'xl',
  children,
  bgColor = 'primary-azultecnologico',
  borderColor = 'primary-azulescuro',
  textColor = 'primary-azulescuro',
  hover,
  hoverBg,
  hoverText,
  hoverBorder,
  onClick,
}: ButtonProps) => {
  const sizeClasses = {
    xl: 'h-[50px] min-w-[120px] text-xl',
    '3xl': 'h-[72px] min-w-[259px] text-3xl',
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 ${'bg-' + bgColor} border-solid border ${'border-' + borderColor} ${'text-' + textColor} 
        ${hover && hoverBg ? 'hover:bg-' + hoverBg : ''} 
        ${hover && hoverText ? 'hover:text-' + hoverText : ''}
        ${hover && hoverBorder ? 'hover:border-' + hoverBorder : ''}
        font-barlow-condensed font-medium rounded-[10px] cursor-pointer ${sizeClasses[size]} hover:opacity-80`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
