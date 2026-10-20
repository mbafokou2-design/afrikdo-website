import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faUsers,
  faLocationDot,
  faCircleCheck,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../components/PageHeader";
import "./About.css";

const focusKeys = [
  "cooperation",
  "counselling",
  "family",
  "women",
  "rights",
  "culture",
  "volunteering",
];

function About() {
  const { t } = useTranslation();

  const facts = [
    {
      icon: faCertificate,
      label: t("about.facts.legalLabel"),
      value: t("about.facts.legalValue"),
    },
    {
      icon: faUsers,
      label: t("about.facts.foundersLabel"),
      value: t("about.facts.foundersValue"),
    },
    {
      icon: faLocationDot,
      label: t("about.facts.addressLabel"),
      value: t("about.facts.addressValue"),
    },
  ];

  return (
    <>
      <PageHeader title={t("nav.about")} subtitle={t("common.tagline")} />

      <section className="section">
        <div className="container about-grid">
          <div className="about-text">
            <p className="about-text__lead">{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>

          <aside className="about-facts">
            <h3 className="about-facts__title">{t("about.facts.title")}</h3>
            <ul className="about-facts__list">
              {facts.map(({ icon, label, value }) => (
                <li key={label} className="about-facts__item">
                  <span className="about-facts__icon">
                    <FontAwesomeIcon icon={icon} />
                  </span>
                  <div>
                    <span className="about-facts__label">{label}</span>
                    <span className="about-facts__value">{value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <h2 className="section-title">{t("home.focus.title")}</h2>
          <ul className="about-focus">
            {focusKeys.map((key) => (
              <li key={key} className="about-focus__item">
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>{t(`home.focus.items.${key}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container about-cta">
          <h2>{t("about.cta.title")}</h2>
          <Link to="/contact" className="btn btn--primary">
            <FontAwesomeIcon icon={faEnvelope} />
            {t("nav.contact")}
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;
