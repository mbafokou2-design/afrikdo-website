import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

function Layout() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage ?? "de";
  const pageKey = `${pathname}-${lang}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useScrollReveal(pageKey);

  return (
    <div className="layout">
      <Header />
      <main key={pageKey} className="layout__main page-enter">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
