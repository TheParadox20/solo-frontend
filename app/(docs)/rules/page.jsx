import React from "react";

export default function Rules() {
  return (
    <>
      <div className="w-screen bg-primary-dark pt-5">
        <main className="relative mx-auto px-10 md:max-w-screen-md">
          <div className="top-20 -left-56 mb-10 w-full max-w-xs rounded-md border bg-primary-dark px-6 py-4 shadow-md lg:absolute lg:w-56">
            <div className="pb-2 text-xl font-medium text-primary-light">
              Sections
            </div>
            <hr className="h-1 w-10 bg-primary-light" />
            <div className="mt-4">
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-one"
                >
                  General Rules
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-two"
                >
                  Bet Types
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-three"
                >
                  Payouts and Settlements
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-four"
                >
                  Cancellations and Refunds
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-five"
                >
                  Responsible Gambling
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-six"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <article className="text-LightGray">
            <h2 className="mb-10 mt-4 text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
              <span className="text-primary-light">Betting Rules</span>
            </h2>
            <p className="mb-10 text-LightGray">
              This page outlines the rules and regulations for placing bets on Solobet. Please read them carefully before participating.
            </p>
            <h2 id="section-one" className="mb-4 text-3xl font-bold">
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
            <h2 id="section-two" className="mb-4 text-3xl font-bold">
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
            <h2 id="section-three" className="mb-4 text-3xl font-bold">
              Payouts and Settlements
            </h2>
            <p className="mb-10 text-LightGray">
              Payouts are made according to the odds available at the time the bet was placed. Bets are settled based on the official result as declared by the governing body of the event.
            </p>
            <h2 id="section-four" className="mb-4 text-3xl font-bold">
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
            <h2 id="section-five" className="mb-4 text-3xl font-bold">
              Responsible Gambling
            </h2>
            <p className="mb-10 text-LightGray">
              We are committed to promoting responsible gambling. If you feel that you are developing a problem, please seek help immediately and consider self-exclusion options available on our platform.
            </p>
            <h2 id="section-six" className="mb-4 text-3xl font-bold">
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
