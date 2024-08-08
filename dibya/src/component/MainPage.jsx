import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="hero-section">
        <h1 className="hero-text text-center text-success">
          Product Management System
        </h1>
        <img
          src="./src/component/images/pms2.jpg"
          alt="Product Management System"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default MainPage;
