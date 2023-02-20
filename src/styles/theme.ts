import { DefaultTheme, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing : border-box;
  }
  
  body {
    display : flex;
    flex-direction: column;
    align-items: center;
    width : 100%;
    height : 100vh;
    color : ${({ theme }) => theme.color.black};
    background-color : ${({ theme }) => theme.color.indigo_0}
  }

  a {
    text-decoration : none;
    color:inherit;
  }
`;

const color = {
  black: "#111",
  white: "#fff",
  indigo_0: "#edf2ff",
};

export type Color = typeof color;

export const theme: DefaultTheme = {
  color,
};
