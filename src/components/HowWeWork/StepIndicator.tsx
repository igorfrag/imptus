interface StepIndicatorProps {
  step: number;
}

const StepIndicator = ({ step }: StepIndicatorProps) => {
  return (
    <div className="bg-secondary-laranjaqueimado text-[35px] text-white w-[47.04px] h-[47.04px] font-semibold rounded-full absolute top-5 -right-5 z-1 flex items-center justify-center">
      {step}
    </div>
  );
};

export default StepIndicator;
