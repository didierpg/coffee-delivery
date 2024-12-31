import { Link, NavLink } from "react-router-dom";
import LogoImage from "/assets/logo.svg";
import { StyledHeader } from "./styled";
import { ShoppingCart } from "phosphor-react";
import { useOrder } from "../../context/Order/context";

export function Header() {
  const {
    state: { cart },
  } = useOrder();

  const totalItemsCount = cart?.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    0
  );
  return (
    <StyledHeader>
      <div className="brand">
        <Link to="/">
          <img src={LogoImage} />
          <div>
            <strong>Coffee</strong>
            <span>Delivery</span>
          </div>
        </Link>
      </div>
      <div className="checkout">
        <NavLink to={totalItemsCount ? "/checkout" : "#"}>
          <ShoppingCart weight="fill" />
          {!!totalItemsCount && <b>{totalItemsCount}</b>}
        </NavLink>
      </div>
    </StyledHeader>
  );
}
