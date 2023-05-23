import { useRouter } from 'next/router';

import { useEffect } from 'react';

import { useTokenStore } from '@/hooks/useTokenStore';
import { Flex, Spinner } from '@chakra-ui/react';

const Index = () => {
  const { token } = useTokenStore();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push({ pathname: '/iheros' });
    } else {
      router.push('/login');
    }     
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ router, token]);

  return (
    <Flex justifyContent="center" align="center">
      <Spinner color="blue.400" />
    </Flex>
  );
};

export default Index;
