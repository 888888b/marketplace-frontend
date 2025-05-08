'use client';
import { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string,
  name: string,
  email: string,
  picture: string | null,
  phone: string | null
};

interface UserContextType {
  user: User | null
  loading: boolean
};

const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {

  const [ user, setUser ] = useState<User | null>( null );
  const [ loading, setLoading ] = useState( true );
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch(`${backendUrl}/users/me`, {
          method: 'GET',
          credentials: 'include',
        });

        if ( res.ok && document ) {
          const data = await res.json();
          setUser({ ...data.user });
          return;
        };

      } catch ( error ) {
        console.error( error );
      } finally {
        setLoading( false );
      };
    };

    getUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      { children }
    </UserContext.Provider>
  );
};

export const useUser = () => useContext( UserContext );
