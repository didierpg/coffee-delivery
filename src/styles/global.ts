import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${props => props.theme.color.background};
    color: ${props => props.theme.color.baseText};
}

body, input,  textarea, button {
    font-family: ${props => props.theme.font.roboto}, monospace;
    font-weight: 400;
    font-size: 1rem;
}

h1, h2, h3, h4 {
    font-family: ${props => props.theme.font.baloo}, sans-serif;
}
`