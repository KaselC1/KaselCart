export default function Card({ product, addToCart }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{ height: "180px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="fw-bold">${product.price}</p>

          <button
            className="btn btn-warning mt-auto"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}