import EmblaSlides from "../embla";
import Image from "next/image";
import './styles.css';

type ComponentProps = {
    className?: string
};

export default function CategoriesCarousel( props: ComponentProps ) {
    return (
        <div className={`${props.className} text-secondary-text font-medium text-[15px]`}>
            {/* carousel de categorias  */}
            <EmblaSlides 
                className="gap-x-5" 
                options={{progressBar: true, dragFree: true}}>
                <div className="embla__slide">
                    <Image
                        src={'/food_icon.png'}
                        alt="glass and fork icon"
                        width={35}
                        height={35}
                        className="object-cover"
                    />
                    <h4>Alimentação</h4>
                </div>

                <div className="embla__slide">
                    <Image
                        src={'/crane_icon.png'}
                        alt="glass and fork icon"
                        width={35}
                        height={35}
                        className="object-cover"
                    />
                    <h4>Construção</h4>
                </div>

                <div className="embla__slide">
                    <Image
                        src={'/bag_icon.png'}
                        alt="glass and fork icon"
                        width={36}
                        height={36}
                        className="object-cover"
                    />
                    <h4>Moda</h4>
                </div>

                <div className="embla__slide">
                    <Image
                        src={'/supermarket_icon.png'}
                        alt="glass and fork icon"
                        width={35}
                        height={35}
                        className="object-cover"
                    />
                    <h4>Mercado</h4>
                </div>


                <div className="embla__slide">
                    <Image
                        src={'/laptop_icon.png'}
                        alt="glass and fork icon"
                        width={35}
                        height={35}
                        className="object-cover"
                    />
                    <h4>Eletrônicos</h4>
                </div>

                <div className="embla__slide">
                    <Image
                        src={'/service_icon.png'}
                        alt="glass and fork icon"
                        width={35}
                        height={35}
                        className="object-cover"
                    />
                    <h4>Serviços</h4>
                </div>

                <div className="embla__slide">
                    <Image
                        src={'/health_icon.png'}
                        alt="glass and fork icon"
                        width={36}
                        height={36}
                        className="object-cover"
                    />
                    <h4>Saúde & Beleza</h4>
                </div>

                <div className="embla__slide">
                    <Image
                        src={'/pets_icon.png'}
                        alt="glass and fork icon"
                        width={35}
                        height={35}
                        className="object-cover"
                    />
                    <h4>Pets</h4>
                </div>
            </EmblaSlides>
        </div>
    );
};