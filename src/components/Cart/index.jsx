import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

// Cart component displays the items in the cart
const Cart = () => {
    // Use the cart state and actions from CartContext
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price} x {product.quantity}
                        <button onClick={() => removeFromCart(product.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;
