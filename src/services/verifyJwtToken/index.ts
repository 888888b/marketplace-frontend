import { jwtVerify, type JWTPayload } from 'jose';

interface MyTokenPayload extends JWTPayload {
  sub: string,
  role: string
};

/**
 * @param token
 * @returns
 */

export const verifyJwtToken = async ( token: string ): Promise<MyTokenPayload | null> => {
  try {
    const secret = new TextEncoder().encode( process.env.JWT_SECRET );

    // Verifica e decodifica o token
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ['HS256'],
    });

    if (
      typeof payload === 'object' &&
      payload !== null &&
      typeof payload.sub === 'string' &&
      typeof payload.role === 'string'
    ) {
      return payload as MyTokenPayload;
    }

    return null;

  } catch ( error ) {
    console.error( error );
    return null;
  };
};
