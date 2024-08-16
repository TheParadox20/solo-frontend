import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Cookies = () => {
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
                  What Are Cookies?
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-two"
                >
                  How We Use Cookies
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-three"
                >
                  Types of Cookies We Use
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-four"
                >
                  Managing Your Cookies Preferences
                </a>
              </div>
              <div className="mb-3">
                <a
                  className="mb-1 text-sm font-medium text-primary-light hover:text-primary-light"
                  href="#section-five"
                >
                  Changes to This Policy
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
              <span className="text-primary-light">Cookies Policy</span>
            </h2>
            <p className="mb-10 text-LightGray">
              This Cookies Policy explains how Solobet (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies on our website.
            </p>
            <h2 id="section-one" className="mb-4 text-3xl font-bold">
              What Are Cookies?
            </h2>
            <p className="mb-10 text-LightGray">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help the site recognize your device on future visits, enabling certain features and improving your user experience.
            </p>
            <h2 id="section-two" className="mb-4 text-3xl font-bold">
              How We Use Cookies
            </h2>
            <p className="mb-10 text-LightGray">
              We use cookies to enhance your experience on Solobet by remembering your preferences, keeping you logged in, and collecting analytical data. These cookies help us to provide you with a better and more personalized service.
            </p>
            <h2 id="section-three" className="mb-4 text-3xl font-bold">
              Types of Cookies We Use
            </h2>
            <ul className="list-disc mb-10 text-LightGray">
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems.</li>
              <li><strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
              <li><strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.</li>
              <li><strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant ads on other sites.</li>
            </ul>
            <h2 id="section-four" className="mb-4 text-3xl font-bold">
              Managing Your Cookies Preferences
            </h2>
            <p className="mb-10 text-LightGray">
              You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies, but this may impact your ability to use certain features of the site.
            </p>
            <h2 id="section-five" className="mb-4 text-3xl font-bold">
              Changes to This Policy
            </h2>
            <p className="mb-10 text-LightGray">
              We may update this Cookies Policy from time to time. We encourage you to review this page periodically to stay informed about how we are using cookies.
            </p>
            <h2 id="section-six" className="mb-4 text-3xl font-bold">
              Contact Us
            </h2>
            <p className="mb-10 text-LightGray">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <ul className="mb-10 text-LightGray">
              <li><strong>Phone:</strong> 0791210705</li>
              <li><strong>Email:</strong> support@solo.co.ke</li>
              <li><strong>Address:</strong> Solobet Limited, Kenya</li>
            </ul>
            <p className="text-LightGray">
              Solobet Limited is licensed by BCLB (Betting Control and Licensing Board of Kenya) under the Betting, Lotteries and Gaming Act, Cap 131, Laws of Kenya under License Numbers: BK 0000123 and PG 0000123.
            </p>
            <p className="text-LightGray mt-5">
              <strong>18+</strong> Must be 18 years or older to register or place bets at Solobet. Gamble responsibly to avoid potential adverse effects.
            </p>
          </article>
        </main>
      </div>
    </>
  );
};

export default Cookies;
