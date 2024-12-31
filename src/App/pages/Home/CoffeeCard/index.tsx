import { ShoppingCart } from "phosphor-react";

import { StyledCoffeeCard } from "./styled";
import { InputNumber } from "../../../components/InputNumber";
import { useForm } from "react-hook-form";
import { ICoffee } from "../../../context/Order/types";
import { addCartItem, useOrder } from "../../../context/Order";
import { useState } from "react";
import { FloatingMessage } from "../../../components/FloatingMessage";

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
  const { dispatch } = useOrder();
  const { register, setValue, watch, handleSubmit } = useForm<IFormData>({
    defaultValues: { amount: 1 },
  });
  const amount = watch("amount", 1);
  const [floatingMessages, setFloatingMessages] = useState<string[]>([]);

  function onSubmit({ amount }: IFormData) {
    dispatch(
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
      })
    );
    setFloatingMessages((prev) => [...prev, `+${amount}`]);
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
          <button type="submit" aria-label={`Add ${name} to cart`}>
            <ShoppingCart weight="fill" />
          </button>
          {floatingMessages.map((message, index) => (
            <FloatingMessage
              key={index}
              message={message}
              onAnimationEnd={() =>
                setFloatingMessages((prev) =>
                  prev.filter((_, i) => i !== index)
                )
              }
            />
          ))}
        </form>
      </footer>
    </StyledCoffeeCard>
  );
}
