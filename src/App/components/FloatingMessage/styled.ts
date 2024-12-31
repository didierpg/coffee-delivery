import styled from "styled-components";

interface IStyledFloatingMessage {
  isVisible: boolean;
}

export const StyledFloatingMessage = styled.div<IStyledFloatingMessage>`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s, transform 1s;
  transform-origin: center;
  color: ${({ theme }) => theme.color.purple};
  font-family: ${({ theme }) => theme.font.baloo};
  font-weight: bold;
  font-size: 5rem;
  pointer-events: none;
  animation: float-up 1s ease-out;

  @keyframes float-up {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }
`;
