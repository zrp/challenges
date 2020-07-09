import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 700px;
  margin: 30px;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 10px;
    box-shadow: 7px 7px 14px #2c2932, -7px -7px 14px #36333e;
    :nth-child(1) {
      border: 1px solid #ff9000;
    }

    span {
      margin-right: 10px;
      border-radius: 100%;
      svg {
        border-radius: 50%;
        box-shadow: 7px 7px 14px #2c2932, -7px -7px 14px #36333e;
      }
    }
  }
`;

export const ContainerHero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  border-radius: 4px;
  > div {
    display: flex;
    align-items: center;
    :nth-last-child(1) {
    }
    strong {
      width: 200px;
    }

    a {
      margin: 0 20px;
      text-decoration: none;
      color: #fff;
    }
    > svg {
      margin: 0 20px;
    }
    button {
      border: 0;
      background: transparent;
      svg {
        color: #fff;
      }
    }
  }
`;
