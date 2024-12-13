import { Link, NavLink } from "react-router-dom";
import LogoImage from "../../../assets/logo.svg";
import { StyledHeader } from "./styled";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useOrder } from "../../context/Order";

export function Header() {
  const { cart } = useOrder();

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
      <div className="actions">
        <span>
          <MapPin size={32} weight="fill" />
          <span>Porto Alegre, RS</span>
        </span>
        <NavLink to="/checkout">
          <ShoppingCart weight="fill" />
          {!!totalItemsCount && <b>{totalItemsCount}</b>}
        </NavLink>
      </div>
    </StyledHeader>
  );
}
