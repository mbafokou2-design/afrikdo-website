import "./PageHeader.css";

type Props = {
  title: string;
  subtitle?: string;
};

function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="page-header">
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
        <span className="page-header__bar" />
      </div>
    </section>
  );
}

export default PageHeader;
