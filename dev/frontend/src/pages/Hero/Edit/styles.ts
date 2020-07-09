import styled from 'styled-components';
interface ICheckBox {
  availability: boolean;
}
export const Container = styled.div`
  width: 700px;
  form {
    > div {
      padding: 10px;
      label {
        margin-right: 5px;
      }

      input {
        flex: 1;
        background: transparent;
        font-size: 16px;
        border: 0;
      }
    }
    button {
      border: 0;
      width: 100%;
      padding: 10px;
      border-radius: 4px;
      font-size: 16px;
      background: #5cb85c;
      color: #fff;
      font-weight: bold;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  }
`;
export const Input = styled.div`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 5px;
  label {
    color: #000;
  }
`;
export const Checkbox = styled.div<ICheckBox>`
  margin-top: 15px;
  input {
    display: none;
  }
  span {
    font-size: 16px;
    margin-right: 20px;
  }
  label {
    position: relative;
    padding: 1px 25px;

    border-radius: 50px;
    ${props =>
      props.availability
        ? 'background:#5cb85c; color:#fff'
        : 'background:#f1f1f1; color:#3d3d3d'};

    cursor: pointer;
    user-select: none;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -3px;
      left: 1px;
      bottom: 1px;

      right: 1;
      ${props =>
        props.availability ? 'background:#5cb85c' : 'background:#f1f1f1'};
      transition: all 0.4s;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 24px;
      height: 24px;

      border: 1px solid #fff;
      border-radius: 100%;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

      top: -3px;
      left: 1px;
      bottom: 1px;
      transition: all 0.4s;
      ${props => props.availability && 'transform: translateX(50px)'};
      ${props =>
        props.availability ? 'background:#5cb85c' : 'background:#3d3d3d'};
    }
  }
`;
export const ButtonBack = styled.div`
  padding: 10px;
  background: #d9534f;

  margin: 0 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  a {
    color: inherit;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 16px;
    text-decoration: none;
  }
`;
