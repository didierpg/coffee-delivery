type CoffeeTag =
  | "Alcóolico"
  | "Especial"
  | "Gelado"
  | "Tradicional"
  | "Com Leite";
export interface ICoffee {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  tags: CoffeeTag[];
}

export const states = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
] as const;

export type StateType = (typeof states)[number];
export interface IAddress {
  zip: string;
  street: string;
  number: string;
  etc?: string;
  neighborhood: string;
  city: string;
  state: StateType;
}

export const paymentMethods = [
  "Cartão de Débito",
  "Cartão de Crédito",
  "Dinheiro",
] as const;

export type PaymentMethodType = (typeof paymentMethods)[number];

export interface ICartItem {
  coffee: ICoffee;
  amount: number;
  setAmount?: (amount: number) => void;
}

export interface ITotal {
  sub: number | 0;
  delivery: number | 0;
  final: number | 0;
}

export interface IOrder extends IAddress {
  payment: PaymentMethodType;
  total: ITotal;
}

export interface IOrderContext {
  coffees: ICoffee[];
  order?: IOrder;
  setOrder: (order: IOrder) => void;
  cart?: ICartItem[];
  setCart: (cartItems: ICartItem[]) => void;
  addCartItem: (cartItem: ICartItem) => void;
  removeCartItem: (id: string) => void;
}
