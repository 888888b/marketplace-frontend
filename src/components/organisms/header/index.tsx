import { UserLocation } from "@/components/atoms/location";
import { WelcomePhrase } from "@/components/atoms/welcomePhrase";
import { UserImage } from "@/components/atoms/userImage";
import SearchInput from "@/components/molecules/searchInput";
import { SectionTitle } from "@/components/atoms/sectionTitle";
import CategoriesCarousel from "../categoriesCarousel";

export default function Header() {
    return (
        <header className="rounded-bl-4xl rounded-br-4xl shadow-[0_4px_30px_rgba(0,0,0,0.20)] bg-card-background p-4 pb-0 overflow-hidden">
            {/* linha 1, nome, localização e foto de usuario */}
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                    <WelcomePhrase/>
                    <UserLocation/>
                </div>

                <UserImage url="/user_fake_image.jpg" name="Vitor"/>
            </div>

            {/* linha 2, input de pesquisa */}
            <SearchInput className="mt-3.5"/>

            {/* linha 3, titulo da seção */}
            <SectionTitle title="Todas as categorias" className="mt-7"/>

            {/* linha 4, barra de categorias de lojas */}
            <CategoriesCarousel className="mt-7"/>
        </header>
    );
};