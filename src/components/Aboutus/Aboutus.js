import React from "react";
import cardimage from '../../images/food-img.jpg';
import './about.css';

const About = () => {
  return (
    <div class="cardd_about">
    <div class="row g-0">
      <div class="col-md-4">
        <img src={cardimage} class="cardd-image" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="cardd_body">
          <h1 class="cardd-title">About Us</h1>
          <p class="cardd-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
          <button className="Button">
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;
