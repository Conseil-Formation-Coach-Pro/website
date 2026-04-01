import { Outlet } from "react-router-dom";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import ScrollToHash from "./ScrollToHash";

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <ScrollToHash />
      <SiteHeader />
      <main className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
