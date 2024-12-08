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

        input {
          height: 4.2rem;
          padding: 1.2rem;
          font-size: 1.4rem;

          border-radius: 0.4rem;
          border-style: solid;
          border-width: 0.3rem;
          border-color: transparent;

          &:focus {
            border-color: ${({ theme }) => theme.color.darkYellow};
          }

          &[name="zip"] {
            grid-column: span 4;
          }

          &[name="street"] {
            grid-column: span 12;
          }

          &[name="number"] {
            grid-column: span 4;
          }

          &[name="etc"] {
            grid-column: span 8;
          }

          &[name="neighborhood"] {
            grid-column: span 4;
          }

          &[name="city"] {
            grid-column: span 6;
          }

          &[name="state"] {
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
