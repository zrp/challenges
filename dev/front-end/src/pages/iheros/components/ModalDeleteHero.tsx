import api from '@/api';
import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from 'react-query';
import toast from '../../../views/login/utils';

const ModalDelete = ({ isOpen, onClose, id }) => {
  const { mutateAsync } = useMutation(api.hero.delete);
  const queryClient = useQueryClient();
  const onSubmit = async (data: number) => {
    onClose();

    try {
      await mutateAsync(id);
      queryClient.invalidateQueries(['api.heros.list']);
      return toast.success('Deletado com sucesso!');
    } catch (err) {
      return toast.error(err.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent className="card">
        <ModalHeader className="card-header">Deletar Heroi</ModalHeader>
        <ModalBody className="card-body">Deseja mesmo deletar esse Heroi?</ModalBody>
        <ModalFooter className="card-footer">
          <ButtonGroup>
            <Button colorScheme="green" onClick={() => onSubmit(id)} size="sm">
              Sim
            </Button>
            <Button colorScheme="red" onClick={onClose} size="sm">
              Não
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalDelete;
