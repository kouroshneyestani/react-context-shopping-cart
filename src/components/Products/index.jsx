import Item from "./Item";

function Products() {
    // List of products to display
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
        <div className="products">
            <ul>
                {products.map((product) => (
                    <Item key={product.id} {...product} />
                ))}
            </ul>
        </div>
    );
}

export default Products;
