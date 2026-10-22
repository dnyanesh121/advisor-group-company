import founders from '../js/Founders';
import '../css/FounderStory.css';

export default function FoundersStory() {
  return (
    <section className="founders" id="founders">
      <h2 className="founders__title">
        <span>Founders</span> <em>Story</em>
      </h2>

      <div className="founders__grid">
        {founders.map((f) => (
          <article key={f.id} className="founder-card">
            <div className="founder-card__photo">
              <img
                src={f.photo}
                alt={f.name}
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            <h3>{f.name}</h3>
            <p className="founder-card__role">{f.role}</p>
            <hr />
            <p className="founder-card__bio" title={f.bio}>{f.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}