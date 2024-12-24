import styled from "styled-components";

export const StyledInputNumber = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.baseButton};
  width: 8.8rem;

  border-radius: 0.6rem;
  border-color: transparent;
  border-width: 0.3rem;
  border-style: solid;

  * {
    outline: none;
  }

  button[type="button"] {
    padding: 0.9rem 0.8rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.purple};
    background-color: transparent;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.color.darkPurple};
    }

    svg {
      font-size: 1.6rem;
    }
  }

  input[type="number"] {
    padding: 0;
    background-color: transparent;
    text-align: center;
    border: none;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
    }
  }
  &:focus-within {
    border-color: ${({ theme }) => theme.color.darkYellow};
    input {
      font-weight: bold;
    }
  }
`;
