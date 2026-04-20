import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar.jsx";
import Card from "./Card";
import ShoppingCart from "./ShoppingCart";

export default function App() {
 // holds all available products
  const [products, setProducts] = useState([]);

  //stores items in cart
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
  setProducts([
    {
      id: 1,
      title: "USB-C Charger",
      price: 12.99,
      image: "https://picsum.photos/200?random=1"
    },
    {
      id: 2,
      title: "Desk Lamp",
      price: 24.50,
      image: "https://picsum.photos/200?random=2"
    },
    {
      id: 3,
      title: "Phone Stand",
      price: 8.99,
      image: "https://picsum.photos/200?random=3"
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

        <h2 className="mb-3">Featured Items</h2>
        <div className="row">
          {filteredProducts.map(product => (
            <Card key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

<ShoppingCart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />      </div>
    </div>
  );
}
