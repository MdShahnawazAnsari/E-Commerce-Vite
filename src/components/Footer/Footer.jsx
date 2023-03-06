import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus
            itaque quasi tempore sed? Mollitia voluptatibus consequatur veniam
            doloribus at.
          </div>
        </div>
        <div className="col">
          <div className="title">Contacts</div>
          <div className="c-items">
            <FaLocationArrow />
            <div className="text">
              Delhi, main Road, chandni Chowk , delhi, 000132
            </div>
          </div>
          <div className="c-items">
            <FaMobileAlt />
            <div className="text">Phone: 012 120 1209</div>
          </div>
          <div className="c-items">
            <FaEnvelope />
            <div className="text">E-mail : thisisafake@mail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watchs</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless EarBuds</span>
          <span className="text">Home Theaters</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            E-Commerce App 2023 Created by me Want's buy something it's here!
          </div>
          <img alt="" src={payment}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
