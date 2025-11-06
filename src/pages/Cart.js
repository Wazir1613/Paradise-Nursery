import React from "react";
import "./Cart.css";

const Cart = () => {
  // Example product for demo (replace with your state or props)
  const cartItems = [
    { id: 1, name: "Spider Plant", price: 12, quantity: 1, image: "/images/spiderplant.jpg" },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      {/* Header (same style as products page) */}
      <header className="cart-header">
        <div className="header-left">
          <div className="logo-container" onClick={() => window.location.href = "/"}>
            <div className="nursery-logo">🌿</div>
            <div className="logo-text">
              <span className="logo-main">Paradise Nursery</span>
              <span className="logo-sub">Where Green Meets Serenity</span>
            </div>
          </div>
          <h2 className="header-title">Your Cart</h2>
        </div>

        <div className="header-right">
          <button className="cart-button">
            🛒 <span className="cart-count">{cartItems.length}</span>
          </button>
        </div>
      </header>

      {/* Page Title */}
      <h1 className="cart-title">Your Cart</h1>

      {/* Cart Container */}
      <div className="cart-container">
        <div className="cart-items-list">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p className="cart-empty-message">Your cart is empty!</p>
              <a href="/products" className="shop-now-btn">
                Continue Shopping
              </a>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="price">Rs{item.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-quantity">
                  Qty: <strong>{item.quantity}</strong>
                </div>
                <button className="remove-item-btn">Remove</button>
              </div>
            ))
          )}
        </div>

        {/* Summary Box */}
        {cartItems.length > 0 && (
          <div className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>Rs{subtotal.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
