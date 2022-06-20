import React from "react";
import "./fotter.css";
export const Fotter = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <ul className="flex">
              <li>Terms of Use </li>
              <li> Privacy-Policy </li>
              <li> FAQ </li>
              <li> Watch List</li>
            </ul>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero distinctio nemo deserunt eligendi tenetur hic minima, incidunt quaerat officia facilis quasi a? Magnam et repudiandae adipisci soluta voluptate veritatis laudantium!
            </p>
            <div className="box">
                <h3>Follow US</h3>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-instagram"></i>
            </div>
            <div className="box">
                <h3>Streaming App</h3>
                <img src="" alt="" className="flexSB" />
                <span>App Store</span>
                <img src="" alt="" className="flexSB" />
                <span>Go to Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
