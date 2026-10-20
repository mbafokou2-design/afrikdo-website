import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCopy,
  faEnvelope,
  faHeart,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../components/PageHeader";
import { site } from "../data/site";
import "./Pages.css";

function CopyButton({ value }: { value: string }) {
  const { t } = useTranslation();
  const [copyState, setCopyState] = useState<"copied" | "failed" | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopyState("copied");
      window.setTimeout(() => setCopyState(null), 2000);
    } catch (error) {
      console.error("Failed to copy donation details to clipboard.", error);
      setCopyState("failed");
    }
  };

  return (
    <span className="copy-control">
      <button
        type="button"
        className="copy-btn"
        onClick={handleCopy}
      >
        <FontAwesomeIcon icon={copyState === "copied" ? faCheck : faCopy} />
        {copyState === "copied" ? t("donate.copied") : t("donate.copy")}
      </button>
      {copyState === "failed" && (
        <span className="copy-status" role="status">
          {t("donate.copyFailed")}
        </span>
      )}
    </span>
  );
}

function Donate() {
  const { t } = useTranslation();

  const rows = [
    { key: "recipient", value: site.bank.recipient, copy: false },
    { key: "iban", value: site.bank.iban, copy: true },
    { key: "bic", value: site.bank.bic, copy: true },
    { key: "bankName", value: site.bank.bankName, copy: false },
    { key: "purpose", value: site.bank.purpose, copy: true },
  ];

  const receiptMail = `mailto:${site.email}?subject=${encodeURIComponent(
    t("donate.receiptSubject"),
  )}`;

  return (
    <>
      <PageHeader title={t("nav.donate")} subtitle={t("donate.subtitle")} />
      <section className="section">
        <div className="container donate-grid">
          <div className="donate-info">
            <h2>{t("home.cta.title")}</h2>
            <p className="donate-info__intro">{t("donate.intro")}</p>
            <div className="receipt-box">
              <h3>
                <FontAwesomeIcon icon={faReceipt} />
                {t("donate.receiptTitle")}
              </h3>
              <p>{t("home.cta.text")}</p>
              <a href={receiptMail} className="btn btn--outline">
                <FontAwesomeIcon icon={faEnvelope} />
                {t("donate.receiptButton")}
              </a>
            </div>
          </div>

          <div className="bank-card">
            <h3 className="bank-card__title">
              <FontAwesomeIcon icon={faHeart} />
              {t("donate.bankTitle")}
            </h3>
            <dl className="bank-card__list">
              {rows.map(({ key, value, copy }) => (
                <div key={key} className="bank-card__row">
                  <dt>{t(`donate.${key}`)}</dt>
                  <dd>
                    {value ? (
                      <>
                        <span className="bank-card__value">{value}</span>
                        {copy && <CopyButton value={value} />}
                      </>
                    ) : (
                      <span className="bank-card__pending">
                        {t("donate.pending")}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

export default Donate;
