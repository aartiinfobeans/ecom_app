import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "./../../assets/logo/swa-brandlogo-icon.png";

const Header = () => {
  const [scrolling, setScrolling] = useState(true);
  const categories = [
    "World of Swarovski",
    "gift",
    "decoration",
    "Acessories",
    "watches",
    "Jwellery",
    "New In",
    "Sale",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderCategory = (category) => {
    return (
      <button class="button button1">
        <span>{category} </span>
      </button>
    );
  };

  return (
    <>
      <header className={`header ${scrolling ? "hidden" : ""}`}>
        <img
          src={logo}
          alt="logo"
          width="240"
          height="30"
          style={{ marginTop: 5 }}
        ></img>
        {categories.map((category) => renderCategory(category))}
      </header>
    </>
  );
};

export default Header;
