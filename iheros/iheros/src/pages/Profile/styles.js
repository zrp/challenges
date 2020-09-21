import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    a {
        margin-left: auto;
    }
`;

export const Welcome = styled.span`
    color: #fff;
    font-size: 18px;
    margin-left: 24px;
`;
export const Register = styled.button`
    border-radius: 8px;
    border: none;
    width: 260px;
    height: 60px;
    background: #E02041;
    color: #fff;
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
export const Exit = styled.button`
    display: flex;
    align-items:center;
    justify-content: center;
    background: #E02041;
    border: none;
    border-radius: 8px;
    width: 60px;
    height: 60px;
    margin-left: 10px;
    transition: 0.2s;
    &:hover {
        filter: brightness(80%);
    }

`;

export const Main = styled.div``;
export const Title = styled.h1`
    color: #fff;
    font-size: 18px;
    margin-top: 80px;
    margin-bottom: 24px;
`;
export const Ul = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    list-style: none;
`;
export const Li = styled.li`
    ${'' /* background: #313131; */}
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;
`;
export const Description = styled.div``;

export const Alert = styled.strong`
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    font-size: 18px;
    color: #000;
    svg {
        margin-right: 10px;
    }

`;

export const Strong = styled.strong`
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
`;
export const Details = styled.p`
    color: #000;
    line-height: 21px;
    font-size: 14px;
    margin-bottom: 18px;
`;
export const Icons = styled.button`
    background: none;
    border: none;
    ${'' /* position: absolute; */}
    right: 24px;
    top: 24px;
    margin-bottom:15px;
`;



