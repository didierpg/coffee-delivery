import { Trash } from "phosphor-react";
import { StyledCoffeeItem } from "./styled";
import { ICoffee } from "../../Home/CoffeeCard";
import { InputNumber } from "../../../components/InputNumber";
import { useState } from "react";

export function CoffeeItem({ id, name, imageUrl, price }: ICoffee) {
  const [amount, setAmount] = useState(1);

  return (
    <StyledCoffeeItem id={id}>
      <span>
        <img src={imageUrl} />
        <span>
          {name}
          <div className="actions">
            <InputNumber value={amount} setAmount={setAmount} />
            <button className="remove">
              <Trash />
              <span>REMOVER</span>
            </button>
          </div>
        </span>
        <b>
          <b>R$ </b>
          {new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(price * amount)}
        </b>
      </span>
      <hr />
    </StyledCoffeeItem>
  );
}
