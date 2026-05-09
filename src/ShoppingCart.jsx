export default function ShoppingCart({
  cart,
  addToCart,
  decreaseQuantity,
  removeFromCart
}) {
  return (
    <div className="mt-5 mb-5">
      <h2>Your Cart</h2>

      <ul className="list-group">
        {cart.length === 0 ? (
          <li className="list-group-item">Your cart is empty right now.</li>
        ) : (
          cart.map(item => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>
                {item.title} - ${item.price} x {item.quantity}
              </span>

              <div>
                <button
                  className="btn btn-secondary btn-sm me-2"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>

                <button
                  className="btn btn-secondary btn-sm me-2"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  🗑
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}