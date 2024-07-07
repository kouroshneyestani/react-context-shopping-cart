import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

// Cart component displays the items in the cart
const Cart = () => {
    // Use the cart state from CartContext
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price} x {product.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
