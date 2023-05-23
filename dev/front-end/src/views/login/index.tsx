import { useRouter } from 'next/router';


import { useEffect, useRef, useState } from 'react';

import { LoginFormProps } from '@/api/controllers/auth.controller';
import { useTokenStore } from '@/hooks/useTokenStore';
import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

import HeaderLogin from '@/components/Header';
import SidebarLogin from '@/components/SidebarLogin';
import toast, { loginSchema } from './utils';
import api from '@/api';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import { FormLogin } from '@/components/FormLogin';
import { emailRegex } from '../signup';


const Login = () => {

  const methods = useForm<LoginFormProps>({
    // resolver: yupResolver(loginSchema),
  });

  const { mutateAsync, isLoading } = useMutation(api.auth.login);

  const { setToken, token } = useTokenStore();
  const router = useRouter();


  async function onSubmit(data: LoginFormProps) {
    const isValidEmail = emailRegex.test(data.email);

    if(!isValidEmail) {
      toast.error("Email invalido")
      return;
    }

    if(data.password.length < 5){
      toast.error("Insira uma senha");
      return;

    }

    try {
      const { result } = await mutateAsync(data);
      setToken(result.access_token);

      router.push('/iheros');
    } catch (err) {
      toast.error(err.message);
    }
  }


  useEffect(() => {
    if (token) {
      router.push('/iheros');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <SimpleGrid columns={{ lg: 2 }} >
          <SidebarLogin />
          <Flex
            align="center"
            bg="black"
            direction="column"
            justify="center"
            minH="100vh"
            textAlign="center"
          >
            <Box w={{ md: '80%' }} maxW={{ md: '80%' }} px={14}>
              <HeaderLogin title="Entrar no sistema" info="Preencha suas credenciais" />
              <FormLogin />

              <Button
                _active={{ opacity: 0.8 }}
                _hover={{ opacity: 0.8 }}
                bg="blue.500"
                color="black"
                disabled={isLoading}
                isLoading={isLoading}
                px={16}
                mt={4}
                type="submit"
                flex={1}
                w={{ base: '100%', lg: 'auto' }}
              >
                Entrar
              </Button>
            </Box>
          </Flex>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};

export default Login;
