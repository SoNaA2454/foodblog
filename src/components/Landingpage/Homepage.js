import React from "react";
import "./homepage.css";
import  pizza from "../../images/Rectangle 400.png";
import vector from "../../images/Vector 1.png";
import logo from "../../images/logo1.png";
// import logo from "../../images/logo.png";

const Home = () => {
  return (
    <>
      <div className="home">
      <div className="row g-0">
        <div className="col-md-8">
        <div className="Image"><img src={logo} alt ='..' className="logo_img"/></div>
          <div className="carddbody" >
            <h1 className="h1">Discover the <span style={{color:"#E23744"}}>Best</span> Food and Drinks</h1>
            <p className="p">
            Naturally made Healthcare Products for the better care & support of your body.
            </p>
            <button className="Button">Explore Now!</button>
          </div>
        </div>
        <div className="col-md-4">
        <img src={vector} alt="..."  className="image-vector"/>
        <img src={pizza}  alt="..." className="image-pizza"/>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Home;
