import { useState, createContext } from "react";
import Header from "../Header";
import ProductDetail from "./ProductDetail";

export const ShopContext = createContext({
    products: [],
    cartItems: [],
    addToCart: () => {},
});

const ShopContextApp = () => {
    const [cartItems, setCartItems] = useState([]); /* List of Items in Cart */

    const products = []; /* some custom hook that fetches products and returns the fetched products */

    const addToCart = () => {
         // add to cart logic (this adds to cartItems)
    };

    return (
        /* We are going to pass the things that we want to inject to these components using the value prop */
        /* This value prop will overwrite the default value */
        <ShopContext.Provider value={{ cartItems, products, addToCart }}>
            <Header />
            <ProductDetail />
        </ShopContext.Provider>
    )
};

export default ShopContextApp;



