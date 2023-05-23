import { useRouter } from 'next/router';

import { Dispatch, ReactElement, SetStateAction, useState } from 'react';

import { Box, Flex, Heading, IconButton, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';
import ModalDelete from '../pages/iheros/components/ModalDeleteHero';
import ModalEditHero from '../pages/iheros/components/ModalEditHero';


interface ListProps {
  data: any[]
}

export const ListTable = ({data}:ListProps) => {
  const { isOpen:isOpenDelete, onOpen:onOpenDelete, onClose:onCloseDelete } = useDisclosure();
  const { isOpen:isOpenEdit, onOpen:onOpenEdit, onClose:onCloseEdit } = useDisclosure();
  const [id, setId] = useState();
  const [heroData, setHero] = useState();

  return (
    <TableContainer>
    <ModalDelete isOpen={isOpenDelete} id={id} onClose={onCloseDelete}/>
    <ModalEditHero isOpen={isOpenEdit} hero={heroData} onClose={onCloseEdit}/>

    <Table variant='simple'>
      <TableCaption>Herois cadastrados</TableCaption>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>NOME</Th>
          <Th >CLASSE</Th>
          <Th isNumeric>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data?.map((hero) => (
          <Tr key={hero.id}>
            <Td>{hero.id}</Td>
            <Td>{hero.name}</Td>
            <Td>{hero.class}</Td>
            <Td align='center' isNumeric>
              <IconButton 
                aria-label='' 
                icon={<AiFillDelete/>} color="red" mr={10} 
                onClick={() => {
                  onOpenDelete()
                  setId(hero.id);
                }}
                />
              <IconButton 
                aria-label='' 
                icon={<AiOutlineEdit/>}
                color="blue.400"
                onClick={() => {
                  onOpenEdit()
                  setHero(hero);
                }}
                />
            </Td>
          </Tr>
        ))}
        
      </Tbody>
    </Table>
  </TableContainer>
  );
};
