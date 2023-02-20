import { DefaultTheme, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const theme: DefaultTheme = {
  color: "#111",
  backgroundColor: "#fff",
};

export const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing : border-box;
  }
  
  body {
    height : 100vh;
    color : ${(props) => props.theme.color}
  }

  a {
    text-decoration : none;
    color:inherit;
  }
`;
