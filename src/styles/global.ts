import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Configuração de tipografia */
  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    margin: 0 10%;
    font-family: ${({ theme }) => theme.font.roboto}, sans-serif;
    font-size: 1.6rem; /* 16px */
    line-height: 1.5;
    color: ${({ theme }) => theme.color.baseText};
    background-color: ${({ theme }) => theme.color.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Links */
  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.color.purple};
  }

  /* Listas */
  ul, ol {
    list-style: none;
  }

  /* Botões */
  button {
    line-height: 0;
    border: none;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.roboto}, sans-serif;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  /* Inputs e formulários */
  input, select, textarea {
    font-family: ${({ theme }) => theme.font.roboto}, sans-serif;
    font-size: inherit;
    outline: none;
    background-color: ${({ theme }) => theme.color.baseInput};
    color: ${({ theme }) => theme.color.baseText};
    padding: 0.8rem;
    width: 100%;
    font-size: 1.4rem;

    border-radius: 0.4rem;
    border-style: solid;
    border-width: 0.3rem;
    border-color: transparent;

    &:focus {
      border-color: ${({ theme }) => theme.color.darkYellow};
    }
  }

  input::placeholder, textarea::placeholder {
    color: ${({ theme }) => theme.color.baseLabel};
  }

  textarea {
    resize: none;
  }

  /* Seleção */
  ::selection {
    background-color: ${({ theme }) => theme.color.lightPurple};
    color: ${({ theme }) => theme.color.baseTitle};
  }

  /* Scrollbar (para navegadores que suportam) */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.purple};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.baseHover};
  }

  /* Altura mínima para garantir que páginas ocupem toda a viewport */
  #root, body, html {
    height: 100%;
  }
  
  /* Base para cartões */
  .card {
    background-color: ${({ theme }) => theme.color.baseCard};
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1.6rem;
  }

  /* Estilo básico para títulos */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.baloo}, cursive;
    color: ${({ theme }) => theme.color.baseTitle};
    line-height: 1.2;
  }

  /* Espaçamento padrão para parágrafos */
  p {
    margin-bottom: 1.6rem;
  }

  hr {
    border-color: ${({ theme }) => theme.color.baseCard};
    border-width: 1px;
    margin: 2.4rem auto;
    opacity: .2;

  }

`;
