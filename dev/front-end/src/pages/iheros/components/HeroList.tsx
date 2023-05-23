import { useState } from 'react';

import api from '@/api';
import { ListTable } from '../../../components/List';
import { useQuery } from 'react-query';
import { 
  Box, 
  Button, 
  Card, 
  Modal, 
  ModalBody, 
  ModalContent, 
  ModalHeader, 
  ModalOverlay
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import HeroCreate from './HeroCreate';


const HeroList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {data}  = useQuery('api.heros.list', api.hero.list)

  const onClose = () => {
    setIsOpen(false)

  }


  return (
    <Card>
      <Box className="card-header">
          <Button
            my={5}
            mx={5}
            colorScheme="green"
            size="sm"
            mr={2}
            onClick={()=> setIsOpen(true)}
            leftIcon={<FaPlus size=".8rem" />}
            data-tour-id="button_create_top"
          >
            Adicionar
          </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} preserveScrollBarGap closeOnOverlayClick size="3xl">
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Criar um heroi</ModalHeader>
          <ModalBody p={3}>
            <HeroCreate onClose={() => onClose()}/>
          </ModalBody>
        </ModalContent>
      </Modal>
      
      <ListTable data={data?.result}/>
    </Card>
  );
};

export default HeroList;
