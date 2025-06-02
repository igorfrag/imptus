import StepIndicator from "./StepIndicator";

interface HowWeWorkCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;  
    step: number  
}

const HowWeWorkCard = ({icon, title, description, step}: HowWeWorkCardProps) => {
    return (
        <div className="max-w-[346px] flex flex-col justify-between items-center gap-5 py-5">
            <div className="relative bg-primary-azulescuro p-10 flex items-center justify-center rounded-2xl shadow">
                <StepIndicator step={step} />
                {icon}
            </div>
            <h3 className="text-white text-[27px] max-sm:text-xl">{title}</h3>
            <p className="text-neutral-cinzamedio text-[25px] text-center max-sm:text-[18px]">{description}</p>
        </div>
    )
}

export default HowWeWorkCard;