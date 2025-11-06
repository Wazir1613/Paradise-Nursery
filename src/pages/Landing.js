import React from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import "../pages/Landing.css"; // 2. Corrected CSS path
import "../pages/App.css";   // 3. Corrected CSS path

export default function Landing() {
  // 4. Initialize the navigate function
  const navigate = useNavigate();

  // 5. Create a function to handle the click
  const handleGetStartedClick = () => {
    navigate('/products'); // This will navigate to the /products page
  };

  return (
    <div className="landing">
      <div className="overlay">
        <h1>Welcome To Paradise Nursery</h1>
        <p className="subtitle">Where Green Meets Serenity</p>
        
        <p className="body-text">
          At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission 
          is to provide a wide range of high-quality plants that not only enhance the beauty of your 
          surroundings but also contribute to a healthier and more serene lifestyle. From 
          air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.
        </p>
        
        <p className="body-text">
          Our team of experts is dedicated to ensuring that each plant meets our strict standards of 
          quality and care. Whether you're a seasoned gardener or just starting your green journey, 
          we're here to support you every step of the way. Feel free to explore our collection, ask 
          questions, and let us help you find the perfect plant for your home or office.
        </p>
        
        {/* 6. Keep the <button> and add the onClick event */}
        <button className="btn" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>
    </div>
  );
}