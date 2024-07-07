import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function Item({ id, name, price }) {
    // Use the addToCart function from CartContext
    const { addToCart } = useContext(CartContext);

    return (
        <li>
            <h3>{name}</h3>
            <button onClick={() => addToCart({ id, name, price })}>
                <span>Price: ${price}</span> Add to cart
            </button>
        </li>
    );
}

function Products() {
    const products = [
        {
            id: 1,
            name: "Red t-shirt",
            price: 10,
        },
        {
            id: 2,
            name: "Blue t-shirt",
            price: 20,
        },
        {
            id: 3,
            name: "Orange t-shirt",
            price: 30,
        },
    ];

    return (
        <div>
            <ul>
                {products.map((product) => (
                    <Item key={product.id} {...product} />
                ))}
            </ul>
        </div>
    );
}

export default Products;
