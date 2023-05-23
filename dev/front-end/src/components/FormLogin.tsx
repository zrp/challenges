import NextLink from 'next/link';

import { useEffect, useState } from 'react';

import { FormInput } from '@/components/form/FormInput';
import { Icon, Link, SimpleGrid } from '@chakra-ui/react';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineLock, AiOutlineUser } from 'react-icons/ai';



export const FormLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <SimpleGrid spacing={4}>
      <FormInput
        _hover={{}}
        _placeholder={{ color: 'whiteAlpha.600' }}
        bg="whiteAlpha.100"
        color="white"
        colorLabel="white"
        icon={AiOutlineUser}
        isRequired
        label={"Email"}
        name="email"
        pattern="[^' ']+"
        sx={{
          ':-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus': {
            border: '6px solid #202125',
            '-webkit-box-shadow': '0 0 0px 1000px #202125 inset',
            '-webkit-text-fill-color': 'white',
          },
        }}
        title={"O campo não pode conter espaços"}
      />
      <FormInput
        _hover={{}}
        _placeholder={{ color: 'whiteAlpha.600' }}
        bg="whiteAlpha.100"
        color="white"
        colorLabel="white"
        icon={AiOutlineLock}
        isRequired
        label={"senha"}
        name="password"
        pattern="[^' ']+"
        placeholder="********"
        rightLabel={
          <Icon
          color="blue.400"
            as={showPassword ? AiOutlineEyeInvisible : AiOutlineEye}
            onClick={() => setShowPassword(!showPassword)}
            cursor="pointer"
          />
        }
        sx={{
          ':-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus': {
            border: '6px solid #202125',
            '-webkit-box-shadow': '0 0 0px 1000px #202125 inset',
            '-webkit-text-fill-color': 'white',
          },
        }}
        title={"O campo não pode conter espaços"}
        type={showPassword ? 'text' : 'password'}
      />
      <NextLink href="/signup">
        <Link color="white" fontSize="sm" letterSpacing={0.5}>
        Criar uma conta
        </Link>
      </NextLink>

    </SimpleGrid>
  );
};
