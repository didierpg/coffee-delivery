import { ICartItem, OrderActionType } from "./types";

export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const UPDATE_TOTAL = "UPDATE_TOTAL";

export function addCartItem(cartItem: ICartItem): OrderActionType {
  return { type: ADD_CART_ITEM, payload: cartItem };
}

export function removeCartItem(id: string): OrderActionType {
  return { type: REMOVE_CART_ITEM, payload: { id } };
}

export function updateTotal(cart: ICartItem[]): OrderActionType {
  return { type: UPDATE_TOTAL, payload: cart };
}
