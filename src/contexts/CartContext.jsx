import React, { createContext, useState, useMemo } from "react";

// Create a new context for the cart
export const CartContext = createContext();

// Create a provider component for the CartContext
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

    // Function to decrease the quantity of a product in the cart
    const decreaseQuantity = (productId) => {
        setCart((prevCart) => {
            return prevCart
                .map((item) => {
                    if (item.id === productId) {
                        if (item.quantity > 1) {
                            // Decrease quantity if greater than 1
                            return { ...item, quantity: item.quantity - 1 };
                        } else {
                            // Remove the product if quantity is 1
                            return null;
                        }
                    }
                    return item;
                })
                .filter(Boolean); // Filter out null values
        });
    };

    // Memoize context value to prevent unnecessary re-renders
    const value = useMemo(
        () => ({
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            decreaseQuantity,
        }),
        [cart]
    );

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
