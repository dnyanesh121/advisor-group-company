import items from '../js/MissionVision';
import '../css/MissionVision.css';

function TargetIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="#fff"
         strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M40 24a16 16 0 1 1-9-14.4" />
      <path d="M33 24a9 9 0 1 1-5.5-8.3" />
      <circle cx="24" cy="24" r="2.5" fill="#fff" stroke="none" />
      <path d="M25 23l14-14" />
      <path d="M33 9h6v6" />
    </svg>
  );
}

export default function MissionVision() {
  return (
    <section className="mvv" id="about">
      <h2 className="mvv__title">
        <span>Mission, Vision and</span> <em>Values</em>
      </h2>

      <div className="mvv__grid">
        {items.map((item) => (
          <article key={item.id} className="mvv-card">
            <div className={`mvv-card__side mvv-card__side--${item.variant}`}>
              <TargetIcon />
            </div>
            <div className="mvv-card__body">
              <h3>{item.title}</h3>
              <p title={item.text}>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}