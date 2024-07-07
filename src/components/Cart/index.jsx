import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
    // Use the cart state and actions from CartContext
    const { cart, removeFromCart, clearCart, decreaseQuantity } =
        useContext(CartContext);

    // Calculate the total price
    const totalPrice = cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );

    return (
        <div className="cart">
            <h2>Cart</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        <span>
                            {product.name} - ${product.price} x{" "}
                            {product.quantity}
                        </span>
                        <button
                            onClick={() => decreaseQuantity(product.id)}
                            aria-label={`Decrease quantity of ${product.name}`}
                        >
                            Decrease
                        </button>
                        <button
                            onClick={() => removeFromCart(product.id)}
                            aria-label={`Remove ${product.name}`}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button onClick={clearCart} aria-label="Clear Cart">
                Clear Cart
            </button>
        </div>
    );
};

export default Cart;
