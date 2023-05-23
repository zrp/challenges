import { useRouter } from 'next/router';

import { Box, Button, Img, Text } from '@chakra-ui/react';

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <Box className="notfound-page" flexDir="column" w="100%" height={'100vh'}
      alignItems={'center'}
      justifyContent={'center'}
      display={"flex"}
    >
      <Img src="https://img.freepik.com/vetores-gratis/pagina-nao-encontrada-ilustracao-do-conceito_114360-1869.jpg?w=2000" boxSize="300px" alignSelf="center" />
      <Box justifyContent="center" alignItems={"center"} display="flex" flexDir={"column"}>
        <Text className="notfound-page-text">Página não encontrada!</Text>
        <Button className="notfound-page-button" onClick={() => router.back()} mt={5}>
          Voltar
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
