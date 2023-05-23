import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RouteProtector: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeError = (url: string) => {
      // Redirecionar para a página de erro se a rota não existir
      router.push('/404');
    };

    // Adicionar um ouvinte para lidar com erros de mudança de rota
    router.events.on('routeChangeError', handleRouteChangeError);

    // Remover o ouvinte quando o componente for desmontado
    return () => {
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  // Renderizar as rotas do aplicativo
  return <>{children}</>;
};

export default RouteProtector;
