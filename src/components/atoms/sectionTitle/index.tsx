type ComponentProps = {
    title: string,
    className?: string
};

export const SectionTitle = ( props: ComponentProps ) => {
    return (
        <h2 className={`text-lg font-bold text-primary ${props.className}`}>
            {props.title}
        </h2>
    );
};