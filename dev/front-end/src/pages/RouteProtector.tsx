import { useRouter } from 'next/router';

import { createContext, useEffect } from 'react';
import { useTokenStore } from '../hooks/useTokenStore';


const RouteProtectContext = createContext({});

const globalRoutes = [
  '/login',
  '/signup',
];
const RouteProtectProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { pathname, push } = useRouter();
  const isProtected = !globalRoutes.includes(pathname)
  const { token } = useTokenStore();

  useEffect(() => {
    const finalRoute = token ? pathname :'/login' ;
    if (isProtected) {
      push(finalRoute);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);


  return <RouteProtectContext.Provider value={{}}>{children}</RouteProtectContext.Provider>;
};

export { RouteProtectProvider, RouteProtectContext };
