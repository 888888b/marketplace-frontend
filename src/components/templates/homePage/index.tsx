import Header from "@/components/organisms/header";
import FeaturesCarousel from "@/components/organisms/featuresCarousel";

export default function HomePage() {
    return (
        <section className="flex flex-col gap-y-10 pb-10">
            <Header/>
            <FeaturesCarousel/>
        </section>
    );
};