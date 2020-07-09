import React, { useState, useMemo, useEffect } from 'react';
import api from '../../services/api';
import { Container, ContainerThreatsHistory, ButtonPage } from './styles';
import { FiArrowRight } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
interface IThreat {
  id: string;
  dangerLevel: string;
  monsterName: string;
  lat: number;
  lng: number;
}

interface IThreatHero {
  isAlive: boolean;
  hero: {
    name: string;
  };
  threat: IThreat;
}
const Threat: React.FC = () => {
  const [threatsfinished, setThreatsFinished] = useState<IThreatHero[]>([]);
  const [threatslist, setThreatList] = useState<IThreatHero[]>([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    api.get('threatshero').then(response => {
      const threatsFineshed = response.data;
      setThreatsFinished(threatsFineshed);
      setThreatList(threatsFineshed.slice(0, 10));
    });
  }, []);

  const pagesThreats = useMemo(() => {
    const totalPage = Math.ceil(threatsfinished.length / 10);
    const pages = Array.from({ length: totalPage }, (_, index) => index);
    console.log(pages);
    return pages;
  }, [threatsfinished]);
  function handlePage(page: number) {
    const threatsPaginated = threatsfinished.slice(page * 10, page * 10 + 10);
    setThreatList(threatsPaginated);
    setPage(page);
  }
  return (
    <Container>
      <ContainerThreatsHistory>
        <ButtonPage>
          {pagesThreats.map(pages => (
            <button key={pages} onClick={() => handlePage(pages)}>
              {pages}
            </button>
          ))}
        </ButtonPage>
        <ul>
          {threatslist.map(threatslist => (
            <li key={threatslist.threat.id}>
              <div>
                <div>
                  <strong>Ameaça: {threatslist.threat.monsterName}</strong>
                  <span>Heroi: {threatslist.hero.name}</span>
                </div>
                <FaCheckCircle size={32} />
              </div>
            </li>
          ))}
        </ul>
      </ContainerThreatsHistory>
    </Container>
  );
};

export default Threat;
