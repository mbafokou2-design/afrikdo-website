import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faEarthAfrica,
  faComments,
  faPeopleRoof,
  faPersonDress,
  faScaleBalanced,
  faMasksTheater,
  faHandHoldingHeart,
  faHeart,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const focusItems: { key: string; icon: IconDefinition }[] = [
  { key: "cooperation", icon: faEarthAfrica },
  { key: "counselling", icon: faComments },
  { key: "family", icon: faPeopleRoof },
  { key: "women", icon: faPersonDress },
  { key: "rights", icon: faScaleBalanced },
  { key: "culture", icon: faMasksTheater },
  { key: "volunteering", icon: faHandHoldingHeart },
];

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="hero__tagline">{t("common.tagline")}</p>
            <h1>{t("common.siteName")}</h1>
            <p className="hero__subtitle">{t("home.hero.subtitle")}</p>
            <div className="hero__buttons">
              <Link to="/donate" className="btn btn--primary">
                <FontAwesomeIcon icon={faHeart} />
                {t("common.donate")}
              </Link>
              <Link to="/about" className="btn btn--outline-light">
                {t("home.hero.about")}
              </Link>
            </div>
          </div>
          <div className="hero__logo-wrap">
            <img
              src="/images/logo.jpg"
              alt={t("common.siteName")}
              className="hero__logo"
              width={320}
              height={320}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container home-about">
          <img
            src="/images/activity-1.jpg"
            alt={t("home.about.imageAlt")}
            className="home-about__image"
            loading="lazy"
          />
          <div className="home-about__text">
            <h2>{t("home.about.title")}</h2>
            <p>{t("home.about.text")}</p>
            <Link to="/about" className="btn btn--outline">
              {t("home.about.more")}
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <h2 className="section-title">{t("home.focus.title")}</h2>
          <div className="focus-grid">
            {focusItems.map(({ key, icon }) => (
              <article key={key} className="focus-card">
                <div className="focus-card__icon">
                  <FontAwesomeIcon icon={icon} />
                </div>
                <h3 className="focus-card__title">
                  {t(`home.focus.items.${key}`)}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <h2>{t("home.cta.title")}</h2>
          <p>{t("home.cta.text")}</p>
          <Link to="/donate" className="btn btn--dark">
            <FontAwesomeIcon icon={faHeart} />
            {t("common.donate")}
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
