import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import "./LanguageSwitcher.css";

const languages = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage;

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      <FontAwesomeIcon icon={faLanguage} className="lang-switcher__icon" />
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`lang-switcher__btn${
            current === code ? " lang-switcher__btn--active" : ""
          }`}
          aria-pressed={current === code}
          onClick={() => i18n.changeLanguage(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
