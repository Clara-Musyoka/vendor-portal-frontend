import React from "react";
import styles from "../../styles/styles";
const delivery = require("../../Assests/sponsored/delivery.png");
const Personalized = require("../../Assests/sponsored/personalized.png");
const fast = require("../../Assests/sponsored/fast.png");

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center sm:w-1/3 px-4">
          <img className="h-20 w-25" src={delivery} alt="Delivery Guaranteed" />
          <noscript></noscript>
          <p className="mt-4 text-lg font-semibold">Fast Reliable Deliveries</p>
          <p className="mt-2">
            <b>Same day</b> Delivery within Nairobi
            <br />
            <b>Selected</b> pickup points for convenience
          </p>
        </div>
        <div className="flex flex-col items-center sm:w-1/3 px-4">
          <img className="h-20 w-25" src={fast} alt="Delivery Guaranteed" />
          <noscript></noscript>
          <p className="mt-4 text-lg font-semibold">Fast Reliable Deliveries</p>
          <p className="mt-2">
            <b>Same day</b> Delivery within Nairobi
            <br />
            <b>Selected</b> pickup points for convenience
          </p>
        </div>
        <div className="flex flex-col items-center sm:w-1/3 px-4">
          <img
            className="h-20 w-25"
            src={Personalized}
            alt="Years of Trust"
          />
          <noscript></noscript>
          <p className="mt-4 text-lg font-semibold">Personalized for You</p>
          <p className="mt-2">
            <b>Pay with bonga points, M-PESA, or credit card</b>
            <br />
            <b>Compare products</b> for easy purchase
            <br />
            <b>Get digital assistance</b> in your purchase
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
