import { Box, Card, Text } from '@chakra-ui/react';
import api from '../../api';
import { useQuery } from 'react-query';
import { HistoricList } from './components/HistoricList';

const Historico = () => {
  const {data}  = useQuery('api.historic.list', api.historic.getHistoric)

  return (
    <Card>
      <HistoricList data={data?.result.data}/>
    </Card>
  );
};

export default Historico;
