import { useContext, createContext } from "react";
import { IOrderContext } from "./types";

export const OrderContext = createContext<IOrderContext | undefined>(undefined);

export const useOrder = (): IOrderContext => {
  const orderContext = useContext(OrderContext);
  if (!orderContext) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return orderContext;
};
