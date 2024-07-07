import { CartProvider } from "./contexts/CartContext";
import Products from "./components/Products";
import Cart from "./components/Cart";

import "./App.css";

function App() {
    return (
        <>
            <CartProvider>
                <Products />
                <Cart />
            </CartProvider>
        </>
    );
}

export default App;
