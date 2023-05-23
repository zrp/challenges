import { Box,  Flex } from '@chakra-ui/react';

const SidebarLogin = () => {

  return (
    <Box
      alignItems="center"
      color="white"
      display={{ base: 'none', md: 'flex' }}
      h="100%"
      justifyContent="center"
      pos="relative"
    >
      <Box bottom="30%" pos="absolute" right="-30px" />
      <Flex
        direction="column"
        textAlign="center"
        bg="URL('https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/0/38707/files/2016/01/Marvel_Wallpaper_Heroes_1.jpg')"
        bgSize="cover"
        bgPosition="center"
        w="100%"
        h="100%"
        align="center"
        justify="center"
      />


    </Box>
  );
};

export default SidebarLogin;
