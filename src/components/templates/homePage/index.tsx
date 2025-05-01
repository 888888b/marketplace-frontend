import Header from "@/components/organisms/header";
import FeaturesCarousel from "@/components/organisms/featuresCarousel";
import ProductsSection from '@/components/organisms/productsSection';

export default function HomePage() {
    return (
        <section className="flex flex-col ">
            <Header/>
            <FeaturesCarousel className="mt-10"/>
            <ProductsSection className="mb-10"/>
        </section>
    );
};