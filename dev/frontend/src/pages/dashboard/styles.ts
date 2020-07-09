import styled from 'styled-components';
interface ICard {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;

  margin: 0;
  display: flex;
  flex-direction: column;
`;
export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-gap: 0px;
  margin: 10px;
`;
export const ContainerHeroAvailable = styled.div<ICard>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-radius: 4px;
  margin: 10px 20px 10px 10px;
  height: 100px;
  width: 222px;
  background: ${props => props.color};
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 10px;
    h1 {
      font-size: 56px;
    }
  }
`;
export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 500px);
`;
export const ContainerThreatAllocated = styled.div`
  width: 100%;

  strong {
    margin-left: 10px;
  }
  ul {
    li {
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border: 1px solid #f0ad4e;
        border-radius: 4px;
        margin: 10px;
        div {
          display: flex;
          flex-direction: column;
          :nth-child(2) {
            display: flex;
            justify-content: center;
            align-items: center;
            small {
              margin-bottom: 5px;
            }
            button {
              display: flex;
              align-items: center;
              text-align: center;
              font-size: 14px;
              cursor: pointer;
              border-radius: 4px;
              border: none;
              padding: 5px;
              background: #f0ad4e;
              color: #fff;
              :hover {
                background: #5cb85c;
              }
              svg {
                margin-left: 5px;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
`;
export const ContainerThreatsOpen = styled.div`
  > strong {
    margin-left: 10px;
  }
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
        padding: 12px;
        border-radius: 4px;
        background: #3b3b3b;
        border: 1px solid #d9534f;
        & div + div {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          :hover {
            color: #f0ad4e;
          }
          span {
            margin-bottom: 5px;
          }
        }
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
      }
    }
  }
`;
export const ButtonPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

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
