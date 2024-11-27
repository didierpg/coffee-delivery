import { ShoppingCart } from "phosphor-react";

import { StyledCoffeeCard } from "./styled";
import { InputNumber } from "../../../components/InputNumber";
import { useState } from "react";

export interface ICoffee {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

type CoffeeTag =
  | "Alcóolico"
  | "Especial"
  | "Gelado"
  | "Tradicional"
  | "Com Leite";
export interface ICoffeeCard extends ICoffee {
  description: string;
  tags: CoffeeTag[];
}

export function CoffeeCard({
  id,
  name,
  description,
  imageUrl,
  price,
  tags,
}: ICoffeeCard) {
  const [amount, setAmount] = useState(1);

  return (
    <StyledCoffeeCard id={id}>
      <header>
        <img src={imageUrl} alt={`${name}. ${description}`} />
      </header>
      <strong>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </strong>
      <h3>{name}</h3>
      <small>{description}</small>
      <footer>
        <h2>
          <small>R$ </small>
          {new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(price)}
        </h2>
        <InputNumber value={amount} setAmount={setAmount} />
        <button type="button">
          <ShoppingCart weight="fill" />
        </button>
      </footer>
    </StyledCoffeeCard>
  );
}
