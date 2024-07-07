import { CartProvider } from "./contexts/CartContext";
import Products from "./components/Products";

import "./App.css";

function App() {
    return (
        <>
            <CartProvider>
                <Products />
            </CartProvider>
        </>
    );
}

export default App;
