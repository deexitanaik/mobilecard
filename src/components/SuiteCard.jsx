import React from "react";
import "./SuiteCard.css";

const SuiteCard = () => {
  return (
    <div className="suite-card">
      <div className="image-container">
        <img
          src="https://source.unsplash.com/400x300/?hotel,room"
          alt="Suite"
          className="suite-image"
        />
        <button className="tour-btn">Take a 360° tour of the suite.</button>
      </div>
      <div className="suite-info">
        <h2>Suite</h2>
        <p className="location">📍 Viana do Castelo, Portugal</p>
        <div className="price-rating">
          <span className="price">$160</span>
          <span className="season">High season</span>
          <span className="rating">⭐ 4.2</span>
        </div>
        <div className="details">
          <span>👤 3</span>
          <span>🛏️ 2+2</span>
          <span>🚿 1</span>
          <span>📏 53.75 sqm</span>
        </div>
        <div className="accommodations">
          <span>📶 WiFi</span>
          <span>🛏️ King Bed 2x2m</span>
          <span>🍹 Minibar</span>
          <span>🏖️ Sea-side Balcony</span>
          <span>🔒 Digital Safe</span>
          <span>🔇 Soundproof Windows</span>
        </div>
        <p className="description">
          Sophisticated and cozy, these suites were designed to envelop your
          senses, enabling you to free your mind, relax, and enjoy a complete
          experience.
        </p>
        <button className="book-btn">Book the room</button>
      </div>
    </div>
  );
};

export default SuiteCard;
