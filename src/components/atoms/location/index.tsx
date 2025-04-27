import { FaLocationDot } from "react-icons/fa6";

type ComponentProps = {
    city?: string,
};

export const UserLocation = ( props: ComponentProps ) => {
    const { city } = props;

    return (
        <div className="flex items-center gap-x-1.5 text-base text-primary-action">
            <FaLocationDot/>
            <h4 className="">
                { city ? city : ('Informe sua cidade')}
            </h4>
        </div>
    );
};