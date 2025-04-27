import Image from "next/image";

type ComponentProps = {
    url: string,
    name: string
};

export const UserImage = ( props: ComponentProps ) => {
    return (  
        <Image
            src={props.url}
            alt={`${props.name}'s profile image`}
            width={50}
            height={50}
            className="w-[50px] h-[50px] rounded-full object-cover"
        /> 
    );
};