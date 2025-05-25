import { IoSearchOutline } from "react-icons/io5"

type ComponentProps = {
    className?: string
};

export default function SearchInput( props: ComponentProps ) {
    return (
        <div className={`text-primary rounded-3xl px-4 bg-[rgba(0,0,0,0.08)] flex items-center gap-x-1.5 ${props.className}`}>
            <IoSearchOutline className="text-3xl text-secondary-text" />
            <input
                type="text"
                placeholder="Busque por produtos ou lojas"
                className='placeholder:text-secondary-text font-medium h-12 w-full text-[15px] border-none outline-0'
            />
        </div>
    );
};