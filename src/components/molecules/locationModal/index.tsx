'use client';
import { useRef } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaLocationDot } from "react-icons/fa6";

// Esquema de validação do CEP
const cepSchema = z.object(
    {
        zipcode: z
        .string()
        .nonempty("O CEP é obrigatório")
        .regex(/^\d+$/, "O CEP deve conter apenas números")
        .length(8, "O CEP deve ter exatamente 8 dígitos"),
    }
);
  
type CepFormData = z.infer<typeof cepSchema>;

type ComponentProps = {
    city?: string,
    setZipcode?: ( zipcode: string ) => void
};
  
export default function LocationModal( props: ComponentProps ) {
    const { city, setZipcode } = props;
    const modalRef = useRef<null | HTMLDialogElement>( null );
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    } = useForm<CepFormData>({
    resolver: zodResolver( cepSchema ),
    });

    const onSubmit = ( data: CepFormData ) => {
        if ( localStorage && setZipcode ) {
            localStorage.setItem('zipcode', data.zipcode);
            setZipcode( data.zipcode );
            modalRef.current?.close();
            reset();
        };
    };

    return (
        <>
            <div>
                <h3 className="font-medium text-[15px] text-secondary-text">
                    Lojas em
                </h3>
                <button
                    className="flex items-center gap-x-1.5 border-0 outline-0 cursor-pointer text-[17px] text-primary-action flex-nowrap font-medium line-clamp-1 -translate-x-0.5"
                    onClick={() => modalRef.current?.showModal()}>
                    <FaLocationDot/>
                    <span className='max-w-[40vw] truncate'>
                        { city ? city : 'Informar local' }
                    </span>
                </button>
            </div>

            <dialog ref={modalRef} id="my_modal_1" className="modal">
                <div className="bg-card-background w-full max-w-96 rounded-[10px] px-4 py-14 flex items-center justify-center flex-col gap-y-5 relative">
                    {/* titulo do modal */}
                    <h3 className="font-semibold text-lg text-primary">
                        Digite seu CEP para prosseguir
                    </h3>
                    {/* pegar cep */}
                    <form className='flex items-center flex-nowrap gap-x-4' onSubmit={handleSubmit(onSubmit)}>
                        <div className='relative'>
                            <input
                            type="text"
                            maxLength={8}
                            required placeholder='Ex: 12345678'
                            className='h-12 rounded-[30px] border-primary-action border-[0.1rem] outline-0 w-full px-4 placeholder:text-secondary-text text-primary'
                            {...register("zipcode")}
                            />
                            {/* erro na validação */}
                            { errors.zipcode && (
                                <span className="text-primary-action text-sm mt-1 absolute bottom-0 left-0 translate-y-full">
                                    { errors.zipcode?.message }
                                </span>
                            )}
                        </div>
                        
                        <button type="submit" className='btn btn-lg rounded-[30px] bg-primary-action border-0 outline-0 font-normal text-sm text-white active:scale-95 transition-transform duration-200'>
                            CONTINUAR
                        </button>
                    </form>
                    {/* fechar modal */}     
                    <IoCloseOutline
                    className='text-primary text-2xl cursor-pointer absolute top-3 right-3'
                    onClick={() => modalRef.current?.close()}
                    />
                </div>
            </dialog>
        </>
    );
};