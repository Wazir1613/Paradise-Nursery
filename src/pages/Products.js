import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../pages/Products.css";

export default function Products() {
  const { addToCart, cartItems } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate

  // Dummy image links - replace with actual paths later!
  const defaultImage = "/images/placeholder.jpg"; // Placeholder if specific image not found

  const products = [
    { id: 1, name: "Snake Plant", price: 15, description: "Produces oxygen at night, improving air quality.", image: "/images/snake-plant.jpg", category: "Air Purifying Plants" },
    { id: 2, name: "Spider Plant", price: 12, description: "Filters formaldehyde and xylene from the air.", image: "/images/spider-plant.jpg", category: "Air Purifying Plants" },
    { id: 3, name: "Peace Lily", price: 18, description: "Removes mold spores and purifies the air.", image: "/images/peace-lily.jpg", category: "Air Purifying Plants" },
    { id: 4, name: "Boston Fern", price: 14, description: "Excellent humidifier and air purifier.", image: "/images/boston-fern.jpg", category: "Air Purifying Plants" },
    { id: 5, name: "Rubber Plant", price: 20, description: "Large leaves absorb airborne chemicals.", image: "/images/rubber-plant.jpg", category: "Air Purifying Plants" },
    { id: 6, name: "Aloe Vera", price: 10, description: "Known for its medicinal properties and air cleaning.", image: "/images/aloe-vera.jpg", category: "Air Purifying Plants" },
    { id: 7, name: "Pothos Plant", price: 13, description: "Easy care, ideal for removing toxins.", image: "/images/pothos.jpg", category: "Air Purifying Plants" },
    { id: 8, name: "ZZ Plant", price: 22, description: "Tolerates neglect, purifies air.", image: "/images/zz-plant.jpg", category: "Air Purifying Plants" },
    { id: 9, name: "Fiddle Leaf Fig", price: 30, description: "Stylish plant, helps clean indoor air.", image: "/images/fiddle-leaf-fig.jpg", category: "Air Purifying Plants" },
  ];

  return (
    <div className="products-page"> {/* Added a wrapper class for overall page styling */}
      <header className="products-header">
        <div className="header-left">
          <div className="logo-container" onClick={() => navigate('/')}>
            {/* Using a placeholder for the logo image */}
            <img src="/images/nursery-logo.png" alt="Paradise Nursery Logo" className="nursery-logo" />
            <div className="logo-text">
              <span className="logo-main">Paradise Nursery</span>
              <span className="logo-sub">Where Green Meets Serenity</span>
            </div>
          </div>
          <span className="header-title">Plants</span>
        </div>
        <div className="header-right">
          <button className="cart-button" onClick={() => navigate('/cart')}>
            🛒 <span className="cart-count">{cartItems.length}</span>
          </button>
        </div>
      </header>

      <h2 className="section-title">Air Purifying Plants</h2> {/* Section title */}

      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="card">
            {/* SALE badge */}
            <div className="sale-badge">SALE</div>
            
            {/* Product Image */}
            <img src={p.image || defaultImage} alt={p.name} className="product-image" />

            <h3>{p.name}</h3>
            <p className="price">Rs{p.price}</p> 
            <p className="description">{p.description}</p>
            
            <button
              onClick={() => addToCart(p)}
              disabled={cartItems.some(item => item.id === p.id)} // Use some for cleaner check
            >
              {cartItems.some(item => item.id === p.id) ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
