import React, { useCallback, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import { FiUser, FiLock } from 'react-icons/fi';
import Icon from '../../assets/mapa.svg';
import { useAuth } from '../../hooks/Auth';
import { toast } from 'react-toastify';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  async function handleSignin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await signIn({ email, password });
      history.push('/dashboard');
    } catch (err) {
      toast.error('Falha ao realizar logon');
    }
  }

  return (
    <Container>
      <div>
        <div>
          <img src={Icon} alt="IHeros" />
        </div>
        <h2>IHeros</h2>
        <form onSubmit={handleSignin}>
          <div>
            <FiUser color="#3b3b28" size={16} />
            <input
              type="text"
              placeholder="digite seu usuario"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <FiLock color="#3b3b28" size={16} />
            <input
              type="password"
              placeholder="digite sua senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
