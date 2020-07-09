import React, { useState, useEffect, useCallback, FormEvent } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import api from '../../../services/api';
import { Container, Input, Checkbox, ButtonBack } from './styles';
import Map from '../../../components/Map';
interface IHero {
  id?: string;
  name: string;
  isAvailable: boolean;
  lat?: number;
  lng?: number;
}

const Edit: React.FC = props => {
  const history = useHistory();

  const { id } = useParams();
  const [name, setName] = useState('');
  const [heroClassId, setHeroClassId] = useState('');
  const [latlng, setlatlng] = useState<[number, number]>([0, 0]);
  const [Availability, setAvailability] = useState<boolean>(false);
  const [heroClass, setHeroClass] = useState([]);

  useEffect(() => {
    async function loadHero() {
      const response = await api.get(`heroes/${id}`);
      const { name, isAvailable, lat, lng } = response.data;
      setName(name);
      setAvailability(isAvailable);
      setlatlng([lat, lng]);
    }
    loadHero();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const response = await api.put(`heroes/${id}`, {
        name,
        isAvailable: Availability,
        lat: latlng[0],
        lng: latlng[1],
      });
      history.push('/heroes');
    } catch (err) {
      console.log(err);
    }
  }
  function handleSetCoordinate(latlng?: [number, number]): void {
    if (latlng) {
      setlatlng(latlng);
    }
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            id={name}
          />
        </Input>
        <Checkbox availability={Availability}>
          <span>Disponibilidade</span>
          <label htmlFor="disponivel">{Availability ? 'ON' : 'OFF'}</label>
          <input
            id="disponivel"
            type="checkbox"
            checked={Availability}
            onChange={e => setAvailability(e.target.checked)}
          />
        </Checkbox>
        <div>
          <label htmlFor="">Localização</label>
          <Map
            handleSetCoordinate={(latlng?: [number, number]) =>
              handleSetCoordinate(latlng)
            }
            latlng={latlng}
          />
        </div>
        <div>
          <button type="submit">Salvar</button>
        </div>
        <ButtonBack>
          <Link to="/heroes">Voltar</Link>
        </ButtonBack>
      </form>
    </Container>
  );
};

export default Edit;
