import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { StyledHome } from "./styled";
import CoffeeImage from "../../../assets/coffee.svg";
import { CoffeeCard, ICoffeeCard } from "./CoffeeCard";

export function Home() {
  const coffees: ICoffeeCard[] = [
    {
      id: "americano",
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      imageUrl: "src/assets/coffees/americano.svg",
      price: 9.9,
      tags: ["Tradicional"],
    },
    {
      id: "arabe",
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      imageUrl: "src/assets/coffees/arabe.svg",
      price: 9.9,
      tags: ["Especial"],
    },
    {
      id: "capuccino",
      name: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      imageUrl: "src/assets/coffees/capuccino.svg",
      price: 9.9,
      tags: ["Com Leite", "Tradicional"],
    },
    {
      id: "chocolate",
      name: "Chocolate",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      imageUrl: "src/assets/coffees/chocolate.svg",
      price: 9.9,
      tags: ["Com Leite", "Especial"],
    },
    {
      id: "cremoso",
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      imageUrl: "src/assets/coffees/cremoso.svg",
      price: 9.9,
      tags: ["Tradicional"],
    },
    {
      id: "cubano",
      name: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      imageUrl: "src/assets/coffees/cubano.svg",
      price: 9.9,
      tags: ["Alcóolico", "Especial", "Gelado"],
    },
    {
      id: "expresso",
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      imageUrl: "src/assets/coffees/expresso.svg",
      price: 9.9,
      tags: ["Tradicional"],
    },
    {
      id: "gelado",
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      imageUrl: "src/assets/coffees/gelado.svg",
      price: 9.9,
      tags: ["Gelado", "Tradicional"],
    },
    {
      id: "havaiano",
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      imageUrl: "src/assets/coffees/havaiano.svg",
      price: 9.9,
      tags: ["Especial"],
    },
    {
      id: "irlandes",
      name: "Irlandes",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      imageUrl: "src/assets/coffees/irlandes.svg",
      price: 9.9,
      tags: ["Alcóolico", "Especial"],
    },
    {
      id: "latte",
      name: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      imageUrl: "src/assets/coffees/latte.svg",
      price: 9.9,
      tags: ["Com Leite", "Tradicional"],
    },
    {
      id: "leite",
      name: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      imageUrl: "src/assets/coffees/leite.svg",
      price: 9.9,
      tags: ["Com Leite", "Tradicional"],
    },
    {
      id: "macchiato",
      name: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      imageUrl: "src/assets/coffees/macchiato.svg",
      price: 9.9,
      tags: ["Com Leite", "Tradicional"],
    },
    {
      id: "mochaccino",
      name: "Mochaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      imageUrl: "src/assets/coffees/mochaccino.svg",
      price: 9.9,
      tags: ["Com Leite", "Tradicional"],
    },
  ];
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
