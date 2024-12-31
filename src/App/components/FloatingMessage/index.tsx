import { useState, useEffect } from "react";
import { StyledFloatingMessage } from "./styled";

interface FloatingMessageProps {
  message: string;
  onAnimationEnd: () => void;
}

export function FloatingMessage({
  message,
  onAnimationEnd,
}: FloatingMessageProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onAnimationEnd();
    }, 700);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <StyledFloatingMessage isVisible={isVisible}>
      {message}
    </StyledFloatingMessage>
  );
}
