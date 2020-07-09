import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body,input,button{
  font-size: 16px;
}

body{
  background: #312E38;
  color: #FFF;
  -webkit-font-smoothing: antialiased;


}
#root{
  display: flex;
  flex-direction:row;

}
button{
  cursor:pointer
}
li{
  list-style-type: none;
}
`;
