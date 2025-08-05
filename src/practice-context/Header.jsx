import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./Shop";

function Links() {
    const { cartItems } = useContext(ShopContext); // We must pass the ShopContext object itself as an argument

    return (
        <ul> 
            {/* Other links */}          
            <li>
                <Link to="Link to the cart">
                    <span>Cart</span>
                    <div className="cart-icon">{cartItems.length}</div>
                </Link>
            </li>
        </ul>
    );
};

export default function Header() {
    return (
        <header>
            {/* Other header elements */}           
            <nav>
                <Links />
            </nav>
        </header>
    );
};