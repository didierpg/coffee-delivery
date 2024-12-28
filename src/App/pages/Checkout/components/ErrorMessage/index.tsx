import { ReactNode } from "react";
import { StyledErrorMessage } from "./styled";

interface IErrorMessage {
  children: ReactNode;
}

export function ErrorMessage({ children }: IErrorMessage) {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
}
