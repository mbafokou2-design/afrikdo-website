import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../components/PageHeader";
import { activityImages } from "../data/activities";
import "./Pages.css";

function Activities() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        title={t("nav.activities")}
        subtitle={t("activities.subtitle")}
      />
      <section className="section">
        <div className="container">
          <div className="gallery">
            {activityImages.map((image, index) => (
              <figure key={image.src ?? index} className="gallery__item">
                {image.src ? (
                  <>
                    <img
                      src={image.src}
                      alt={t("activities.imageAlt", { number: index + 1 })}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="gallery__caption">
                      {t(`activities.captions.${image.captionKey}`)}
                    </figcaption>
                  </>
                ) : (
                  <div className="gallery__placeholder">
                    <FontAwesomeIcon icon={faImage} />
                    <span>{t("activities.photoSoon")}</span>
                  </div>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Activities;
