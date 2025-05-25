import Header from "@/components/organisms/header";
import FeaturesCarousel from "@/components/organisms/featuresCarousel";
import ProductsSection from '@/components/organisms/productsSection';
import FixedHeader from '@/components/molecules/fixedHeader';

export default function HomePage() {
    return (
        <section className="relative">
            <FixedHeader/>
            <Header/>
            <FeaturesCarousel className="mt-10"/>
            <ProductsSection className="mb-10"/>
        </section>
    );
};