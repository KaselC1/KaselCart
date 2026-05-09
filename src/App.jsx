import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Card from "./Card";
import ShoppingCart from "./ShoppingCart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // loads products when the app opens
  useEffect(() => {
    setProducts([
      {
        id: 1,
        title: "USB-C Charger",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400"
      },
      {
        id: 2,
        title: "Desk Lamp",
        price: 24.5,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400"
      },
      {
        id: 3,
        title: "Wireless Headphones",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
      },
      {
        id: 4,
        title: "Phone Stand",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
      }
    ]);
  }, []);

  function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
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

  function decreaseQuantity(id) {
    setCart(
      cart
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar cartCount={cart.length} />

      <div className="container mt-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <h2 className="mb-3">Featured Items</h2>

        <div className="row">
          {filteredProducts.map(product => (
            <Card
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>

        <ShoppingCart
          cart={cart}
          addToCart={addToCart}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
}