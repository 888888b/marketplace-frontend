type ComponentProps = {
    name: string,
    price: string,
    image?: string
    owner: string
};

export default function ProductCard( props: ComponentProps ) {
    return (
        // produto
        <div className="w-full rounded-[10px] overflow-hidden shadow-[0_5px_30px_rgba(0,0,0,0.20)]">
            {/* imagem */}
            <div className="w-full bg-black/20 h-[120px]"/>
            {/* mais informações */}
            <div className="p-2.5 flex flex-col gap-y-2">
                {/* nome */}
                <h6 className="text-[14px] line-clamp-2 font-semibold text-primary">{props.name}</h6>
                {/* preço */}
                <span className="text-lg text-black font-bold">{props.price} R$</span>
                {/* loja */}
                <p className="line-clamp-3 text-[14px] text-secondary-text">
                    Oferecido por <span className="font-semibold text-primary-action">{props.owner}</span>
                </p>
            </div>
        </div>
    );
};