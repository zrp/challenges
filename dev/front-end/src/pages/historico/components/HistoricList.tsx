import { useRouter } from 'next/router';

import { Dispatch, ReactElement, SetStateAction, useState } from 'react';

import { Box, Flex, Heading, IconButton, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';


interface ListProps {
  data: any[]
}

export const HistoricList = ({data}:ListProps) => {
  const { isOpen:isOpenDelete, onOpen:onOpenDelete, onClose:onCloseDelete } = useDisclosure();
  const { isOpen:isOpenEdit, onOpen:onOpenEdit, onClose:onCloseEdit } = useDisclosure();
  const [id, setId] = useState();
  const [heroData, setHero] = useState();

  return (
    <TableContainer>

    <Table variant='simple'>
      <TableCaption>HISTORICO DE AMEAÇA</TableCaption>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>AMEAÇA</Th>
          <Th>HEROI</Th>
          <Th >DURAÇÃO</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data?.map((threat) => (
          <Tr key={threat.id}>
            <Td>{threat.id}</Td>
            <Td fontWeight={"bold"} textTransform={"lowercase"}>{threat.threatName} - {threat.threatRank}</Td>
            <Td fontWeight={"bold"} color="blue.400" textTransform={'lowercase'}>{threat.hero.name} ({threat.hero.class})</Td>
            <Td>{threat.duration} {threat.duration > 1 ? 'segundos': 'segundo'} </Td>
          </Tr>
        ))}
        
      </Tbody>
    </Table>
  </TableContainer>
  );
};
