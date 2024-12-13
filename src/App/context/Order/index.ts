import { useContext } from "react";
import { OrderContext } from "./OrderContext";
import { IOrderContext } from "./types";

export const useOrder = (): IOrderContext => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
