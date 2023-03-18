import { useState, useEffect, useCallback } from "react";

const COOKIE_CONSENT_KEY = "cookie-consent";

export const useCookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consentStatus === null) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
  }, []);

  return { showBanner, acceptCookies };
};
