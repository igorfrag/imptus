import StepIndicator from './StepIndicator';

interface HowWeWorkCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
}

const HowWeWorkCard = ({ icon, title, description, step }: HowWeWorkCardProps) => {
  return (
    <div className="max-w-[346px] flex flex-col justify-between items-center gap-5 py-5">
      <div className="drop-shadow-2xl/50">
        <StepIndicator step={step} />
        <div
          className="relative bg-primary-azulescuro p-10 flex items-center justify-center rounded-2xl "
          style={{
            aspectRatio: 'cos(30deg)',
            clipPath: 'polygon(-50% 50%,50% 100%,150% 50%,50% 0)',
          }}
        >
          {icon}
        </div>
      </div>
      <h3 className="text-white text-[27px] max-sm:text-xl">{title}</h3>
      <p className="text-neutral-cinzamedio text-[25px] text-center max-sm:text-[18px]">
        {description}
      </p>
    </div>
  );
};

export default HowWeWorkCard;
