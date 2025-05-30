type ButtonProps = {
    size: 'sm' | 'lg';
    children: React.ReactNode
}

const Button = ({ size="sm", children }: ButtonProps) => {
    const sizeClasses = {
        sm: 'min-w-[120px] text-sm',       
        lg: 'min-w-[259px] text-base'
    };

    return (
        <button className={`flex items-center justify-center gap-2 bg-primary-azultecnologico font-barlow-condensed font-medium rounded-[10px] cursor-pointer ${sizeClasses[size]} hover:opacity-80`}>
            {children}
        </button>
    )
}

export default Button;