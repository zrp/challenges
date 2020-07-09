import styled from 'styled-components';
import { shade } from 'polished';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5%;
  background: #3b3b3b;
  height: 100vh;
  ul {
    margin: 10px;
    li:nth-child(1) {
      margin: 10px;
      > div {
        border: 2px solid rgb(0, 0, 0, 0);
        border-bottom-right-radius: 4px;
        padding-bottom: 20px;
        border-bottom-color: ${shade(0.2, '#312e38')};
      }
    }
    li + li {
      margin: 10px 0;

      cursor: pointer;

      div {
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 100%;
        :hover {
          background: ${shade(0.02, '#312E38')};
        }
        button {
          border: none;
          background: transparent;
        }
      }
    }
  }
`;
