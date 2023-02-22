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
    background-color : ${({ theme }) => theme.color.orange_4}
  }

  a {
    text-decoration : none;
    color:inherit;
  }
`;

const color = {
  black: "#111",
  white: "#fff",
  orange_1: "#ffe8cc",
  orange_4: "#ffa94d",
  gray_1: "#f1f3f5",
};

export type Color = typeof color;

export const theme: DefaultTheme = {
  color,
};
