import { Rocket, Search, Wrench } from "lucide-react";
import HowWeWorkCard from "./HowWeWorkCard";

const HowWeWork = () => {
    const HOWWEWORK_DATA = [
        {
            icon: <Search size={113} color="var(--color-secondary-laranjaqueimado)" />,
            title: "Diagnóstico Estratégico",
            description: "Analisamos seu negócio, identificamos pontos de melhoria e traçamos um plano com foco em crescimento real."
        },
        {
            icon: <Wrench size={113} color="var(--color-secondary-laranjaqueimado)" />,
            title: "Execução Personalizada",
            description: "Desenvolvemos e implementamos soluções sob medida: marketing, tecnologia, automações e design que geram impacto."
        },
        {
            icon: <Rocket size={113} color="var(--color-secondary-laranjaqueimado)" />,
            title: "Escalada e Impulsionamento",
            description: "Após a entrega, seguimos otimizando e impulsionando seus resultados com base em dados e performance real"
        }
    ]
     
    return (
        <section 
            className="w-full flex flex-col items-center gap-20 font-barlow-condensed font-normal py-15"
            style={{ backgroundImage: 'var(--background-gradient-azul)' }}
        >
            <h2 className="text-[64px] text-neutral-cinzaclaro align-center font-semibold max-sm:text-[32px]">Como trabalhamos</h2>
            
            <div className="w-full flex justify-around flex-wrap">
                {HOWWEWORK_DATA.map((item, index) => (
                    <HowWeWorkCard 
                        icon ={item.icon}
                        step={index + 1}
                        title={item.title}
                        description={item.description}
                        key={index}
                    />
                ))}
            </div>
            
        </section>
    )
}

export default HowWeWork;