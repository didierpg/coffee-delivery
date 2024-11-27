import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                    <li><Link to="/success">Success</Link></li>
                </ul>
            </nav>
        </header>
    )
}