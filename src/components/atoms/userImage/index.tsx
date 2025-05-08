import Image from "next/image";
import { RiUser6Line } from "react-icons/ri";
import Link from "next/link";

type ComponentProps = {
    url?: string,
    name: string
};

export const UserImage = ( props: ComponentProps ) => {
    return ( 
        <Link href={'/profile'}>
            { props.url ? (
                <Image
                    src={props.url}
                    alt={`${props.name}'s profile image`}
                    width={50}
                    height={50}
                    className="w-[56px] h-[56px] rounded-full object-cover"
                /> 
            ) : (
                <div className="w-[56px] h-[56px] rounded-full bg-[rgba(0,0,0,0.09)] flex items-center justify-center">
                    <RiUser6Line className="text-xl text-secondary-text"/>
                </div>
            )}
        </Link>
    );
};