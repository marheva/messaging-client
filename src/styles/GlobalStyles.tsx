import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/styledComponentsUtils/px2vw";


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:border-box
  }
  #root {
    width: 100%;
    height: 100%;
  }
  .App {
    width: 100%;
    height: 100%;
  }

  .ant-layout {
    height: 100%;
  }
`;

export default GlobalStyle;
