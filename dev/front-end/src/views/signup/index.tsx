import { useRouter } from 'next/navigation';

import { useEffect,} from 'react';

import {  SignupFormProps } from '@/api/controllers/auth.controller';
import { useTokenStore } from '@/hooks/useTokenStore';
import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import HeaderLogin from '@/components/Header';
import SidebarLogin from '@/components/SidebarLogin';
import toast, { signupSchema } from '../login/utils';
import api from '@/api';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd'
import { FormSignup } from '../../components/FormSignup';

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const Signup = () => {

  const methods = useForm({
    // resolver: yupResolver(signupSchema),
  });

  const { mutateAsync, isLoading } = useMutation(api.auth.signup);


  const { token } = useTokenStore();
  const router = useRouter();


  async function onSubmit(data: SignupFormProps) {

    const isValidEmail = emailRegex.test(data.email);

    if(data.name.length < 3) {
      toast.error("Insira um nome válido.");
      return;
    }

    if(!isValidEmail) {
      toast.error("Email invalido")
      return;
    }

    if(data.password.length < 5){
      toast.error("Insira uma senha maior");
      return;

    }
    


    try {
      await mutateAsync(data);
      toast.success('Usuário criado com sucesso!');
      router.push('/login');
    } catch (err) {
      toast.error(err.message);
    }
  }


  useEffect(() => {
    if (token) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <SimpleGrid columns={{ lg: 2 }}>
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
              <HeaderLogin title="Cadastrar nova conta" info="Preencha suas credenciais" />
              <FormSignup/>
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
                Cadastrar
              </Button>
            </Box>
          </Flex>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};

export default Signup;
