import '../../css/Career/Careerhighlight.css';
// 👇 apne icons ke sahi path daalo
import growthIcon from '../../assets/Career/career-growth.png';
import cultureIcon from '../../assets/Career/team-culture.png';
import impactIcon from '../../assets/Career/real-impact.png';

// Naya card add karna ho to bas yahan ek object jod do
const HIGHLIGHTS = [
  { title: 'Career Growth', subtitle: 'Learn & grow', icon: growthIcon },
  { title: 'Team Culture', subtitle: 'Grow together', icon: cultureIcon },
  { title: 'Real Impact', subtitle: 'Make a difference', icon: impactIcon },
];

/**
 * Reusable heading + intro + icon-cards section (Careers page).
 * Props:
 *  title (navy), highlight (red) : heading
 *  description : heading ke neeche ka paragraph
 *  items       : [{ title, subtitle, icon }]
 *  id          : section id
 */
export default function CareerHighlights({
  title = 'Build your career with',
  highlight = 'First Advisor',
  description = 'Join a collaborative team helping families across India make confident insurance and financial decisions. Grow your skills, take ownership, and make a meaningful impact.',
  items = HIGHLIGHTS,
  id,
}) {
  return (
    <section className="ch" id={id}>
      <h2 className="ch__heading">
        {title} {highlight && <span>{highlight}</span>}
      </h2>

      {description && <p className="ch__desc">{description}</p>}

      <div className="ch__grid">
        {items.map(({ title: t, subtitle, icon }) => (
          <article key={t} className="ch-card">
            <img src={icon} alt="" className="ch-card__icon" />
            <h3 className="ch-card__title">{t}</h3>
            {subtitle && <p className="ch-card__sub">{subtitle}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}