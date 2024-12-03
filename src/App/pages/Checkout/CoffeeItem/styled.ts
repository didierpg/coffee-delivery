import styled from "styled-components";

export const StyledCoffeeItem = styled.div`
  > span {
    display: flex;
    align-items: start;
    gap: 2rem;

    img {
      width: 6.4rem;
      height: 6.4rem;
    }

    span {
      .actions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.8rem;
        .amount {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.35rem;
          background-color: ${({ theme }) => theme.color.baseButton};
          border-radius: 0.6rem;
          button {
            background-color: transparent;
          }
          input {
            background-color: transparent;
          }
        }
        .remove {
          display: flex;
          justify-content: center;
          gap: 0.4rem;
          align-items: center;
          width: 8.8rem;
          background-color: ${({ theme }) => theme.color.baseButton};
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
  }
`;
