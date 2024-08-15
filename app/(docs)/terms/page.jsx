import React from "react";

export default function Terms() {
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
                  Introduction
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-two"
                >
                  User Responsibilities
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-three"
                >
                  Prohibited Activities
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-four"
                >
                  Account Suspension and Termination
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-five"
                >
                  Limitation of Liability
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-six"
                >
                  Governing Law
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-seven"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <article className="text-LightGray">
            <h2 className="mb-10 mt-4 text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
              <span className="text-primary-light">Terms & Conditions</span>
            </h2>
            <p className="mb-10 text-LightGray">
              These Terms & Conditions govern your use of Solobet. By accessing or using our website and services, you agree to comply with and be bound by these terms.
            </p>
            <h2 id="section-one" className="mb-4 text-3xl font-bold">
              Introduction
            </h2>
            <p className="mb-10 text-LightGray">
              Welcome to Solobet. These Terms & Conditions apply to all users of our website and services. Please read them carefully before using our platform.
            </p>
            <h2 id="section-two" className="mb-4 text-3xl font-bold">
              User Responsibilities
            </h2>
            <p className="mb-10 text-LightGray">
              As a user, you are responsible for:
              <ul className="list-disc pl-5">
                <li>Providing accurate and current information when registering an account.</li>
                <li>Maintaining the confidentiality of your account details and password.</li>
                <li>Complying with all applicable laws and regulations related to online betting.</li>
              </ul>
            </p>
            <h2 id="section-three" className="mb-4 text-3xl font-bold">
              Prohibited Activities
            </h2>
            <p className="mb-10 text-LightGray">
              Users are prohibited from engaging in:
              <ul className="list-disc pl-5">
                <li>Any fraudulent activities or manipulation of betting outcomes.</li>
                <li>Creating multiple accounts for the purpose of abusing promotions or bonuses.</li>
                <li>Using our services for illegal or unauthorized purposes.</li>
              </ul>
            </p>
            <h2 id="section-four" className="mb-4 text-3xl font-bold">
              Account Suspension and Termination
            </h2>
            <p className="mb-10 text-LightGray">
              We reserve the right to suspend or terminate accounts that violate our Terms & Conditions. In such cases, any remaining funds in the account may be forfeited.
            </p>
            <h2 id="section-five" className="mb-4 text-3xl font-bold">
              Limitation of Liability
            </h2>
            <p className="mb-10 text-LightGray">
              Solobet shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the fullest extent permitted by law.
            </p>
            <h2 id="section-six" className="mb-4 text-3xl font-bold">
              Governing Law
            </h2>
            <p className="mb-10 text-LightGray">
              These Terms & Conditions are governed by and construed in accordance with the laws of Kenya. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Kenya.
            </p>
            <h2 id="section-seven" className="mb-4 text-3xl font-bold">
              Contact Us
            </h2>
            <p className="mb-10 text-LightGray">
              If you have any questions about these Terms & Conditions, please contact us at 0791210705 or support@solo.co.ke.
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
