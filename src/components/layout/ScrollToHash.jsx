import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const id = location.hash.slice(1);

    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (!target) {
        return false;
      }

      target.scrollIntoView({ behavior: "auto", block: "start" });
      return true;
    };

    if (scrollToTarget()) {
      return;
    }

    const timeoutId = window.setTimeout(scrollToTarget, 80);
    return () => window.clearTimeout(timeoutId);
  }, [location.hash, location.pathname]);

  return null;
}
