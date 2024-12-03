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

export function Checkout() {
  const theme = useTheme();

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
            <input name="zip" placeholder="CEP" />
            <input name="street" placeholder="Rua" />
            <input name="number" placeholder="Número" />
            <input name="etc" placeholder="Complemento" />
            <input name="neighborhood" placeholder="Bairro" />
            <input name="city" placeholder="Cidade" />
            <input name="state" placeholder="UF" />
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
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
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
