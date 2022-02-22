import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
*{
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    font-family: 'Nanum Gothic Coding', monospace;
font-family: 'Noto Sans KR', sans-serif;
font-family: 'Roboto', sans-serif;
}
`;
export default GlobalStyle;
