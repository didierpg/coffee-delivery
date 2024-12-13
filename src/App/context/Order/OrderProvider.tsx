import { ReactNode, useEffect, useState } from "react";
import { OrderContext } from "./OrderContext";
import {
  IAddress,
  PaymentMethodType,
  ITotals,
  ICartItem,
  ICoffee,
} from "./types";

export interface IOrderProvider {
  children: ReactNode;
}

export function OrderProvider({ children }: IOrderProvider) {
  const coffees: ICoffee[] = [
    {
      id: "americano",
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      imageUrl: "src/assets/coffees/americano.svg",
      price: 9.9,
      tags: ["Tradicional"],
    },
    {
      id: "arabe",
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      imageUrl: "src/assets/coffees/arabe.svg",
      price: 9.9,
      tags: ["Especial"],
    },
    {
      id: "capuccino",
      name: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      imageUrl: "src/assets/coffees/capuccino.svg",
      price: 9.9,
      tags: ["Com Leite", "Tradicional"],
    },
    {
      id: "chocolate",
      name: "Chocolate",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      imageUrl: "src/assets/coffees/chocolate.svg",
      price: 9.9,
      tags: ["Com Leite", "Especial"],
    },
    {
      id: "cremoso",
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      imageUrl: "src/assets/coffees/cremoso.svg",
      price: 9.9,
      tags: ["Tradicional"],
    },
    {
      id: "cubano",
      name: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      imageUrl: "src/assets/coffees/cubano.svg",
      price: 9.9,
      tags: ["Alcóolico", "Especial", "Gelado"],
    },
    {
      id: "expresso",
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      imageUrl: "src/assets/coffees/expresso.svg",
      price: 9.9,
      tags: ["Tradicional"],
    },
    {
      id: "gelado",
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      imageUrl: "src/assets/coffees/gelado.svg",
      price: 9.9,
      tags: ["Gelado", "Tradicional"],
    },
    {
      id: "havaiano",
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      imageUrl: "src/assets/coffees/havaiano.svg",
      price: 9.9,
      tags: ["Especial"],
    },
    {
      id: "irlandes",
      name: "Irlandes",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      imageUrl: "src/assets/coffees/irlandes.svg",
      price: 9.9,
      tags: ["Alcóolico", "Especial"],
    },
    {
      id: "latte",
      name: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      imageUrl: "src/assets/coffees/latte.svg",
      price: 9.9,
      tags: ["Com Leite", "Tradicional"],
    },
    {
      id: "leite",
      name: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      imageUrl: "src/assets/coffees/leite.svg",
      price: 9.9,
      tags: ["Com Leite", "Tradicional"],
    },
    {
      id: "macchiato",
      name: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      imageUrl: "src/assets/coffees/macchiato.svg",
      price: 9.9,
      tags: ["Com Leite", "Tradicional"],
    },
    {
      id: "mochaccino",
      name: "Mochaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      imageUrl: "src/assets/coffees/mochaccino.svg",
      price: 9.9,
      tags: ["Com Leite", "Tradicional"],
    },
  ];

  const [address, setAddress] = useState<IAddress>();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>();
  const [cart, setCart] = useState<ICartItem[]>([]);

  const [totals, setTotals] = useState<ITotals>({
    subtotal: "0",
    shipping: "0",
    total: "0",
  });

  useEffect(() => {
    const subtotal =
      cart?.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.coffee.price * currentValue.amount,
        0
      ) || 0;

    const delivery = 10;

    const total = subtotal + delivery;

    setTotals({
      subtotal: new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(subtotal),
      shipping: new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(delivery),
      total: new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(total),
    });
  }, [cart]);


  return (
    <OrderContext.Provider
      value={{
        coffees,
        address,
        setAddress,
        paymentMethod,
        setPaymentMethod,
        cart,
        setCart,
        totals,
        setTotals,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
