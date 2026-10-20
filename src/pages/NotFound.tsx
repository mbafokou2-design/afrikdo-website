import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div
        className="container"
        style={{ textAlign: "center", minHeight: "45vh", paddingTop: "2rem" }}
      >
        <h1>404</h1>
        <h2>{t("notFound.title")}</h2>
        <p>{t("notFound.text")}</p>
        <Link to="/" className="btn btn--primary">
          <FontAwesomeIcon icon={faHouse} />
          {t("nav.home")}
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
