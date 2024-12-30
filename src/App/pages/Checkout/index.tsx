import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { StyledCheckout } from "./styled";
import { useTheme } from "styled-components";
import { CartItem } from "./CartItem";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrder } from "../../context/Order";
import {
  ICartItem,
  IOrder,
  states,
  paymentMethods,
} from "../../context/Order/types";
import { ErrorMessage } from "./components/ErrorMessage";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { order, cart } = useOrder();

  const addressSchema = z.object({
    zip: z
      .string()
      .min(1, "CEP é obrigatório")
      .regex(
        /^\d{5}-?\d{3}$/,
        "CEP deve estar no formato 12345-678 ou 12345678"
      ),
    street: z.string().min(1, "Rua é obrigatória"),
    number: z
      .string()
      .min(1, "Número é obrigatório")
      .regex(/^\d+$/, "Número deve conter apenas dígitos"),
    etc: z.string().optional(),
    neighborhood: z.string().min(1, "Bairro é obrigatório"),
    city: z.string().min(1, "Cidade é obrigatória"),
    state: z.enum(states, {
      required_error: "UF is required",
      invalid_type_error: "Please select a valid state",
    }),
    payment: z.enum(paymentMethods),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IOrder>({
    resolver: zodResolver(addressSchema),
    mode: "all",
    defaultValues: { ...order },
  });

  const formatZip = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, ""); // Remove all non-numeric characters
    value = value.slice(0, 8); // Limit to 8 digits
    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d)/, "$1-$2"); // Add dash after 5 digits
    }
    event.target.value = value; // Update the input value
  };

  function onSubmit(order: IOrder) {
    navigate("/success", { state: order });
  }

  const { sub = 0, delivery = 0, final = 0 } = order?.total || {};

  const formattedSub = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(sub);
  const formattedDelivery = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(delivery);
  const formattedFinal = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(final);

  return (
    <StyledCheckout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <h3>Complete seu pedido</h3>
          <div className="delivery">
            <header>
              <MapPinLine color={theme.color.darkYellow} />
              <p>
                Endereço de entrega
                <small>Informe o endereço onde deseja receber seu pedido</small>
              </p>
            </header>
            <div className="fields">
              <div className="field">
                <ErrorMessage>{errors.zip?.message?.toString()}</ErrorMessage>
                <input
                  {...register("zip")}
                  placeholder="CEP"
                  onInput={formatZip}
                />
              </div>

              <div className="field">
                <ErrorMessage>
                  {errors.street?.message?.toString()}
                </ErrorMessage>
                <input {...register("street")} placeholder="Rua" />
              </div>

              <div className="field">
                <ErrorMessage>
                  {errors.number?.message?.toString()}
                </ErrorMessage>
                <input {...register("number")} placeholder="Número" />
              </div>
              <div className="field">
                <ErrorMessage>{errors.etc?.message?.toString()}</ErrorMessage>
                <input {...register("etc")} placeholder="Complemento" />
              </div>
              <div className="field">
                <ErrorMessage>
                  {errors.neighborhood?.message?.toString()}
                </ErrorMessage>
                <input {...register("neighborhood")} placeholder="Bairro" />
              </div>
              <div className="field">
                <ErrorMessage>{errors.city?.message?.toString()}</ErrorMessage>
                <input {...register("city")} placeholder="Cidade" />
              </div>
              <div className="field">
                <ErrorMessage>{errors.state?.message?.toString()}</ErrorMessage>
                <select {...register("state")}>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="payment">
            <header>
              <CurrencyDollar color={theme.color.darkPurple} />
              <p>
                Pagamento
                <small>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </small>
              </p>
            </header>
            <div className="payment-options">
              <ErrorMessage>{errors.payment?.message?.toString()}</ErrorMessage>
              <input
                type="radio"
                id="credit"
                value={paymentMethods[0]}
                {...register("payment")}
              />
              <label htmlFor="credit">
                <CreditCard />
                CARTÃO DE CRÉDITO
              </label>

              <input
                type="radio"
                id="debit"
                value={paymentMethods[1]}
                {...register("payment")}
              />
              <label htmlFor="debit">
                <Bank />
                CARTÃO DE DÉBITO
              </label>

              <input
                type="radio"
                id="cash"
                value={paymentMethods[2]}
                {...register("payment")}
              />
              <label htmlFor="cash">
                <Money />
                DINHEIRO
              </label>
            </div>
          </div>
        </section>

        <section>
          <h3>Cafés selecionados</h3>
          <div className="confirm">
            {cart?.map((item: ICartItem) => (
              <CartItem key={item.coffee.id} {...item} />
            ))}
            <div className="total">
              <span>
                <small>Total de itens</small>
                R$ {formattedSub}
              </span>
              <span>
                <small>Entrega</small>
                R$ {formattedDelivery}
              </span>
              <span>
                <b>Total</b>
                <b>R$ {formattedFinal}</b>
              </span>
              <button type="submit">CONFIRMAR PEDIDO</button>
            </div>
          </div>
        </section>
      </form>
    </StyledCheckout>
  );
}
