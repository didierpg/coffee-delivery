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

export interface IAddress {
  zip: string;
  street: string;
  number: number;
  etc?: string;
  neighborhood: string;
  city: string;
  state:
    | "AC"
    | "AL"
    | "AP"
    | "AM"
    | "BA"
    | "CE"
    | "DF"
    | "ES"
    | "GO"
    | "MA"
    | "MT"
    | "MS"
    | "MG"
    | "PA"
    | "PB"
    | "PR"
    | "PE"
    | "PI"
    | "RJ"
    | "RN"
    | "RS"
    | "RO"
    | "RR"
    | "SC"
    | "SP"
    | "SE"
    | "TO";
}

export type PaymentMethodType = "debit" | "credit" | "cash";

export interface ICartItem {
  coffee: ICoffee;
  amount: number;
  setAmount?: (amount: number) => void;
}

export interface ITotals {
  subtotal: string;
  shipping: string;
  total: string;
}

export interface IOrderContext {
  coffees: ICoffee[];
  address?: IAddress;
  setAddress: (address: IAddress) => void;
  paymentMethod?: PaymentMethodType;
  setPaymentMethod: (method: PaymentMethodType) => void;
  cart?: ICartItem[];
  setCart: (cartItems: ICartItem[]) => void;
  addCartItem: (cartItem: ICartItem) => void;
  totals?: ITotals;
  setTotals: (totals: ITotals) => void;
}
