import styled from "styled-components";

export const StyledErrorMessage = styled.small`
  display: none; /* Inicialmente oculto */
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.color.danger};
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: 0.1rem 0.1rem 0.1rem 0rem ${({ theme }) => theme.color.baseLabel};
  border-radius: 0.25rem;
  text-align: center;

  /* Seta principal */
  &::after {
    content: "";
    position: absolute;
    top: 100%; /* Fica logo abaixo do balão */
    left: 50%;
    transform: translateX(-50%);
    border-width: 0.5rem;
    border-style: solid;
    border-color: ${({ theme }) => theme.color.baseCard} transparent transparent
      transparent;
  }

  /* Sombra da seta */
  &::before {
    content: "";
    position: absolute;
    top: calc(100% + 0.1rem); /* Ajuste ligeiramente abaixo da seta principal */
    left: 50%;
    transform: translateX(-50%);
    border-width: 0.5rem;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.3) transparent transparent transparent; /* Cor da sombra */
    z-index: -1; /* Envia para trás do balão */
  }

  &:not(:empty) {
    display: block; /* Só exibe quando não está vazio */
  }
`;
