
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';

interface HeaderLoginProps {
  title: string;
  info: string
}

const HeaderLogin = ({title, info}:HeaderLoginProps) => {

  return (
    <Flex flexDirection={"column"} justifyContent={"center"} align={"center"}>
      <Box display={{ base: 'block', md: 'none' }} mb={8}
      mx="auto" />
      <Image
        src="https://logodownload.org/wp-content/uploads/2015/05/onu-logo-8.png"
        width="200"
        height="200"
        alt=""
      />
      <Text color="white" fontSize={{ base: '3xl', lg: '4xl' }} fontWeight="extrabold">
        {title}
      </Text>
      <Text color="whiteAlpha.800" fontSize="sm" letterSpacing={0.5} mb={8}>
        {info}
      </Text>
    </Flex>
  );
};

export default HeaderLogin;
