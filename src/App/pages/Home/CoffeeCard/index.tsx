import { Plus, Minus, ShoppingCart } from "phosphor-react";

import AmericanoCoffeeImage from "../../../../assets/coffees/americano.svg";
import { StyledCoffeeCard } from "./styled";

export function CoffeeCard() {
  const labels: string[] = [
    "ALCOÓLICO",
    "COM LEITE",
    "ESPECIAL",
    "GELADO",
    "TRADICIONAL",
  ];

  return (
    <StyledCoffeeCard>
      <header>
        <img src={AmericanoCoffeeImage} />
      </header>
      <strong>
        <span>{labels[0]}</span>
        <span>{labels[1]}</span>
      </strong>
      <h3>Expresso Tradicional</h3>
      <small>O tradicional café feito com água quente e grãos moídos</small>
      <footer>
        <h2>
          <small>R$ </small>9,90
        </h2>
        <div className="input-number">
          <button>
            <Plus />
          </button>
          <input type="number" min={0} maxLength={2} />
          <button>
            <Minus />
          </button>
        </div>
        <button type="button">
          <ShoppingCart weight="fill" />
        </button>
      </footer>
    </StyledCoffeeCard>
  );
}
