import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar.jsx";
import Card from "./Card";
import ShoppingCart from "./ShoppingCart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProducts([
      {
        id: 1,
        title: "Wireless Mouse",
        price: 19.99,
        image: "https://via.placeholder.com/150"
      },
      {
        id: 2,
        title: "Keyboard",
        price: 39.99,
        image: "https://via.placeholder.com/150"
      },
      {
        id: 3,
        title: "Headphones",
        price: 29.99,
        image: "https://via.placeholder.com/150"
      }
    ]);
  }, []);

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    setCart(
      cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
}

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <SearchBar search={search} setSearch={setSearch} />

        <h2 className="mb-3">Products</h2>
        <div className="row">
          {filteredProducts.map(product => (
            <Card key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

<ShoppingCart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />      </div>
    </div>
  );
}
