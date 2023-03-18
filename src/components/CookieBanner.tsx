import React from "react";
import { useCookieConsent } from "../hooks/";

export const CookieBanner: React.FC = () => {
  const { showBanner, acceptCookies } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-700 text-white p-4 text-center">
      <p className="inline-block text-base">
        We use cookies to ensure you get the best experience on our website.{" "}
        <a href="/privacy-policy" className="underline">
          Learn more
        </a>
      </p>
      <button
        onClick={acceptCookies}
        className="bg-white mt-5 text-black hover:bg-slate-300 transition duration-300  px-4 py-2 ml-4 rounded-md"
      >
        Accept
      </button>
    </div>
  );
};
