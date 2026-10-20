import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const currentYear = new Date().getFullYear();

const links = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/board", key: "board" },
  { to: "/activities", key: "activities" },
  { to: "/donate", key: "donate" },
  { to: "/contact", key: "contact" },
];

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="flag-stripe" />
      <div className="container footer__grid">
        <div className="footer__col">
          <h3 className="footer__title">{t("common.siteName")}</h3>
          <p className="footer__tagline">{t("common.tagline")}</p>
          <p className="footer__text">{t("footer.about")}</p>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">{t("footer.navigation")}</h3>
          <ul className="footer__list">
            {links.map(({ to, key }) => (
              <li key={key}>
                <Link to={to} className="footer__link">
                  {t(`nav.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">{t("footer.contact")}</h3>
          <ul className="footer__list footer__contact">
            <li>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Missunder Straße 62, 44145 Dortmund</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+4915778668838" className="footer__link">
                +49 157 78 66 88 38
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:info@afrikdo.org" className="footer__link">
                info@afrikdo.org
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          © {currentYear} {t("common.siteName")} – {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
