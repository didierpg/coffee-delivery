import { StyledSuccess } from "./styled";
import DeliveringImage from "../../../assets/delivering.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
export function Success() {
  return (
    <StyledSuccess>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <span>
        <div>
          <span>
            <MapPin weight="fill" />
            <p>
              Entrega em <b>Rua João Daniel Martinelli, 102</b>
              <br />
              Farrapos - Porto Alegre, RS
            </p>
          </span>
          <span>
            <Timer weight="fill" />
            <p>
              Previsão de entrega
              <br />
              <b>20 min - 30 min </b>
            </p>
          </span>
          <span>
            <CurrencyDollar weight="fill" />
            <p>
              Pagamento na entrega
              <br />
              <b>Cartão de Crédito</b>
            </p>
          </span>
        </div>
        <div>
          <img src={DeliveringImage} />
        </div>
      </span>
    </StyledSuccess>
  );
}
