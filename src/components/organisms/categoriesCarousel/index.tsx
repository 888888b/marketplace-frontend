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
                    <div className="icon-box">
                        <Image
                            src={'/food_icon.png'}
                            alt="glass and fork icon"
                            width={32}
                            height={32}
                            className="object-cover"
                        />
                    </div>
                    <h4>Alimentação</h4>
                </div>

                <div className="embla__slide">
                    <div className="icon-box">
                        <Image
                            src={'/crane_icon.png'}
                            alt="glass and fork icon"
                            width={30}
                            height={30}
                            className="object-cover"
                        />
                    </div>
                    <h4>Construção</h4>
                </div>

                <div className="embla__slide">
                    <div className="icon-box">
                        <Image
                            src={'/bag_icon.png'}
                            alt="glass and fork icon"
                            width={30}
                            height={30}
                            className="object-cover"
                        />
                    </div>
                    <h4>Moda</h4>
                </div>

                <div className="embla__slide">
                    <div className="icon-box">
                        <Image
                            src={'/supermarket_icon.png'}
                            alt="glass and fork icon"
                            width={30}
                            height={30}
                            className="object-cover"
                        />
                    </div>
                    <h4>Mercado</h4>
                </div>


                <div className="embla__slide">
                    <div className="icon-box">
                        <Image
                            src={'/laptop_icon.png'}
                            alt="glass and fork icon"
                            width={30}
                            height={30}
                            className="object-cover"
                        />
                    </div>
                    <h4>Eletrônicos</h4>
                </div>

                <div className="embla__slide">
                    <div className="icon-box">
                        <Image
                            src={'/service_icon.png'}
                            alt="glass and fork icon"
                            width={30}
                            height={30}
                            className="object-cover"
                        />
                    </div>
                    <h4>Serviços</h4>
                </div>

                <div className="embla__slide">
                    <div className="icon-box">
                        <Image
                            src={'/health_icon.png'}
                            alt="glass and fork icon"
                            width={30}
                            height={30}
                            className="object-cover"
                        />
                    </div>
                    <h4>Saúde & Beleza</h4>
                </div>

                <div className="embla__slide">
                    <div className="icon-box">
                        <Image
                            src={'/pets_icon.png'}
                            alt="glass and fork icon"
                            width={31}
                            height={31}
                            className="object-cover"
                        />
                    </div>
                    <h4>Pets</h4>
                </div>
            </EmblaSlides>
        </div>
    );
};