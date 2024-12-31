import { Trash } from "phosphor-react";
import { StyledCoffeeItem } from "./styled";
import { InputNumber } from "../../../components/InputNumber";
import { ICartItem } from "../../../context/Order/types";
import { useState } from "react";
import { addCartItem, removeCartItem, useOrder } from "../../../context/Order";

export function CartItem({ coffee, amount: currentAmount }: ICartItem) {
  const [amount, setAmount] = useState(currentAmount);
  const total = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(coffee.price * amount);

  const { dispatch } = useOrder();

  const handleOnClick = () => {
    if (confirm(`Deseja remover o café: ${coffee.name}`))
      dispatch(removeCartItem(coffee.id));
  };

  function handleSetAmount(value: number) {
    const currentAmount = amount;
    const newAmount = value;

    dispatch(
      addCartItem({
        coffee,
        amount: newAmount - currentAmount,
      })
    );

    setAmount(value);
  }

  return (
    <StyledCoffeeItem id={coffee.id}>
      <span>
        <img src={coffee.imageUrl} />
        <span>
          {coffee.name}
          <div className="actions">
            <InputNumber value={amount} setAmount={handleSetAmount} />
            <button type="button" onClick={handleOnClick} className="remove">
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
