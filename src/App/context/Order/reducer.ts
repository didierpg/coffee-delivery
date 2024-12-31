import { ADD_CART_ITEM, REMOVE_CART_ITEM, UPDATE_TOTAL } from "./actions";
import { IOrder, OrderActionType, paymentMethods, states } from "./types";

export const initialState = (): IOrder => {
  const storedOrder = localStorage.getItem("order");
  return storedOrder
    ? JSON.parse(storedOrder)
    : {
        zip: "",
        street: "",
        number: "",
        etc: "",
        neighborhood: "",
        city: "",
        state: states[0],
        payment: paymentMethods[0],
        total: {
          sub: 0,
          delivery: 0,
          final: 0,
        },
        cart: [],
      };
};

export const reducer = (
  state: IOrder,
  { type, payload }: OrderActionType
): IOrder => {
  switch (type) {
    case ADD_CART_ITEM: {
      const cartItem = payload;
      const isCartItemAlreadyAdded = state.cart.find(
        (previousCartItem) => previousCartItem.coffee.id === cartItem.coffee.id
      );

      if (isCartItemAlreadyAdded) {
        return {
          ...state,
          cart: state.cart.map((previousCartItem) =>
            previousCartItem.coffee.id === cartItem.coffee.id
              ? {
                  ...previousCartItem,
                  amount: previousCartItem.amount + cartItem.amount,
                }
              : previousCartItem
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, cartItem],
        };
      }
    }

    case REMOVE_CART_ITEM: {
      return {
        ...state,
        cart: [
          ...state.cart.filter((cartItem) => cartItem.coffee.id !== payload.id),
        ],
      };
    }

    case UPDATE_TOTAL: {
      const sub =
        payload.reduce(
          (previousValue, currentValue) =>
            previousValue + currentValue.coffee.price * currentValue.amount,
          0
        ) || 0;

      const delivery = 10;

      const final = sub + delivery;

      return {
        ...state,
        total: {
          sub,
          delivery,
          final,
        },
      };
    }
    default:
      return { ...state };
  }
};
