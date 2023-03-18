import { useState, useEffect, useCallback } from "react";

const COOKIE_CONSENT_KEY = "cookie-consent";

/**
 * A custom React hook to manage cookie consent banner visibility and user consent.
 * The hook uses local storage to store and retrieve the user's consent status.
 * @module useCookieConsent
 * @returns {Object} - An object containing the following properties:
 * @property {boolean} showBanner - A boolean value indicating whether the cookie consent banner should be displayed or not.
 * @property {function} acceptCookies - A callback function that can be called to update the user's consent status to 'accepted' and hide the banner.
 */

export const useCookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY); // Retrieve user's consent status from local storage
    if (consentStatus === null) {
      setShowBanner(true); // If user has not consented, show banner
    }
  }, []);

  const acceptCookies = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted"); // Update user's consent status in local storage
    setShowBanner(false);
  }, []);

  return { showBanner, acceptCookies };
};
