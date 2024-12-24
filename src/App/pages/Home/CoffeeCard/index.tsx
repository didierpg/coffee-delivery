import { ShoppingCart } from "phosphor-react";

import { StyledCoffeeCard } from "./styled";
import { InputNumber } from "../../../components/InputNumber";
import { useForm } from "react-hook-form";
import { ICoffee } from "../../../context/Order/types";
import { useOrder } from "../../../context/Order";

interface IFormData {
  amount: number;
}

export function CoffeeCard({
  id,
  name,
  description,
  imageUrl,
  price,
  tags,
}: ICoffee) {
  const { addCartItem } = useOrder();
  const { register, setValue, watch, handleSubmit } = useForm<IFormData>({
    defaultValues: { amount: 1 },
  });
  const amount = watch("amount", 1);

  function onSubmit({ amount }: IFormData) {
    addCartItem({
      amount,
      coffee: {
        id,
        name,
        description,
        imageUrl,
        price,
        tags,
      },
    });
  }

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputNumber
            value={amount}
            setAmount={(amount) => setValue("amount", amount)}
            {...register("amount", { valueAsNumber: true })}
          />
          <button type="submit">
            <ShoppingCart weight="fill" />
          </button>
        </form>
      </footer>
    </StyledCoffeeCard>
  );
}
