import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
`;
export const ContainerThreatsHistory = styled.div`
  width: 100%;

  > span {
    padding: 5px;
  }

  ul {
    li {
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 5px;
        padding: 10px;
        border-radius: 4px;
        background: #3b3b3b;

        div {
          display: flex;
          flex-direction: column;
          span {
            margin-top: 5px;
            font-size: 12px;
          }
        }
      }

      svg {
        margin: 0 10px;
        color: #5cb85c;
      }
    }
  }
`;
export const ButtonPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 30px;
  button {
    padding: 4px 8px;
    margin: 5px;
    border-radius: 100%;
    font-size: 12px;
    border: none;
    color: #fff;
    background: #3b3b3b;
    :hover {
      color: #ff9000;
    }
  }
`;
