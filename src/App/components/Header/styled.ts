import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 32px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .brand {
    a {
      display: flex;
      gap: 0.5rem;
      line-height: 1.9rem;
    }

    a div {
      display: flex;
      flex-direction: column;
    }

    a div strong {
      font-size: 2.5rem;
    }

    a div span {
      font-size: 2.1rem;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 12px;

    span {
      display: flex;
      align-items: center;
      padding: 8px;
      height: 38px;
      border-radius: 6px;
      color: ${({ theme }) => theme.color.darkPurple};
      background-color: ${({ theme }) => theme.color.lightPurple};
    }

    a {
      display: flex;
    }

    a svg {
      border-radius: 6px;
      padding: 8px;
      height: 38px;
      width: 38px;
      color: ${({ theme }) => theme.color.darkYellow};
      background-color: ${({ theme }) => theme.color.lightYellow};
    }
    a svg:hover {
      background-color: ${({ theme }) => theme.color.darkYellow};
      color: ${({ theme }) => theme.color.lightYellow};
      transition: color 0.2s ease, background-color 0.5s ease;
    }
  }
`;
