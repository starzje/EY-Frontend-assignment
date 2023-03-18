import React from "react";
import { useCookieConsent } from "../hooks/";

export const CookieBanner: React.FC = () => {
  const { showBanner, acceptCookies } = useCookieConsent(); // custom hook for handling cookie consent

  if (!showBanner) return null; // If the user has already accepted the cookies, don't show the banner

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 text-center text-white bg-slate-700">
      <p className="inline-block text-base">
        We use cookies to ensure you get the best experience on our website.{" "}
        <a href="/privacy-policy" className="underline">
          Learn more
        </a>
      </p>
      <button
        onClick={acceptCookies}
        className="px-4 py-2 mt-5 ml-4 text-black transition duration-300 bg-white rounded-md hover:bg-slate-300"
      >
        Accept
      </button>
    </div>
  );
};
