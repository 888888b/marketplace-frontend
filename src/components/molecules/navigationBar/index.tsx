import { 
    IoHome,
    // IoHomeOutline,
    // IoBookmark,
    // IoBookOutline,
    // IoCart,
    IoCartOutline,
    // IoSearch,
    IoSearchOutline,
    IoBookmarkOutline
} from "react-icons/io5";

export default function NavigationBar() {
    return (
        <nav className="bg-card-background fixed bottom-0 left-0 w-full z-50">
            <ul className="w-full h-[70px] flex items-center justify-between text-secondary-text px-4 *:flex *:items-center *:flex-col *:font-semibold *:text-[15px] max-w-[500px] mx-auto">
                <li>
                    <IoHome className="text-2xl"/>
                    Início
                </li>

                <li>
                    <IoBookmarkOutline className="text-2xl"/>
                    Favoritos
                </li>

                <li>
                    <IoCartOutline className="text-2xl"/>
                    Carrinho
                </li>

                <li>
                    <IoSearchOutline className="text-2xl"/>
                    Descobrir
                </li>
            </ul>
        </nav>
    );
};