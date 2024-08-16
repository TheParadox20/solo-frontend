import Link from "next/link"

import React, { useState, useEffect } from "react";
import { overlayE } from "@/app/lib/trigger";
import ConnectWallet from "@/app/UI/body/ConnectWallet";

// Example components for the carousel
function Welcome({key}){
  return(
    <div className="bg-[url('/Hero_bg.jpeg')] rounded-lg relative z-20 mb-8">
      <div className="z-10  p-4">
        <h2 className="text-3xl font-bold">Welcome to Solobet!</h2>
        <p className="my-3 w-3/4 md:w-1/2">
          Kenya{'\''}s first betting exchange. Join us today for an unmatched betting experience and enjoy instant payouts via M-Pesa.
        </p>
        <button className="bg-primary-light block w-fit py-2 md:py-4 px-8 rounded-lg font-semibold lg:mt-8 hover:scale-105" onClick={e=>overlayE('/signup')} >Join Now</button>
      </div>
      <img className="absolute w-2/5 md:w-1/3 lg:w-[37%] 2xl:w-[30%] -z-10 right-0 bottom-0" src="/man_celebrating.png" alt="" />
    </div>
  )
}
function Instant({key}){
  return(
    <div className="bg-[url('/banking_bg.jpg')] rounded-lg relative z-20 mb-8">
      <div className="z-10 bg-black/50 p-4">
        <h2 className="text-3xl font-bold">Instatnt Deposits and Withdrawals</h2>
        <p className="my-3 w-3/4 md:w-1/2">
        Enjoy the convenience of fast and secure deposits and withdrawals via M-Pesa. Fund your account and access your winnings seamlessly with Solobet today.
        </p>
        <button className="bg-primary-light block w-fit py-2 md:py-4 px-8 rounded-lg font-semibold lg:mt-8 hover:scale-105" onClick={e=>overlayE('/deposit')}>Deposit now</button>
      </div>
    </div>
  )
}
function Crypto({key}){
  return(
    <div className="bg-[url('/bitcoin_bg.jpg')] rounded-lg relative z-20 mb-8">
      <div className="z-10 bg-black/50  p-4">
        <h2 className="text-3xl font-bold">Crypto-Friendly</h2>
        <p className="my-3 w-3/4">
        Enjoy seamless transactions with your preferred cryptocurrency. Connect your wallet and start betting.
        </p>
        <ConnectWallet className="bg-primary-light block w-fit py-2 md:py-4 px-8 rounded-lg font-semibold lg:mt-8 hover:scale-105">Connect Crypto Wallet</ConnectWallet>
      </div>
    </div>
  )
}

export default function Carousel() {
  const items = [<Welcome key={'welcome'} />, <Instant key={'instant'} />, <Crypto key={'crypto'} />];
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return; // Exit early if paused

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4500); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [items.length, paused]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className="relative overflow-y-visible overflow-x-hidden w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full h-72 flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg- bg-opacity-50 text-LightGray rounded-full hover:bg-opacity-75 transition"
        onClick={handlePrev}
      >
        <span className="icon-[entypo--chevron-small-left] w-10 h-10"/>
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg- bg-opacity-50 text-LightGray rounded-full hover:bg-opacity-75 transition"
        onClick={handleNext}
      >
        <span className="icon-[entypo--chevron-small-right] w-10 h-10"/>
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-opacity-90 bg-primary-light w-7" : "bg-opacity-50 bg-white"
            } hover:bg-opacity-75 transition`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
