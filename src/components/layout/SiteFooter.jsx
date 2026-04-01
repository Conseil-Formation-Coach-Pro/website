import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer-shell">
      <div className="site-footer">
        <div className="footer-bar-stack">
          <p className="footer-bar-copy">
            © 2026 Amelie Riche - Conseil Formation Coach Pro. Tous droits reserves.
          </p>
          <Link to="/mentions-legales.html" className="footer-bar-link">
            Mentions legales
          </Link>
        </div>
      </div>
    </footer>
  );
}
