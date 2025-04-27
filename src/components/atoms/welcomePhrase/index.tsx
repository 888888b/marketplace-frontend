export const WelcomePhrase = ({ userName } : { userName: string }) => {
    return (
        <h3 className="text-[19px] text-primary font-raleway">
            Olá, {userName}
        </h3>
    );
};