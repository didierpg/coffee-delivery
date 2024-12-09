import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { StyledCheckout } from "./styled";
import { useTheme } from "styled-components";
import { CoffeeItem } from "./CoffeeItem";
import { Link } from "react-router-dom";
import { ICoffee } from "../Home/CoffeeCard";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function Checkout() {
  const theme = useTheme();

  const coffees: ICoffee[] = [
    {
      id: "americano",
      name: "Expresso Americano",
      imageUrl: "src/assets/coffees/americano.svg",
      price: 9.9,
    },
    {
      id: "arabe",
      name: "Árabe",
      imageUrl: "src/assets/coffees/arabe.svg",
      price: 9.9,
    },
    {
      id: "capuccino",
      name: "Capuccino",
      imageUrl: "src/assets/coffees/capuccino.svg",
      price: 9.9,
    },
  ];

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
    state: z.enum(
      [
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
      ],
      {
        required_error: "UF é obrigatório",
        invalid_type_error: "Selecione um estado válido",
      }
    ),
  });

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addressSchema),
    mode: "all",
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, ""); // Remove all non-numeric characters
    value = value.slice(0, 8); // Limit to 8 digits
    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d)/, "$1-$2"); // Add dash after 5 digits
    }
    event.target.value = value; // Update the input value
  };

  return (
    <StyledCheckout>
      <section>
        <h3>Complete seu pedido</h3>
        <div>
          <header>
            <MapPinLine color={theme.color.darkYellow} />
            <p>
              Endereço de entrega
              <small>Informe o endereço onde deseja receber seu pedido</small>
            </p>
          </header>
          <div className="fields">
            <div className="field">
              <small>{errors.zip?.message?.toString()}</small>
              <input
                {...register("zip")}
                placeholder="CEP"
                onInput={handleInput}
              />
            </div>

            <div className="field">
              <small>{errors.street?.message?.toString()}</small>
              <input {...register("street")} placeholder="Rua" />
            </div>

            <div className="field">
              <small>{errors.number?.message?.toString()}</small>
              <input {...register("number")} placeholder="Número" />
            </div>
            <div className="field">
              <small>{errors.etc?.message?.toString()}</small>
              <input {...register("etc")} placeholder="Complemento" />
            </div>
            <div className="field">
              <small>{errors.neighborhood?.message?.toString()}</small>
              <input {...register("neighborhood")} placeholder="Bairro" />
            </div>
            <div className="field">
              <small>{errors.city?.message?.toString()}</small>
              <input {...register("city")} placeholder="Cidade" />
            </div>
            <div className="field">
              <small>{errors.state?.message?.toString()}</small>
              <select {...register("state")}>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <header>
            <CurrencyDollar color={theme.color.darkPurple} />
            <p>
              Pagamento
              <small>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </small>
            </p>
          </header>
          <div className="payment-options">
            <input
              type="radio"
              name="payment"
              id="credit"
              value="credit-card"
              required
            />
            <label htmlFor="credit">
              <CreditCard />
              CARTÃO DE CRÉDITO
            </label>
            <input type="radio" name="payment" id="debit" value="debit-card" />
            <label htmlFor="debit">
              <Bank />
              CARTÃO DE DÉBITO
            </label>
            <input type="radio" name="payment" id="cash" value="cash" />
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
          {coffees.map((coffee) => (
            <CoffeeItem key={coffee.id} {...coffee} />
          ))}
          <div className="total">
            <span>
              <small>Total de itens</small>
              R$ 99,99
            </span>
            <span>
              <small>Entrega</small>
              R$ 99,99
            </span>
            <span>
              <b>Total</b>
              <b>R$ 999,99</b>
            </span>
            <Link to="/success">CONFIRMAR PEDIDO</Link>
          </div>
        </div>
      </section>
    </StyledCheckout>
  );
}
