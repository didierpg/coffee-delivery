import { Minus, Plus, Trash } from "phosphor-react";
import AmericanoCoffeeImage from "../../../../assets/coffees/americano.svg";
import { StyledCoffeeItem } from "./styled";

export function CoffeeItem() {
  return (
    <StyledCoffeeItem>
      <span>
        <img src={AmericanoCoffeeImage} />
        <span>
          Expresso Tradicional
          <div className="actions">
            <span className="input-number">
              <button>
                <Plus />
              </button>
              <input type="number" min={1} max={99} />
              <button>
                <Minus />
              </button>
            </span>
            <button className="remove">
              <Trash />
              <span>REMOVER</span>
            </button>
          </div>
        </span>
        <b>R$ 999,90</b>
      </span>
      <hr />
    </StyledCoffeeItem>
  );
}
