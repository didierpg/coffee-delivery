import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { StyledHome } from "./styled";
import CoffeeImage from "../../../assets/coffee.svg";
import { CoffeeCard } from "./CoffeeCard";
import { useOrder } from "../../context/Order/context";

export function Home() {
  const { coffees } = useOrder();

  return (
    <StyledHome>
      <div className="banner">
        <div className="information">
          <div className="title">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>
          <div className="details">
            <div className="cart">
              <ShoppingCart weight="fill" />
              <span>Compra simples e segura</span>
            </div>
            <div className="package">
              <Package weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className="clock">
              <Timer weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div className="coffee">
              <Coffee weight="fill" />
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={CoffeeImage} />
        </div>
      </div>

      <h2>Nossos cafés</h2>
      <div className="catalog">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} {...coffee} />
        ))}
      </div>
    </StyledHome>
  );
}
