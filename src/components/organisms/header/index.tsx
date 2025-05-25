import { UserLocation } from "@/components/atoms/location";
import SearchInput from "@/components/molecules/searchInput";
import { SectionTitle } from "@/components/atoms/sectionTitle";
import CategoriesCarousel from "../categoriesCarousel";
import { CreateStoreButton } from "@/components/atoms/createStoreButton";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="rounded-bl-[30px] rounded-br-[30px] shadow-[0_4px_30px_rgba(0,0,0,0.20)] bg-card-background p-4 pb-0 overflow-hidden">
            {/* linha 1, nome, localização e foto de usuario */}
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                    <UserLocation/>
                </div>

                <div className="flex items-center gap-x-[15px]">
                    <Link href={'/profile'}>
                        <CreateStoreButton/>
                    </Link>

                    <Link href={'/profile'}>
                        <Image
                            src={'/user_icon.png'}
                            alt="user icon"
                            width={30}
                            height={30}
                            className="object-cover"
                        />
                    </Link>
                </div>
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