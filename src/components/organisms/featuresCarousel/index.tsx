import EmblaSlides from "../embla";
import './styles.css';

type ComponentProps = {
    className?: string,
}; 

export default function FeaturesCarousel( props: ComponentProps ) {
    return (
        <div className={`${props.className} px-4 features-carousel`}>
            <h1 className="text-xl font-bold text-primary">
                Em destaque
            </h1>

            <EmblaSlides 
                options={{
                    progressBar: false, 
                    dotNavigation: true, 
                    loop: true,
                    autoplay: true, 
                    autoplayOptions: { stopOnInteraction: false }
                }} 
                className="mt-3.5">
                {/* slide 1 */}
                <div className="embla__slide">
                    {/* logo da loja */}
                    <div className="w-full h-32 bg-primary"></div>
                    {/* informações adicionais */}
                    <div className="px-4 py-2 flex flex-col gap-y-1">
                        <h4 className="font-raleway text-lg font-bold text-primary">Vila Prime</h4>
                        <p className="text-base text-secondary-text">
                            Hamburgueres, Jantinhas, espetinhos e muito mais!
                        </p>
                        <button className="bg-primary-action btn btn-lg w-48 rounded-3xl text-base font-normal text-white">
                            Ver loja
                        </button>
                    </div>
                </div>
            
                {/* slide 2 */}
                <div className="embla__slide">
                    {/* logo da loja */}
                    <div className="w-full h-32 bg-primary-action"></div>
                    {/* informações adicionais */}
                    <div className="w-full px-4 py-2 flex flex-col gap-y-1 items-start">
                        <h4 className="font-raleway text-lg font-bold text-primary">Smart Bom Preço</h4>
                        <p className="text-base text-secondary-text">
                            Ofertas imperdiveis toda quinta feira!
                        </p>
                        <button className="bg-primary-action btn btn-lg w-48 rounded-3xl text-base font-normal text-white">
                            Ver loja
                        </button>
                    </div>
                </div>
                
                {/* slide 3 */}
                <div className="embla__slide">
                    {/* logo da loja */}
                    <div className="w-full h-32 bg-secondary-text"></div>
                    {/* informações adicionais */}
                    <div className="w-full px-4 py-2 flex flex-col gap-y-1">
                        <h4 className="font-raleway text-lg font-bold text-primary">Castelo</h4>
                        <p className="text-base text-secondary-text">
                            Tudo de construção para sua obra!
                        </p>
                        <button className="bg-primary-action btn btn-lg w-48 rounded-3xl text-base font-normal text-white">
                            Ver loja
                        </button>
                    </div>
                </div>

                {/* slide 4 */}
                <div className="embla__slide">
                    {/* logo da loja */}
                    <div className="w-full h-32 bg-link-color"></div>
                    {/* informações adicionais */}
                    <div className="w-full px-4 py-2 flex flex-col gap-y-1">
                        <h4 className="font-raleway text-lg font-bold text-primary">Drograria Alencar</h4>
                        <p className="text-base text-secondary-text line-clamp-2">
                            Sempre cuidando da sua saude, medicamentos gratis via farmacia popular!
                        </p>
                        <button className="bg-primary-action btn btn-lg w-48 rounded-3xl text-base font-normal text-white">
                            Ver loja
                        </button>
                    </div>
                </div>
            </EmblaSlides>
        </div>
    );
};

