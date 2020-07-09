import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiTrendingUp,
  FiAward,
  FiBarChart2,
  FiLogOut,
  FiUser,
} from 'react-icons/fi';
import { useAuth } from '../../hooks/Auth';

import { Container } from './styles';

const Menu: React.FC = ({ children }) => {
  const { signOut } = useAuth();
  return (
    <>
      <Container>
        <ul>
          <li>
            <div>
              <FiUser color="#ff9000" size={24} />
            </div>
          </li>
          <li>
            <div>
              <Link to="/dashboard" target="main">
                <FiTrendingUp color="#ff9000" size={24} />
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/heroes" target="main">
                <FiAward color="#ff9000" size={24} />
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/history" target="main">
                <FiBarChart2 color="#ff9000" size={24} />
              </Link>
            </div>
          </li>
          <li>
            <div>
              <button onClick={() => signOut()}>
                <FiLogOut color="#ff9000" size={24} />
              </button>
            </div>
          </li>
        </ul>
      </Container>
      <div>{children}</div>
    </>
  );
};

export default Menu;
