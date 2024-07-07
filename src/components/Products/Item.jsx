import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Item = ({ id, name, price }) => {
    // Use the addToCart function from CartContext
    const { addToCart } = useContext(CartContext);

    return (
        <li>
            <h3>{name}</h3>
            <button
                onClick={() => addToCart({ id, name, price })}
                aria-label={`Add ${name} to cart`}
            >
                <span>Price: ${price}</span> Add to cart
            </button>
        </li>
    );
};

export default Item;
