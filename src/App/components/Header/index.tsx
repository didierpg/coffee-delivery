import { Link } from "react-router-dom";
import LogoImage from "../../../assets/logo.svg";
import { StyledHeader } from "./styled";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
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
        <Link to="/checkout">
          <ShoppingCart weight="fill" />
        </Link>
      </div>
    </StyledHeader>
  );
}
