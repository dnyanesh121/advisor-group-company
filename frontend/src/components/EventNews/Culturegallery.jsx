import '../../css/EventNews/Culturegallery.css';
// 👇 apni images ke sahi path daalo
import cricketImg from '../../assets/EventNews/cricket.png';
import festivalsImg from '../../assets/EventNews/festivals.png';
import womensDayImg from '../../assets/EventNews/womens-day.png';
import teamImg from '../../assets/EventNews/team-activities.png';
import expansionImg from '../../assets/EventNews/expansion.png';
import yogaImg from '../../assets/EventNews/yoga-day.png';
import creativeWorkspace from "../../assets/EventNews/creative-workspace.png";
import advisorDay from "../../assets/EventNews/advisor-day.png";
import training from "../../assets/EventNews/training.png"

// Naya card add karna ho to bas yahan ek object jod do (href optional hai)
const ITEMS = [
  { title: 'First Advisors Cricket League 2026', image: cricketImg },
  { title: 'Festivals & Celebrations', image: festivalsImg },
  { title: 'International Women’s Day', image: womensDayImg },
  { title: 'Sports & Team Activities', image: teamImg },
  { title: 'Office Expansion & Growth', image: expansionImg },
  { title: 'International Yoga Day', image: yogaImg },
  { title: 'Our Creative Workspace', image: creativeWorkspace },
  { title: 'First Advisors Day', image: advisorDay },
  { title: 'Training & Seminars', image: training },
];

// Description mein highlight wala hissa <span className="cg__quote"> se banta hai
const DESCRIPTION = (
  <>
    At First Advisors, we believe in growing together and celebrating every
    success! From achieving our professional goals to enjoying team moments and
    festive celebrations, we create a positive and supportive work environment.
    Through continuous learning and knowledge-sharing, we empower our people to
    grow, innovate, and deliver their best. Together, we believe in one vision:{' '}
    <span className="cg__quote">“Growing Together, Achieving More!”</span>
  </>
);

/**
 * Reusable intro text + image-card grid (e.g. "Life at First Advisors").
 * Props:
 *  title / highlight : optional heading (navy / red). Nahi doge to heading nahi dikhega
 *  description       : string ya JSX (centered paragraph)
 *  items             : [{ title, image, href? }]
 *  id                : section id
 */
export default function CultureGallery({
  title,
  highlight,
  description = DESCRIPTION,
  items = ITEMS,
  id,
}) {
  return (
    <section className="cg" id={id}>
      {(title || highlight) && (
        <h2 className="cg__heading">
          {title} {highlight && <span>{highlight}</span>}
        </h2>
      )}

      {description && <p className="cg__desc">{description}</p>}

      <div className="cg__grid">
        {items.map(({ title: t, image, href }) => {
          const inner = (
            <>
              <span className="cg-card__media">
                <img src={image} alt="" className="cg-card__img" />
              </span>
              <span className="cg-card__title">{t}</span>
            </>
          );
          return href ? (
            <a key={t} href={href} className="cg-card cg-card--link">
              {inner}
            </a>
          ) : (
            <div key={t} className="cg-card">
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}