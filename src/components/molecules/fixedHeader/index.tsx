'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SearchBar from '@/components/molecules/searchInput';
import { FaLocationDot } from 'react-icons/fa6';

import './styles.css';

export default function FixedHeader() {
    const headerRef = useRef<null | HTMLElement>( null );

    const handleHeaderState = () => {
        const isInViewport = window.scrollY > 275;

        if ( headerRef.current ) {
            if ( isInViewport ) {
                headerRef.current.classList.remove('out-of-viewport');
                headerRef.current.classList.add('in-viewport');
            } else {
                headerRef.current.classList.remove('in-viewport');
                headerRef.current.classList.add('out-of-viewport');
            };
        };
    };

    useEffect(() => {
        // adicionar evento de scroll
        if (window) {
            window.addEventListener('scroll', handleHeaderState);
        };

        // remover evento ao desmontar 
        return () => {
            window.removeEventListener('scroll', handleHeaderState);
        };
    }, [window]);

    return (
        <header ref={headerRef} className="fixed-header bg-card-background shadow-[0_5px_30px_rgba(0,0,0,0.50)] px-4 py-5 flex items-center justify-between gap-x-4 fixed top-0 left-0 z-20 w-full">
            {/* modal de para pegar localização */}
            <FaLocationDot className='text-primary-action text-2xl' />
            <SearchBar />
            {/* link para o perfil */}
            <Link href={'/profile'}>
                <Image
                    src={'/user_icon.png'}
                    alt='user icon'
                    width={33}
                    height={33}
                    className='object-cover'
                />
            </Link>
        </header>
    );
};