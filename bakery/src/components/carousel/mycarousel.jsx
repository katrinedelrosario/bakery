import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./mycarousel.scss";
import { NavLink } from "react-router-dom";

const MyCarousel = () => {
  return (
    <>
      <div className="parent">
        <Carousel className="div1">
          <div>
            <img src={require("../../imgs/slide1.jpg")} alt="image1" />
          </div>
          <div>
            <img src={require("../../imgs/slide2.jpg")} alt="image2" />
          </div>
          <div>
            <img src={require("../../imgs/slide3.jpg")} alt="image3" />
          </div>
        </Carousel>
        <div className="div2">
        <NavBarMenu />
        </div>
        <div className="div3">
          <h1>Vi elsker at lave brød</h1>
        </div>
      </div>
    </>
  );
};

const NavBarMenu = () => {
  return(
    <nav className="nav-bar">
        <ul className="nav-list">
        <li><NavLink className="aLink" to="/">Forside</NavLink></li>
        <li><NavLink className="aLink" to="/products">Produkter</NavLink></li>
        <h2>bageriet</h2>
        <li><NavLink className="aLink" to="/contact">Kontakt</NavLink></li>
        <li><NavLink className="aLink" to="/login">Login</NavLink></li>
      </ul>
    </nav>
  )
}

export { MyCarousel, NavBarMenu };
