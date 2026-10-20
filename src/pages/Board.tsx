import { useTranslation } from "react-i18next";
import PageHeader from "../components/PageHeader";
import { boardMembers } from "../data/board";
import "./Pages.css";

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return (first + last).toUpperCase();
}

function Board() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader title={t("nav.board")} subtitle={t("board.subtitle")} />
      <section className="section">
        <div className="container">
          <div className="board-grid">
            {boardMembers.map((member) => (
              <article key={member.name} className="board-card">
                <div className="board-card__photo">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      loading="lazy"
                    />
                  ) : (
                    <span aria-hidden="true">{getInitials(member.name)}</span>
                  )}
                </div>
                <h3 className="board-card__name">{member.name}</h3>
                <p className="board-card__role">
                  {t(`board.roles.${member.roleKey}`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Board;
