import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTokenStore } from '../hooks/useTokenStore';

const AuthProtect: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const { token } = useTokenStore();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [token, router]);
  return <>{children}</>;
};

export default AuthProtect;
