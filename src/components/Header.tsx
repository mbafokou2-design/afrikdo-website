import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Header.css";

const links = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/board", key: "board" },
  { to: "/activities", key: "activities" },
  { to: "/contact", key: "contact" },
];

function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8);
  const open = openForPath === location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenForPath(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header className={`header${scrolled ? " header--scrolled" : ""}`}>
        <div className="flag-stripe" />
        <div className="container header__inner">
          <Link to="/" className="header__brand">
            <img
              src="/images/logo.jpg"
              alt=""
              className="header__logo"
              width={52}
              height={52}
            />
            <span className="header__brand-text">{t("common.siteName")}</span>
          </Link>

          <nav
            id="main-nav"
            className={`header__nav${open ? " header__nav--open" : ""}`}
          >
            <ul className="header__links">
              {links.map(({ to, key }) => (
                <li key={key}>
                  <NavLink
                    to={to}
                    end
                    onClick={() => setOpenForPath(null)}
                    className={({ isActive }) =>
                      `header__link${isActive ? " header__link--active" : ""}`
                    }
                  >
                    {t(`nav.${key}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/donate"
              className="btn btn--primary header__donate"
              onClick={() => setOpenForPath(null)}
            >
              <FontAwesomeIcon icon={faHeart} />
              {t("nav.donate")}
            </Link>
          </nav>

          <div className="header__actions">
            <LanguageSwitcher />
            <button
              type="button"
              className="header__burger"
              aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-expanded={open}
              aria-controls="main-nav"
              onClick={() => setOpenForPath(open ? null : location.pathname)}
            >
              <FontAwesomeIcon
                key={open ? "close" : "open"}
                icon={open ? faXmark : faBars}
                className="header__burger-icon"
              />
            </button>
          </div>
        </header>
      </div>
      <button
        type="button"
        className={`nav-overlay${open ? " nav-overlay--visible" : ""}`}
        aria-label={t("nav.closeMenu")}
        tabIndex={open ? 0 : -1}
        onClick={() => setOpenForPath(null)}
      />
    </>
  );
}

export default Header;
