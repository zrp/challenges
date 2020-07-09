import React, { useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import {
  Container,
  ContainerCards,
  ContainerHeroAvailable,
  ContainerList,
  ContainerThreatsOpen,
  ContainerThreatAllocated,
  ButtonPage,
} from './styles';
import { FaCheckCircle, FaShare } from 'react-icons/fa';

import api from '../../services/api';

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
    id: string;
    name: string;
  };
  threat: IThreat;
}
interface IHero {
  isAvailable: boolean;
}

const Dashboard: React.FC = () => {
  const [threats, setThreat] = useState<IThreat[]>([]);
  const [threatsfinished, setThreatsFinished] = useState<IThreatHero[]>([]);
  const [threatslist, setThreatList] = useState<IThreat[]>([]);
  const [threatsallocated, setThreatAllocated] = useState<IThreatHero[]>([]);
  const [threatsallocatedList, setThreatAllocatedList] = useState<
    IThreatHero[]
  >([]);
  const [page, setPage] = useState(0);

  const [heroes, setHeroes] = useState<IHero[]>([]);

  useEffect(() => {
    api.get('threats').then(response => {
      setThreat(response.data);
      setThreatList(response.data.slice(0, 8));
    });
  }, []);

  useEffect(() => {
    async function loadThreatHero() {
      const response = await api.get('threatshero', {
        params: {
          isAlive: 0,
        },
      });
      setThreatAllocated(response.data);
      setThreatAllocatedList(response.data.slice(0, 8));
    }

    loadThreatHero();
  }, []);
  useEffect(() => {
    api
      .get('threatshero', {
        data: {
          isAlive: '1',
        },
      })
      .then(response => {
        setThreatsFinished(response.data);
      });
  }, [threatsallocatedList]);

  useEffect(() => {
    api.get<IHero[]>('heroes').then(response => {
      setHeroes(response.data);
    });
  }, []);
  function handlePage(page: number) {
    const threatsPaginated = threats.slice(page * 8, page * 8 + 8);
    setThreatList(threatsPaginated);
    setPage(page);
  }
  const threatsOpen = useMemo(() => {
    return threats.length;
  }, [threats]);

  const pagesThreats = useMemo(() => {
    const totalPage = Math.ceil(threats.length / 8);
    const pages = Array.from({ length: totalPage }, (_, index) => index);
    return pages;
  }, [threats]);

  const quantityHeroesAvailable = useMemo(() => {
    return heroes.filter(hero => hero.isAvailable === true).length;
  }, [heroes]);

  const quantityHeroesallocated = useMemo(() => {
    return heroes.filter(hero => hero.isAvailable === false).length;
  }, [heroes]);

  const quantityThreartsdefeated = useMemo(() => {
    return threatsfinished.length;
  }, [threatsfinished]);
  async function handleCloseThreat(threat: IThreatHero) {
    const response = await api.put('threatshero', {
      threatId: threat.threat.id,
      heroId: threat.hero.id,
    });
    if (response) {
      toast.success('Heroi diponivel para nova ameaça');
    }
    const threatIdx = threatsallocatedList.findIndex(
      threatAllocated => threatAllocated === threat,
    );
    const newthreats = threatsallocatedList.filter(
      threatallocated => threatallocated !== threat,
    );
    setThreatAllocatedList(newthreats);
  }

  return (
    <Container>
      <div>
        <ContainerCards>
          <ContainerHeroAvailable color="#d9534f">
            <div>
              <h1>{threatsOpen}</h1>
              <small>Ameaças sem atuaçao</small>
            </div>
          </ContainerHeroAvailable>
          <ContainerHeroAvailable color="#5cb85c">
            <div>
              <h1>{quantityHeroesAvailable}</h1>
              <small>Herois disponiveis</small>
            </div>
          </ContainerHeroAvailable>
          <ContainerHeroAvailable color="#f0ad4e">
            <div>
              <h1>{quantityHeroesallocated}</h1>
              <small>Herois Alocados</small>
            </div>
          </ContainerHeroAvailable>
          <ContainerHeroAvailable color="#0275d8">
            <div>
              <h1>{quantityThreartsdefeated}</h1>
              <small>Ameaças derrotadas</small>
            </div>
          </ContainerHeroAvailable>
        </ContainerCards>
        <ContainerList>
          <ContainerThreatAllocated>
            <strong>Ameaças alocadas</strong>
            <ul>
              {threatsallocatedList.map(threatAllocated => (
                <li key={threatAllocated.threat.id}>
                  <div>
                    <div>
                      <strong>{threatAllocated.threat.monsterName}</strong>
                      <span>
                        <strong>Heroi atuando:</strong>
                        {threatAllocated.hero.name}
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={() => handleCloseThreat(threatAllocated)}
                      >
                        <small>Desalocar heroi</small>
                        <FaCheckCircle size={32} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </ContainerThreatAllocated>
          <ContainerThreatsOpen>
            <strong>Ameaças sem herois atuando</strong>
            {/* <ButtonPage>
              {pagesThreats.map(pages => (
                <button key={pages} onClick={() => handlePage(pages)}>
                  {pages}
                </button>
              ))}
            </ButtonPage> */}
            <ul>
              {threatslist.map(threat => (
                <li key={threat.id}>
                  <div>
                    <div>
                      <strong>Ameaça: {threat.monsterName}</strong>
                      <span>Danger Level: {threat.dangerLevel}</span>
                    </div>
                    <div>
                      <span>Alocar herói</span>
                      <FaShare size={24} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </ContainerThreatsOpen>
        </ContainerList>
      </div>
    </Container>
  );
};

export default Dashboard;
