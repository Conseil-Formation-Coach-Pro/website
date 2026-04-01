import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navigationItems, socialLinks } from "../../data/siteContent";

function SocialIcon({ label }) {
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.92 1.96 1.96 0 0 0 5.25 3ZM20.44 12.55c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.09-3.37 1.86V8.5H9.38c.04.56 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.12-.92.27-.68.89-1.38 1.93-1.38 1.36 0 1.9 1.04 1.9 2.56V20H20v-6.85Z" />
      </svg>
    );
  }

  if (label === "Email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.02-.25L12 11.74 18.98 6.5H5.02Zm13.48 1.88-5.75 4.31a1.25 1.25 0 0 1-1.5 0L5.5 8.38v8.87c0 .14.11.25.25.25h12.5a.25.25 0 0 0 .25-.25V8.38Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 0 1-1 1C10.06 21 3 13.94 3 5a1 1 0 0 1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2Z" />
    </svg>
  );
}

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header-shell">
      <div className="site-header">
        <NavLink className="brand" to="/" onClick={() => setIsOpen(false)}>
          <img src="/logo-dore.png" alt="Logo Conseil Formation Coach Pro" />
          <span>
            <strong>Amélie Riche</strong>
            <small>Conseil Formation Coach Pro</small>
          </span>
        </NavLink>

        <div className="header-actions">
          <div className="social-links" aria-label="Liens de contact rapides">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                title={item.label}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                <SocialIcon label={item.label} />
              </a>
            ))}
          </div>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={isOpen}
            aria-label="Ouvrir le menu"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`site-nav${isOpen ? " is-open" : ""}`} aria-label="Navigation principale">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
