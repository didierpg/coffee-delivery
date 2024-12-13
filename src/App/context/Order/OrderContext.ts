import { createContext } from "react";
import { IOrderContext } from "./types";

export const OrderContext = createContext<IOrderContext | undefined>(undefined);
