import styled from "styled-components";

export const StyledCheckout = styled.main`
  display: grid;
  grid-template-columns: 0.7fr 0.5fr;
  gap: 3.2rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h3 {
      font-size: 1.8rem;
    }

    > div {
      padding: 4rem;
      background-color: ${({ theme }) => theme.color.baseCard};

      svg {
        margin-top: 0.3rem;
      }

      header {
        display: flex;
        gap: 0.8rem;
        align-items: start;

        p {
          small {
            display: block;
            font-size: 1.4rem;
          }
        }
      }

      .fields {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 1.2rem;

        .field {
          position: relative;

          small {
            display: none; /* Inicialmente oculto */
            position: absolute;
            bottom: 120%;
            left: 50%;
            transform: translateX(-50%);
            padding: 0.5rem 1rem;
            color: ${({ theme }) => theme.color.danger};
            background-color: ${({ theme }) => theme.color.background};
            box-shadow: 0.1rem 0.1rem 0.1rem 0rem
              ${({ theme }) => theme.color.baseLabel};
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
              border-color: ${({ theme }) => theme.color.baseCard} transparent
                transparent transparent;
            }

            /* Sombra da seta */
            &::before {
              content: "";
              position: absolute;
              top: calc(
                100% + 0.1rem
              ); /* Ajuste ligeiramente abaixo da seta principal */
              left: 50%;
              transform: translateX(-50%);
              border-width: 0.5rem;
              border-style: solid;
              border-color: rgba(0, 0, 0, 0.3) transparent transparent
                transparent; /* Cor da sombra */
              z-index: -1; /* Envia para trás do balão */
            }

            &:not(:empty) {
              display: block; /* Só exibe quando não está vazio */
            }
          }

          &:nth-child(1) {
            grid-column: span 4;
          }
          &:nth-child(2) {
            grid-column: span 12;
          }

          &:nth-child(3) {
            grid-column: span 4;
          }

          &:nth-child(4) {
            grid-column: span 8;
          }

          &:nth-child(5) {
            grid-column: span 4;
          }

          &:nth-child(6) {
            grid-column: span 6;
          }

          &:nth-child(7) {
            grid-column: span 2;
          }
        }
      }

      .payment-options {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.2rem;

        input {
          display: none;

          &:hover {
            + label {
              background-color: ${({ theme }) => theme.color.baseHover};
            }
          }
          &:checked + label {
            background-color: ${({ theme }) => theme.color.lightPurple};
          }
        }

        label {
          display: flex;
          gap: 0.5rem;
          align-items: center;

          background-color: ${({ theme }) => theme.color.baseButton};
          padding: 1.6rem 2rem;
          border-radius: 0.6rem;
          font-size: 1.2rem;

          svg {
            color: ${({ theme }) => theme.color.darkPurple};
            font-size: 1.6rem;
            margin: 0;
          }
        }
      }
    }

    .confirm {
      border-radius: 0 6.4rem 0 6.4rem;

      .total {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        span {
          display: flex;
          justify-content: space-between;
          align-items: center;
          small {
            font-size: 1.4rem;
          }
          b {
            font-size: 2rem;
          }
        }

        a {
          background-color: ${({ theme }) => theme.color.yellow};
          color: ${({ theme }) => theme.color.white};
          padding: 1.2rem 0.8rem;
          height: 4.6rem;
          border-radius: 0.6rem;
          font-size: 1.4rem;
          text-align: center;

          &:hover {
            background-color: ${({ theme }) => theme.color.darkYellow};
          }
        }
      }
    }
  }
`;
