"use client"; // Mark this component as a Client Component

import React, { useState, useEffect } from "react";

export default function Rules() {
  const [currentSection, setCurrentSection] = useState('section-one');

  useEffect(() => {
    const getCurrentSection = () => {
      if (typeof window !== 'undefined') {
        const id = window.location.hash.slice(1);
        setCurrentSection(id || 'section-one');
      }
    };

    getCurrentSection();
    window.addEventListener('hashchange', getCurrentSection);
    return () => {
      window.removeEventListener('hashchange', getCurrentSection);
    };
  }, []);

  return (
    <>
      <div className="w-screen bg-primary-dark pt-5">
        <main className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Sidebar Navigation */}
          <nav className="relative mx-auto mb-10 w-full max-w-xs rounded-lg bg-[#103E47] text-white px-4 py-3 mt-2 shadow-md lg:absolute lg:w-56 lg:top-20" style={{ borderRadius: '17px' }}>
            <div className="pb-2 text-xl font-medium text-white">
              Sections
            </div>
            <hr className="h-1 w-10 bg-primary-light" />
            <div className="mt-4">
              <div className="relative mb-3">
                <a
                  className={`block mb-1 text-md font-bold text-white p-1 ${currentSection === 'section-one' ? 'border-l-4 border-primary-light' : 'hover:text-primary-light hover:border-l-4 hover:border-primary-light'} transition duration-300 ease-in-out`}
                  href="#section-one"
                >
                  General Rules
                </a>
              </div>
              <div className="relative mb-3">
                <a
                  className={`block mb-1 text-md font-bold text-white p-1 ${currentSection === 'section-two' ? 'border-l-4 border-primary-light' : 'hover:text-primary-light hover:border-l-4 hover:border-primary-light'} transition duration-300 ease-in-out`}
                  href="#section-two"
                >
                  Bet Types
                </a>
              </div>
              <div className="relative mb-3">
                <a
                  className={`block mb-1 text-md font-bold text-white p-1 ${currentSection === 'section-three' ? 'border-l-4 border-primary-light' : 'hover:text-primary-light hover:border-l-4 hover:border-primary-light'} transition duration-300 ease-in-out`}
                  href="#section-three"
                >
                  Payouts and Settlements
                </a>
              </div>
              <div className="relative mb-3">
                <a
                  className={`block mb-1 text-md font-bold text-white p-1 ${currentSection === 'section-four' ? 'border-l-4 border-primary-light' : 'hover:text-primary-light hover:border-l-4 hover:border-primary-light'} transition duration-300 ease-in-out`}
                  href="#section-four"
                >
                  Cancellations and Refunds
                </a>
              </div>
              <div className="relative mb-3">
                <a
                  className={`block mb-1 text-md font-bold text-white p-1 ${currentSection === 'section-five' ? 'border-l-4 border-primary-light' : 'hover:text-primary-light hover:border-l-4 hover:border-primary-light'} transition duration-300 ease-in-out`}
                  href="#section-five"
                >
                  Responsible Gambling
                </a>
              </div>
              <div className="relative mb-3">
                <a
                  className={`block mb-1 text-md font-bold text-white p-1 ${currentSection === 'section-six' ? 'border-l-4 border-primary-light' : 'hover:text-primary-light hover:border-l-4 hover:border-primary-light'} transition duration-300 ease-in-out`}
                  href="#section-six"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </nav>
          {/* Main Content */}
          <article className="text-LightGray mt-4 lg:mt-0 lg:ml-64">
            <h2 className="mb-10 text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
              <span className="text-primary-light">Betting Rules</span>
            </h2>
            <p className="mb-10 text-LightGray">
              This page outlines the rules and regulations for placing bets on Solobet. Please read them carefully before participating.
            </p>
            <h2 id="section-one" className="mb-4 text-3xl text-primary-light font-bold">
              General Rules
            </h2>
            <p className="mb-10 text-LightGray">
              All bets placed on Solobet are subject to the following general rules. By placing a bet, you agree to be bound by these terms:
              <ul className="list-disc pl-5">
                <li>You must be at least 18 years old to place a bet.</li>
                <li>Bets can only be placed using funds that are already in your Solobet account.</li>
                <li>Once a bet is placed, it cannot be changed or canceled except as noted in the cancellation policy.</li>
              </ul>
            </p>
            <h2 id="section-two" className="mb-4 text-3xl text-primary-light font-bold">
              Bet Types
            </h2>
            <p className="mb-10 text-LightGray">
              Solobet offers various types of bets, including:
              <ul className="list-disc pl-5">
                <li><strong>Single Bets:</strong> A wager on a single outcome.</li>
                <li><strong>Multiple Bets:</strong> A wager that combines two or more outcomes in different events.</li>
                <li><strong>Live Betting:</strong> Bets placed on events that are currently in progress.</li>
              </ul>
            </p>
            <h2 id="section-three" className="mb-4 text-3xl text-primary-light font-bold">
              Payouts and Settlements
            </h2>
            <p className="mb-10 text-LightGray">
              Payouts are made according to the odds available at the time the bet was placed. Bets are settled based on the official result as declared by the governing body of the event.
            </p>
            <h2 id="section-four" className="mb-4 text-3xl text-primary-light font-bold">
              Cancellations and Refunds
            </h2>
            <p className="mb-10 text-LightGray">
              In the event of a cancellation, the following rules apply:
              <ul className="list-disc pl-5">
                <li>If an event is canceled, all bets will be voided, and your stake will be returned.</li>
                <li>If an event is postponed and rescheduled within 48 hours, your bet will stand.</li>
                <li>Refunds are only issued in the event of a voided bet or if an error occurs on our part.</li>
              </ul>
            </p>
            <h2 id="section-five" className="mb-4 text-3xl text-primary-light font-bold">
              Responsible Gambling
            </h2>
            <p className="mb-10 text-LightGray">
              We are committed to promoting responsible gambling. If you feel that you are developing a problem, please seek help immediately and consider self-exclusion options available on our platform.
            </p>
            <h2 id="section-six" className="mb-4 text-3xl text-primary-light font-bold">
              Contact Us
            </h2>
            <p className="mb-10 text-LightGray">
              If you have any questions or concerns about our betting rules, please contact us at 0791210705 or support@solo.co.ke.
            </p>
            <footer className="text-sm text-LightGray mt-10">
              Solobet Limited is licensed by BCLB (Betting Control and Licensing Board of Kenya) under the Betting, Lotteries and Gaming Act, Cap 131, Laws of Kenya under License Numbers: BK 0000123 and PG 0000123.
              <br />
              Must be 18 years or older to register or place bets at Solobet. Gamble responsibly to avoid potential adverse effects.
            </footer>
          </article>
        </main>
      </div>
    </>
  );
}
