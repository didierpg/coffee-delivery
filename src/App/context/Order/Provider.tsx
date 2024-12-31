// src/context/Order/Provider.tsx
import { ReactNode, useEffect, useReducer } from "react";
import { OrderContext } from "./context";
import { initialState, reducer } from "./reducer";
import { updateTotal } from "./actions";
import { coffees } from "./data";

export interface IOrderProvider {
  children: ReactNode;
}

export function OrderProvider({ children }: IOrderProvider) {
  const [state, dispatch] = useReducer(reducer, initialState());

  useEffect(() => {
    dispatch(updateTotal(state.cart));
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(state));
  }, [state]);

  return (
    <OrderContext.Provider
      value={{
        coffees,
        state,
        dispatch,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
