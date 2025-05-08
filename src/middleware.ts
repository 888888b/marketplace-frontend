import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyJwtToken } from '@/services/verifyJwtToken';

const paths = [
    { name: '/profile', type: 'private' },
    { name: '/login', type: 'public' },
    { name: '/register', type: 'public' },
    { name: '/', type: 'public' },
] as const;

export async function middleware( request: NextRequest ) {

    const token = request.cookies.get('access_token')?.value;
    const pathname = request.nextUrl.pathname;
    const currentPath = paths.find(path => path.name === pathname);
    const redirectUrl = process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL as string;

    if ( token ) {
        const user = await verifyJwtToken( token );
        // token invalido e rota privada
        if ( !user && currentPath?.type === 'private') {
            return NextResponse.redirect(redirectUrl);
        };

        // impossibilita a reauthenticação desnecessaria
        if ( user && (currentPath?.name === '/login' || currentPath?.name === '/register')) {
            return NextResponse.redirect(redirectUrl);
        };

        return NextResponse.next();

    } else {
        // token inexistente e rota privada
        if ( currentPath?.type === 'private') {
            return NextResponse.redirect(redirectUrl);
        };

        return NextResponse.next();
    };
};

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
    ]
};