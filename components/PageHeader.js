export default function PageHeader({ title, meta }) {
  return (
    <header className="page-header">
      <div className="container">
        {meta ? <p className="meta">{meta}</p> : null}
        <h1>{title}</h1>
      </div>
    </header>
  );
}
