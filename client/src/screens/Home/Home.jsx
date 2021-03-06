import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = (props) => {
  return (
    <>
      <div className="home">
        <h1 className="home-logo">technologic</h1>
        <Link to="/products">
          <div className="home-products">products</div>
        </Link>
        <Link to="/sign-in">
          <div className="home-sign-in">sign-in</div>
        </Link>
        <Link to="/sign-up">
          <div className="home-sign-up">
            <strong>sign-up</strong>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
