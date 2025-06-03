interface StepIndicatorProps {
    step: number;
}

const StepIndicator = ({ step }: StepIndicatorProps) => {
    return (
        <div className="bg-secondary-laranjaqueimado text-[35px] text-white w-[47.04px] h-[47.04px] font-semibold rounded-full absolute -top-3 -right-3 z-1 flex items-center justify-center">
            {step}
        </div>
    )
}

export default StepIndicator;