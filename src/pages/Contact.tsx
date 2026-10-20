import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faLocationDot,
  faUser,
  faPhone,
  faEnvelope,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../components/PageHeader";
import { site } from "../data/site";
import "./Pages.css";

type InfoItem = {
  icon: IconDefinition;
  label: string;
  value: string;
  href?: string;
};

function Contact() {
  const { t } = useTranslation();
  const fullAddress = `${site.address.street}, ${site.address.zip} ${site.address.city}`;
  const mapQuery = encodeURIComponent(fullAddress);

  const items: InfoItem[] = [
    { icon: faLocationDot, label: t("contact.address"), value: fullAddress },
    { icon: faUser, label: t("contact.person"), value: site.contactPerson },
    {
      icon: faPhone,
      label: t("contact.phone"),
      value: site.phone,
      href: site.phoneHref,
    },
    {
      icon: faEnvelope,
      label: t("contact.email"),
      value: site.email,
      href: `mailto:${site.email}`,
    },
  ];

  return (
    <>
      <PageHeader title={t("nav.contact")} subtitle={t("contact.subtitle")} />
      <section className="section">
        <div className="container">
          <div className="info-grid">
            {items.map(({ icon, label, value, href }) => (
              <div key={label} className="info-card">
                <span className="info-card__icon">
                  <FontAwesomeIcon icon={icon} />
                </span>
                <div>
                  <span className="info-card__label">{label}</span>
                  {href ? (
                    <a href={href} className="info-card__value info-card__link">
                      {value}
                    </a>
                  ) : (
                    <span className="info-card__value">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-actions">
            <a href={`mailto:${site.email}`} className="btn btn--primary">
              <FontAwesomeIcon icon={faEnvelope} />
              {t("contact.writeMail")}
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              <FontAwesomeIcon icon={faMapLocationDot} />
              {t("contact.openMap")}
            </a>
          </div>

          <div className="map-wrap">
            <iframe
              title={t("contact.mapTitle")}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
