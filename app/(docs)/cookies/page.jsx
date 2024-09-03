"use client"; // Add this line to mark the component as a client component

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Cookies = () => {
  const [currentSection, setCurrentSection] = useState('section-one');

  useEffect(() => {
    // Function to get current section ID from URL
    const getCurrentSection = () => {
      if (typeof window !== 'undefined') {
        const id = window.location.hash.slice(1);
        setCurrentSection(id || 'section-one'); // Default to 'section-one' if no hash is present
      }
    };

    // Update current section on mount
    getCurrentSection();

    // Add event listener for hash changes
    window.addEventListener('hashchange', getCurrentSection);

    // Cleanup event listener on unmount
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
                  What Are Cookies?
                </a>
              </div>
              <div className="relative mb-3">
                <a
                  className={`block mb-1 text-md font-bold text-white p-1 ${currentSection === 'section-two' ? 'border-l-4 border-primary-light' : 'hover:text-primary-light hover:border-l-4 hover:border-primary-light'} transition duration-300 ease-in-out`}
                  href="#section-two"
                >
                  How We Use Cookies
                </a>
              </div>
              <div className="relative mb-3">
                <a
                  className={`block mb-1 text-md font-bold text-white p-1 ${currentSection === 'section-three' ? 'border-l-4 border-primary-light' : 'hover:text-primary-light hover:border-l-4 hover:border-primary-light'} transition duration-300 ease-in-out`}
                  href="#section-three"
                >
                  Types of Cookies We Use
                </a>
              </div>
              <div className="relative mb-3">
                <a
                  className={`block mb-1 text-md font-bold text-white p-1 ${currentSection === 'section-four' ? 'border-l-4 border-primary-light' : 'hover:text-primary-light hover:border-l-4 hover:border-primary-light'} transition duration-300 ease-in-out`}
                  href="#section-four"
                >
                  Managing Your Cookies Preferences
                </a>
              </div>
              <div className="relative mb-3">
                <a
                  className={`block mb-1 text-md font-bold text-white p-1 ${currentSection === 'section-five' ? 'border-l-4 border-primary-light' : 'hover:text-primary-light hover:border-l-4 hover:border-primary-light'} transition duration-300 ease-in-out`}
                  href="#section-five"
                >
                  Changes to This Policy
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
              <span className="text-primary-light">Cookies Policy</span>
            </h2>
            <p className="mb-10 text-LightGray">
              This Cookies Policy explains how Solobet (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies on our website.
            </p>
            <h2 id="section-one" className="mb-4 text-3xl text-primary-light font-bold">
              What Are Cookies?
            </h2>
            <p className="mb-10 text-LightGray">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help the site recognize your device on future visits, enabling certain features and improving your user experience.
            </p>
            <h2 id="section-two" className="mb-4 text-3xl text-primary-light font-bold">
              How We Use Cookies
            </h2>
            <p className="mb-10 text-LightGray">
              We use cookies to enhance your experience on Solobet by remembering your preferences, keeping you logged in, and collecting analytical data. These cookies help us to provide you with a better and more personalized service.
            </p>
            <h2 id="section-three" className="mb-4 text-3xl text-primary-light font-bold">
              Types of Cookies We Use
            </h2>
            <ul className="list-disc mb-10 text-LightGray pl-5">
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems.</li>
              <li><strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
              <li><strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.</li>
              <li><strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant ads on other sites.</li>
            </ul>
            <h2 id="section-four" className="mb-4 text-3xl text-primary-light font-bold">
              Managing Your Cookies Preferences
            </h2>
            <p className="mb-10 text-LightGray">
              You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies, but this may impact your ability to use certain features of the site.
            </p>
            <h2 id="section-five" className="mb-4 text-3xl text-primary-light font-bold">
              Changes to This Policy
            </h2>
            <p className="mb-10 text-LightGray">
              We may update this Cookies Policy from time to time. We encourage you to review this page periodically to stay informed about how we are using cookies.
            </p>
            <h2 id="section-six" className="mb-4 text-3xl text-primary-light font-bold">
              Contact Us
            </h2>
            <p className="mb-10 text-LightGray">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <ul className="mb-10 text-LightGray pl-5">
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
