import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';

import {
  Container,
  InputContainer,
  SelectHeroClass,
  MapContainer,
  ContainerButtonSave,
  ContainerButtonBack,
} from './styles';
import Map from '../../../components/Map';
import api from '../../../services/api';
import { useHistory, Link } from 'react-router-dom';

interface IheroClass {
  id: string;
  name: string;
}

const NewHero: React.FC = () => {
  const history = useHistory();
  const [latlng, setlatlng] = useState<[number, number]>([0, 0]);
  const [name, setName] = useState('');
  const [heroClassId, setHeroClassId] = useState('');
  const [heroClass, setHeroClass] = useState<IheroClass[]>([]);
  useEffect(() => {
    api.get('heroclass').then(response => {
      setHeroClass(response.data);
    });
  }, []);

  function handleSelectHeroClass(event: ChangeEvent<HTMLSelectElement>) {
    if (event.target.value !== 'selecione') {
      setHeroClassId(event.target.value);
    }
  }
  function handleSetCoordinate(latlng?: [number, number]): void {
    if (latlng) {
      setlatlng(latlng);
    }
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const [lat, lng] = latlng;

    await api.post('heroes', {
      name,
      classId: heroClassId,
      lat,
      lng,
    });

    history.push('/heroes');
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite o nome do heroi"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </InputContainer>
        <SelectHeroClass>
          <label htmlFor="heroclass">Selecione a classe do herói</label>
          <select
            name="heroclass"
            id="heroclass"
            onChange={handleSelectHeroClass}
          >
            <option>selecione</option>
            {heroClass.map(heroclass => (
              <option key={heroclass.id} value={heroclass.id}>
                {heroclass.name}
              </option>
            ))}
          </select>
        </SelectHeroClass>
        <MapContainer>
          <span>Defina a localização do heroi no mapa</span>
          <Map
            handleSetCoordinate={(latlng?: [number, number]) =>
              handleSetCoordinate(latlng)
            }
          />
        </MapContainer>
        <ContainerButtonSave>
          <button type="submit">Salvar</button>
        </ContainerButtonSave>
        <ContainerButtonBack>
          <div>
            <Link to="/heroes">Voltar</Link>
          </div>
        </ContainerButtonBack>
      </form>
    </Container>
  );
};

export default NewHero;
