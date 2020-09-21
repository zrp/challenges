import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
    margin: 0 auto;
`;

export const Section = styled.section``;


export const Logo = styled.div``;

export const Logon = styled.form`
    margin-top: 100px;
    a {
        text-decoration: none;
    }
`;
export const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 32px;
    color: #fff;
`;

export const Username = styled.input`
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
`;
export const Password = styled.input`
  margin-top: 16px;  
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
`;
export const Enter = styled.button`
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


export const Register = styled.text`
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
