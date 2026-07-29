import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-contents">
        <h2>One Cafe.Endless Flavors!!</h2>
        <p>
          From crispy fries and aromatic coffee to creamy pastas, hearty sandwiches, sizzling noodles, and indulgent cakes — Cafe Nova serves up comfort and flavor in every bite. 
          Made with the freshest ingredients and a love for great taste, each dish is crafted to satisfy your cravings and warm your heart.
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
