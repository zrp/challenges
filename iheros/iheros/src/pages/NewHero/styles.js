import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

`;
export const Section = styled.section`
    margin-bottom: 100px;
    a {
        text-decoration: none;
    }
`;
export const Logo = styled.div``;

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    margin-bottom: 32px;
`;

export const Details = styled.p`
    color: #fff;
    font-size: 20px;
    line-height: 32px;
`;
export const Return = styled.div`
    display: flex;
    align-items: center;
    margin-top:40px;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    transition: opacity 0.2s;
    
    &:hover {
        opacity: 0.8;
    }
    svg {
        margin-right: 10px;
    }
`;

export const Register = styled.form`
  input {
      margin-top:8px;
  }
`;

export const Username = styled.input`
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
`;
export const ClasseHero = styled.input`
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
`;
export const Location = styled.div`
    display: flex;
`;
export const Latitude = styled.input`
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
`;
export const Longitude = styled.input`
  width: 200px;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
  margin-left: 8px;
`;
export const ButtonRegister = styled.button`
    border-radius: 8px;
    width: 100%;
    height: 60px;
    background: #E02041;
    border: none;
    color: #fff;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: 0.2s;
    &:hover {
        filter: brightness(80%);
    }
`;

