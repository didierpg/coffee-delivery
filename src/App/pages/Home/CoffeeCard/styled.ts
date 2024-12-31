import styled from "styled-components";

export const StyledCoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  width: 25.6rem;
  height: 31rem;
  background-color: ${({ theme }) => theme.color.baseCard};
  border-radius: 0.6rem 3.6rem;
  text-align: center;

  header {
    height: 6rem;
    position: relative;

    img {
      position: absolute;
      right: 5rem;
      bottom: -1rem;
      width: 12rem;
      height: 12rem;
    }
  }

  strong {
    display: flex;
    justify-content: center;
    gap: 0.4rem;
    color: ${({ theme }) => theme.color.darkYellow};
    span {
      background-color: ${({ theme }) => theme.color.lightYellow};
      padding: 0.4rem 0.8rem;
      border-radius: 10rem;
      font-size: 1rem;
      text-transform: uppercase;
    }
  }

  h3 {
    color: ${({ theme }) => theme.color.baseSubtitle};
    font-size: 2rem;
  }

  small {
    color: ${({ theme }) => theme.color.baseLabel};
    font-size: 1.4rem;
    text-align: center;
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.color.baseText};
    }

    h2 {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.color.baseText};
      margin: 0;

      small {
        color: ${({ theme }) => theme.color.baseText};
        font-weight: normal;
        font-family: ${({ theme }) => theme.font.roboto};
      }
    }

    form {
      display: inherit;
      gap: inherit;
      position: relative;
      button[type="submit"] {
        padding: 0.8rem;
        color: ${({ theme }) => theme.color.baseCard};
        background-color: ${({ theme }) => theme.color.darkPurple};
        border-radius: 0.6rem;

        svg {
          font-size: 1.8rem;
        }

        &:hover {
          background-color: ${({ theme }) => theme.color.purple};
        }
      }
    }
  }
`;
