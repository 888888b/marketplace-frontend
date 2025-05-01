import { SectionTitle } from "@/components/atoms/sectionTitle";
import ProductCard from '@/components/molecules/productCard';
import { ViewMoreLink } from "@/components/atoms/viewMore";
import './styles.css';

type ComponentProps = {
    className?: string
};

export default function ProductsSection( props: ComponentProps ) {
    return (
        <section className={`px-4 ${props.className}`}>
            <div className="bg-card-background rounded-[10px] shadow-[0_5px_30px_rgba(0,0,0,0.20)] p-3">
                <div className="flex justify-between items-center">
                    {/* titulo da seção */}
                    <SectionTitle title="Materiais para construção" />
                    {/* ver mais produtos */}
                    <ViewMoreLink/>
                </div>
                {/* produtos - fakes */}
                <div className="products-wrapper">
                    <ProductCard
                        name="Cimento votoran 50Kg"
                        price="39,90"
                        owner="MM materiais para contrução"
                    />

                    <ProductCard
                        name="Cimento votoran 50Kg"
                        price="39,90"
                        owner="Rezende"
                    />

                    <ProductCard
                        name="Cimento votoran 50Kg"
                        price="39,90"
                        owner="Castelo materiais"
                    />

                    <ProductCard
                        name="Cimento votoran 50Kg"
                        price="39,90"
                        owner="Realize materiais para construção"
                    />
                </div>
            </div>
        </section>
    );
};