'use client';
import { getLocationData } from "@/services/getLocationData";
import { useState, useEffect } from 'react';
import LocationModal from '@/components/molecules/locationModal';
import { toast } from "react-toastify";

export const UserLocation = () => {
    // variaveis
    // -------------------------------------------
    const [ zipcode, setZipcode ] = useState<string | null>( null );
    const [ 
        locationData, 
        setLocationData 
    ] = useState<undefined | Record<string, string>>( undefined );
    // -------------------------------------------

    const showErrorMessage = () => {
        toast('CEP inválido ou não encontrado', {
            autoClose: 3000,
            closeOnClick: false,
            theme: 'light',
            type: 'error',
        });
    };

    useEffect(() => {
        ( async () => {
            if ( localStorage && localStorage.getItem('zipcode')) {
                const code = localStorage.getItem('zipcode') as string;
                const data = await getLocationData({ zipcode: code });
                if ( data && data.localidade && data.uf ) {
                    setLocationData({ ...data });
                    return;
                };
                localStorage.removeItem('zipcode');
                setZipcode( null );
                showErrorMessage();
            };
        })();
    }, [ zipcode ]);

    const getUserZipcode = ( zipcode: string ) => {
        setZipcode( zipcode );
    };

    return (
        <LocationModal 
        city={locationData && `${locationData.localidade} - ${locationData.uf}`}
        setZipcode={getUserZipcode}
        />
    );
};