import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="rector-block">
        <div className="gender">
          <svg
            width="20"
            height="29"
            viewBox="0 0 20 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="5" r="4" stroke="#21CAFF" strokeWidth="2" />
            <path
              d="M1.86852 15L10 27.1972L18.1315 15L1.86852 15Z"
              stroke="#21CAFF"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="text-block">
          <h2> </h2>
          <p>Ректор</p>
        </div>
      </div>
      <div className="search-wrap">
        <form action="submit">
          <button className="search-button"></button>
          <input type="text" className="search" placeholder="Поиск" />
        </form>
      </div>
    </header>
  );
};

export default Header;
