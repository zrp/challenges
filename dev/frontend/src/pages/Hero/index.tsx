import React, { useEffect, useState, useCallback } from 'react';
import api from '../../services/api';
import { Container, ContainerHero } from './syles';
import { GiSwordman } from 'react-icons/gi';
import { MdEdit, MdDelete, MdAddCircle } from 'react-icons/md';
import { FiPlusCircle } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

interface IHero {
  id: string;
  name: string;
  isAvailable: boolean;
  heroclass: {
    id: string;
    name: string;
  };
}

const Hero: React.FC = () => {
  const [heroes, setHeroes] = useState<IHero[]>([]);
  useEffect(() => {
    api.get('heroes').then(response => {
      setHeroes(response.data);
      console.log(response.data);
    });
  }, []);

  async function handleRemoveHero(id: string) {
    try {
      await api.delete(`heroes/${id}`);
      toast.success('Exclusão realizada com sucesso');
      const heroesList = heroes.filter(Hero => Hero.id !== id);
      console.log(heroesList);
      setHeroes(heroesList);
    } catch (err) {
      toast.error('Não foi possivel deletar heroi');
    }
  }
  function handleConfirmation(id: string) {}
  return (
    <Container>
      <div>
        <h1>Adicionar novo heroi</h1>
        <span>
          <Link to="/newhero">
            <MdAddCircle size={32} color="#0275d8" />
          </Link>
        </span>
      </div>
      {heroes.map(hero => (
        <ContainerHero key={hero.id}>
          <div>
            {hero.isAvailable ? (
              <FaCircle color="#5cb85c" />
            ) : (
              <FaCircle color="#d9534f" />
            )}

            <strong>{hero.name} </strong>
            <span>
              Classe: <strong>{hero.heroclass.name}</strong>
            </span>
          </div>
          <div>
            <Link to={`/edithero/${hero.id}`}>
              <MdEdit />
            </Link>
            <button onClick={() => handleRemoveHero(hero.id)}>
              <MdDelete />
            </button>
          </div>
        </ContainerHero>
      ))}
    </Container>
  );
};

export default Hero;
