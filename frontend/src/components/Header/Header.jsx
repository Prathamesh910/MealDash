import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu of delicious dishes crafted with fresh ingredients and expert care. From everyday favorites to special treats, enjoy fast, reliable delivery right to your doorstep.</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
