export default function ShoppingCart({ cart, removeFromCart, addToCart }) {
  return (
    <div className="mt-5">
      <h2>Shopping Cart</h2>
      <ul className="list-group">
        {cart.map(item => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item.title} - ${item.price} (x{item.quantity})
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}