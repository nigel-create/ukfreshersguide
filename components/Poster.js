export default function Poster({ kicker, title, tone = "ink" }) {
  return (
    <div className={`poster poster--${tone}`}>
      <span className="poster__kicker">{kicker}</span>
      <strong className="poster__title">{title}</strong>
      <span className="poster__rule" />
    </div>
  );
}
