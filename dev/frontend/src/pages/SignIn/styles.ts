import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    > div {
      border: 2px dashed #ff9000;
      width: auto;
      padding: 20px;
      border-radius: 50%;
      margin-bottom: 15px;
      img {
        width: 100px;
        height: 100px;
      }
    }
    form {
      div {
        svg {
          margin: 5px 10px;
        }

        flex-direction: row;
        padding: 10px;
        background: #fff;
        margin: 10px 0 15px;
        width: 300px;
        border-radius: 4px;
        input {
          border: none;
        }
      }
      button {
        border: none;
        width: 300px;
        padding: 10px;
        border-radius: 4px;
        background: #ff9000;
        font-size: 16px;
        color: #3b3b38;
      }
    }
  }
`;
