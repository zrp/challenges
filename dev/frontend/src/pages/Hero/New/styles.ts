import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
`;

export const InputContainer = styled.div`
  margin: 0 10px;
  padding: 5px;
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: row;

  label {
    color: #3d3d3d;
    margin-right: 5px;
    padding: 5px;
    text-align: center;
  }
  input {
    align-items: center;
    border: 0;
    padding: 5px;
    margin-top: 2px;
    width: 300px;
  }
`;
export const SelectHeroClass = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  label {
    font-size: 16px;
    margin-bottom: 5px;
  }
  select {
    padding: 10px;
    font-size: 16px;
  }
`;
export const MapContainer = styled.div`
  padding: 10px;
  div {
    margin: 5px 0;
  }
`;
export const ContainerButtonSave = styled.div`
  margin: 0 10px;
  button {
    border: none;
    padding: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border-radius: 4px;
    width: 100%;
    background: #5cb85c;
    color: #fff;
    font-weight: bold;
  }
`;
export const ContainerButtonBack = styled.div`
  margin: 10px 15px 10px 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 96%;
  background: #d9534f;
  border-radius: 4px;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.5px;
  }
`;
