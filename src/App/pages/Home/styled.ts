import styled from "styled-components";

export const StyledHome = styled.main`
  display: flex;
  flex-direction: column;

  .banner {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .information {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 20px;

        h1 {
          font-size: 4.8rem;
        }
      }

      .details {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 2 colunas de tamanho igual */
        gap: 2rem; /* Espaçamento entre os itens */
        margin-top: 6.6rem;

        div {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          font-size: 1.6rem;

          svg {
            height: 38px;
            width: 38px;
            border-radius: 999px;
            padding: 8px;
            color: ${({ theme }) => theme.color.background};
          }
        }

        .cart {
          svg {
            background-color: ${({ theme }) => theme.color.darkYellow};
          }
        }
        .package {
          svg {
            background-color: ${({ theme }) => theme.color.baseText};
          }
        }
        .clock {
          svg {
            background-color: ${({ theme }) => theme.color.yellow};
          }
        }
        .coffee {
          svg {
            background-color: ${({ theme }) => theme.color.purple};
          }
        }
      }
      grid-area: text;
    }
    grid-template-areas: "text image";
    .image {
      display: flex;
      align-items: start;
      grid-area: image;
      img {
        width: 100%;
      }
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr; /* Uma coluna */
      grid-template-areas:
        "image"
        "text";
    }
  }

  h2 {
    margin: 4.8rem 0;
  }

  .catalog {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25.6rem, 1fr));
    row-gap: 4rem;
  }
`;
