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
            // Check if the product already exists in the cart
            const existingProduct = prevCart.find(
                (item) => item.id === product.id
            );
            if (existingProduct) {
                // If it exists, update its quantity
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If it doesn't exist, add it to the cart with quantity 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Function to remove a product from the cart
    const removeFromCart = (productId) => {
        setCart((prevCart) =>
            prevCart.filter((product) => product.id !== productId)
        );
    };

    // Function to clear the entire cart
    const clearCart = () => {
        setCart([]);
    };

    // Provide the cart state and actions to children components
    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
