import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 32px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.brand {
    a {
      display: flex;
      gap: 0.5rem;
      line-height: 1.9rem;
      div {
        display: flex;
        flex-direction: column;
        strong {
          font-size: 2.5rem;
        }
        span {
          font-size: 2.1rem;
        }
      }
    }
  }

  div.checkout {
    display: flex;
    align-items: center;
    gap: 12px;
    a {
      display: flex;
      position: relative;
      border-color: transparent;
      border-width: 0.3rem;
      border-style: solid;
      border-radius: 0.6rem;
      background-color: ${({ theme }) => theme.color.lightYellow};

      &:hover,
      &.active {
        border-color: ${({ theme }) => theme.color.darkYellow};
        transition: color 0.5s ease;
      }

      svg {
        padding: 0.5rem;
        border-radius: 0.6rem;
        height: 3.2rem;
        width: 3.2rem;
        color: ${({ theme }) => theme.color.darkYellow};
        background-color: ${({ theme }) => theme.color.lightYellow};
      }

      b {
        position: absolute;

        display: flex;
        justify-content: center;
        align-items: center;

        bottom: 75%;
        left: 75%;
        font-size: 1.2rem;
        border-radius: 1000px;
        background-color: ${({ theme }) => theme.color.darkYellow};
        color: ${({ theme }) => theme.color.white};
        min-width: 2rem;
        height: 2rem;
      }
    }
  }
`;
