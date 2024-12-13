import { Trash } from "phosphor-react";
import { StyledCoffeeItem } from "./styled";
import { InputNumber } from "../../../components/InputNumber";
import { ICartItem } from "../../../context/Order/types";
import { useState } from "react";

export function CartItem({
  coffee: { id, name, imageUrl, price },
  amount: currentAmount,
}: ICartItem) {
  const [amount, setAmount] = useState(currentAmount);
  const total = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price * amount);

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
          {total}
        </b>
      </span>
      <hr />
    </StyledCoffeeItem>
  );
}
