'use client';
import { useUser } from "@/contexts/userContext";
import { RiUser6Line } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import Image from "next/image";

export default function UserProfilePage() {
    const { user, loading } = useUser();

    return (
        <section className="flex flex-col gap-y-10">
            {/* card com informações basicas do usuario */}
            <div className="bg-card-background rounded-bl-[30px] rounded-br-[30px] flex items-center justify-center pt-9 pb-4 px-4 gap-y-8 flex-col shadow-[0_5px_30px_rgba(0,0,0,0.20)]">
                {/* imagem */}
                <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center bg-black/10 relative">
                    { user?.picture ? (
                        <Image
                            src={user.picture}
                            alt={`${user.name}'s profile image`}
                            width={120}
                            height={120}
                            className="rounded-full"
                        />
                    ) : (
                        <RiUser6Line className="text-5xl text-secondary-text"/>
                    )}

                    {/* alterar foto de usuario */}
                    <button className="absolute bottom-2 right-0 w-[30px] h-[30px] rounded-full bg-primary z-10 text-base text-white flex items-center justify-center overflow-hidden">
                        <LuPencil/>
                    </button>
                </div>

                <div>
                    {/* name */}
                    <h1 className="text-[35px] font-semibold text-primary font-raleway">
                        Olá, {user?.name.split(' ')[0]}
                    </h1>
                    {/* localização */}
                    <span className="text-base font-medium text-secondary-text">
                        Localização do usuario
                    </span>
                </div>

                {/* opção para criar conta */}
                <button className="h-[52px] w-full text-white/95 bg-primary font-semibold text-[13px] uppercase shadow-[0_5px_30px_rgba(0,0,0,0.20)] rounded-[30px] border-0 outline-0 active:scale-95 transition-transform duration-200">
                    Criar loja
                </button>
            </div>

            {/* mais opções de gerenciamento de conta */}
            <div className="flex flex-col gap-y-5 pb-10 px-4">
                <button className="btn h-[52px] bg-card-background rounded-[30px] w-full text-primary font-semibold text-base shadow-[0_5px_30px_rgba(0,0,0,0.20)] flex items-center justify-between pr-4 pl-7 border-0 outline-0 active:scale-95 transition-transform duration-200">
                    Meu perfil
                    <Image
                        src={'/arrow_right_icon.png'}
                        alt="arrow right icon"
                        width={23}
                        height={23}
                    />
                </button>

                <button className="h-[52px] bg-card-background rounded-[30px] w-full font-semibold text-base shadow-[0_5px_30px_rgba(0,0,0,0.20)] text-primary flex items-center justify-between pr-4 pl-7 border-0 outline-0 active:scale-95 transition-transform duration-200">
                    Editar dados
                    <Image
                        src={'/arrow_right_icon.png'}
                        alt="arrow right icon"
                        width={23}
                        height={23}
                    />
                </button>

                <button className="h-[52px] bg-primary-action rounded-[30px] w-full text-white/95 font-semibold text-[13px] uppercase shadow-[0_5px_30px_rgba(0,0,0,0.20)] border-0 outline-0 active:scale-95 transition-transform duration-200">
                    Excluir conta
                </button>
            </div>
        </section>
    );
};