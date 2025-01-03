import styled from "styled-components";

export const StyledCheckout = styled.main`
  form {
    // border: 1px solid red;
    width: 100%;
    display: grid;
    gap: 3.2rem;
    grid-template-columns: 1fr;

    @media (min-width: 769px) {
      grid-template-columns: 0.7fr 0.5fr;
    }

    section {
      // border: 1px solid orange;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      h3 {
        font-size: 1.8rem;
      }

      div.delivery,
      div.payment,
      div.confirm {
        // border: 1px solid gold;

        > div {
          // border: 1px solid cyan;

          > * {
            // border: 1px solid purple;
          }
        }

        padding: 4rem;
        background-color: ${({ theme }) => theme.color.baseCard};

        svg {
          margin-top: 0.3rem;
        }

        header {
          // border: 1px solid lime;

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
      }

      div.delivery {
        max-width: fit-content;

        div.fields {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.2rem;

          .field {
            position: relative;
            &:nth-child(1) {
              grid-column: span 4;

              @media (max-width: 768px) {
                grid-column: span 12;
              }
            }

            &:nth-child(2) {
              grid-column: span 12;

              @media (max-width: 768px) {
                grid-column: span 12;
              }
            }

            &:nth-child(3) {
              grid-column: span 4;

              @media (max-width: 768px) {
                grid-column: span 12;
              }
            }

            &:nth-child(4) {
              grid-column: span 8;

              @media (max-width: 768px) {
                grid-column: span 12;
              }
            }

            &:nth-child(5) {
              grid-column: span 4;

              @media (max-width: 768px) {
                grid-column: span 12;
              }
            }

            &:nth-child(6) {
              grid-column: span 6;

              @media (max-width: 768px) {
                grid-column: span 12;
              }
            }

            &:nth-child(7) {
              grid-column: span 2;

              @media (max-width: 768px) {
                grid-column: span 12;
              }
            }
          }
        }
      }

      div.payment {
        div.payment-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;

          @media (max-width: 768px) {
            grid-template-columns: 1fr;
          }

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
            justify-content: center;

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

      div.confirm {
        border-radius: 0 6.4rem 0 6.4rem;

        div.total {
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

          button {
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
  }
`;
