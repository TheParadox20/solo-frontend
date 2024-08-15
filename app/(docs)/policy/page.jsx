import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Policy = () => {
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
                  Information We Collect
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-three"
                >
                  How We Use Your Information
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-four"
                >
                  Sharing Your Information
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-five"
                >
                  Security of Your Information
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-six"
                >
                  Your Rights
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-seven"
                >
                  Changes to This Policy
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-eight"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <article className="text-LightGray">
            <h2 className="mb-10 mt-4 text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
              <span className="text-primary-light">Privacy Policy</span>
            </h2>
            <p className="mb-10 text-LightGray">
              This Privacy Policy explains how Solobet ("we", "us", or "our") collects, uses, and shares your personal information when you visit or interact with our website.
            </p>
            <h2 id="section-one" className="mb-4 text-3xl font-bold">
              Introduction
            </h2>
            <p className="mb-10 text-LightGray">
              At Solobet, your privacy is important to us. This policy outlines how we handle your personal data in compliance with relevant data protection laws.
            </p>
            <h2 id="section-two" className="mb-4 text-3xl font-bold">
              Information We Collect
            </h2>
            <p className="mb-10 text-LightGray">
              We collect various types of information, including personal identification information (such as your name, email address, and phone number), financial information (for processing payments), and technical data (such as your IP address and browser type).
            </p>
            <h2 id="section-three" className="mb-4 text-3xl font-bold">
              How We Use Your Information
            </h2>
            <p className="mb-10 text-LightGray">
              Your information is used to provide and improve our services, process transactions, communicate with you, and comply with legal obligations. We may also use your data for marketing purposes with your consent.
            </p>
            <h2 id="section-four" className="mb-4 text-3xl font-bold">
              Sharing Your Information
            </h2>
            <p className="mb-10 text-LightGray">
              We may share your information with third parties, such as payment processors, analytics providers, and legal authorities, when necessary to provide our services or comply with the law. We ensure that these third parties are bound by strict data protection obligations.
            </p>
            <h2 id="section-five" className="mb-4 text-3xl font-bold">
              Security of Your Information
            </h2>
            <p className="mb-10 text-LightGray">
              We take reasonable measures to protect your personal information from unauthorized access, loss, or misuse. However, no system is completely secure, and we cannot guarantee the absolute security of your data.
            </p>
            <h2 id="section-six" className="mb-4 text-3xl font-bold">
              Your Rights
            </h2>
            <p className="mb-10 text-LightGray">
              You have rights concerning your personal data, including the right to access, correct, delete, or restrict its use. You may also object to the processing of your data or request data portability in certain circumstances.
            </p>
            <h2 id="section-seven" className="mb-4 text-3xl font-bold">
              Changes to This Policy
            </h2>
            <p className="mb-10 text-LightGray">
              We may update this Privacy Policy from time to time. We encourage you to review this page periodically to stay informed about how we are protecting your information.
            </p>
            <h2 id="section-eight" className="mb-4 text-3xl font-bold">
              Contact Us
            </h2>
            <p className="mb-10 text-LightGray">
              If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at 0791210705 or support@solo.co.ke.
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
};

export default Policy;
