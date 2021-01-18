import { createGlobalStyle } from "styled-components";

import Fibre from "./Assets/fibre/fibre-font.woff";
import TimmonsNY from "./Assets/TIMMONS_NY_FINAL.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: "Fibre Vintage";
        src: local("Fibre Vintage"), url(${Fibre}) format("woff");
        font-weight: 300;
    }

    @font-face {
        font-family: "TIMMONS NY";
        src: local("TIMMONS NY"), url(${TimmonsNY}) format("woff2");
        font-weight: 300;
    }
`;
