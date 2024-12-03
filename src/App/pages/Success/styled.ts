import styled from "styled-components";

export const StyledSuccess = styled.main`
  h1 {
    color: ${({ theme }) => theme.color.darkYellow};
  }

  span {
    display: flex;
    flex: 1;
    justify-content: space-between;
    gap: 10rem;

    div:first-child {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 4rem;
      border-radius: 0.6rem 3.6rem 0.6rem 3.6rem;

      border-width: 0.2rem;
      border-style: solid;
      border-right-color: ${({ theme }) => theme.color.purple};
      border-top-color: ${({ theme }) => theme.color.yellow};
      border-left-color: ${({ theme }) => theme.color.yellow};
      border-bottom-color: ${({ theme }) => theme.color.purple};

      span {
        justify-content: flex-start;
        gap: 1rem;

        svg {
          padding: 0.8rem;
          width: 3.2rem;
          height: 3.2rem;
          border-radius: 100rem;
          color: ${({ theme }) => theme.color.background};
        }

        &:nth-child(1) svg {
          background-color: ${({ theme }) => theme.color.purple};
        }
        &:nth-child(2) svg {
          background-color: ${({ theme }) => theme.color.yellow};
        }
        &:nth-child(3) svg {
          background-color: ${({ theme }) => theme.color.darkYellow};
        }
      }
    }
  }
`;
