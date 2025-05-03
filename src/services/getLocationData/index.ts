
export const getLocationData = async ({ zipcode }:{ zipcode: string }) => {
    try {
        const res = await fetch(`https://viacep.com.br/ws/${zipcode}/json`);
        const data = await res.json();
        return data;

    } catch ( error ) {
        console.error( error );
    };
};