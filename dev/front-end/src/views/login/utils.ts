import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const signupSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});



import { createStandaloneToast } from '@chakra-ui/react';

const toast = {
  success: (message: string, duration = 2000) => {
    const { toast: t } = createStandaloneToast();
    t({
      title: 'Sucesso!',
      description: message,
      status: 'success',
      duration,
      isClosable: true,
      position: 'top',
    });
  },
  error: (message: string, duration = 2000) => {
    const { toast: t } = createStandaloneToast();
    t({
      title: 'Erro!',
      description: message,
      status: 'error',
      duration,
      isClosable: true,
      position: 'top',
    });
  },
  info: (message: string, duration = 2000) => {
    const { toast: t } = createStandaloneToast();
    t({
      title: 'Info',
      description: message,
      status: 'info',
      duration,
      isClosable: true,
      position: 'top',
    });
  },
  successLong: (message: string, duration = 15000) => {
    const { toast: t } = createStandaloneToast();
    t({
      title: 'Sucesso!',
      description: message,
      status: 'success',
      duration,
      isClosable: true,
      position: 'top',
    });
  },
};

export default toast;
