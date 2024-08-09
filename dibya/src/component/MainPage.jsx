import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="hero-section">
        <h1 className="hero-text text-center">Product Management System</h1>
        <img
          src="/src/component/Images/pms.jpg" /* Ensure this path is correct */
          alt="Product Management System"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default MainPage;
