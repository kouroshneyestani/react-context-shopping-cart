import { createContext, useState } from "react";

// Create a new context for the cart
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    // Initialize cart state with an empty array
    const [cart, setCart] = useState([]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // Provide the cart state and actions to children components
    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
