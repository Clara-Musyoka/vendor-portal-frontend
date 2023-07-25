import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";
const logo = require("../../Assests/logo.png")
const mpesa = require("../../Assests/sponsored/M-PESA.jpg")

const Footer = () => {
  return (
    <div className="bg-[#363540] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#2bb24a] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#fff]">Subscribe</span> to us to get news,{" "}
          <br />
          events and offers
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#1F932C] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-whie md:w-auto w-full">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src={logo}
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p>The home and elements needeed to create beatiful products.</p>
          <div className="flex items-center mt-[15px]">
            <a
              href="https://www.facebook.com/SafaricomPLC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook size={25} className="cursor-pointer" />
            </a>
            <a
              href="https://twitter.com/i/flow/login?redirect_after_login=%2FSafaricomPLC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter
                size={25}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/safaricom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin
                size={25}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              />
            </a>
            <a
              href="https://www.instagram.com/safaricomplc_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram
                size={25}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              />
            </a>
            <a
              href="https://www.youtube.com/user/safaricomofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube
                size={25}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              />
            </a>
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Masoko. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="flex items-center justify-end ">
  <div className="sm:flex items-center justify-center mr-4">
    <img
      src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
      alt=""
    />
    <img
      src={mpesa}
      alt=""
      className="w-10 ml-2 h-7" 
    />
  </div>
</div>
      </div>
    </div>
  );
};

export default Footer;
