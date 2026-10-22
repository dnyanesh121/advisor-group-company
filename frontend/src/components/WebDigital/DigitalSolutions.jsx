import '../../css/WebDigital/DigitalSolutions.css';
// 👇 apni images ke sahi path daalo
import brandVoiceImg from '../../assets/WebDigital/brand-voice.png';
import performanceImg from '../../assets/WebDigital/performance.png';
import influencerImg from '../../assets/WebDigital/influencer.png';
import socialImg from '../../assets/WebDigital/social-media.png';


// Naya card add karna ho to bas yahan ek object jod do (href optional hai)
const SOLUTIONS = [
  { title: 'Amplifying your brand voice', image: brandVoiceImg },
  { title: 'Performance Marketing', image: performanceImg },
  { title: 'Influencer Marketing', image: influencerImg },
  { title: 'Social Media Marketing', image: socialImg },
];
 
/**
 * Reusable image-card grid ("Web and Digital Solutions").
 * Props:
 *  title (navy), highlight (red), items [{ title, image, href? }], id
 *  buttonText + buttonHref : neeche center mein optional button (nahi doge to nahi dikhega)
 */
export default function DigitalSolutions({
  title = 'Web and Digital',
  highlight = 'Solutions',
  items = SOLUTIONS,
  id,
  buttonText,
  buttonHref,
}) {
  return (
    <section className="ds" id={id}>
      <h2 className="ds__heading">
        {title} {highlight && <span>{highlight}</span>}
      </h2>
 
      <div className="ds__grid">
        {items.map(({ title: t, image, href }) => {
          const inner = (
            <>
              <span className="ds-card__media">
                <img src={image} alt="" className="ds-card__img" />
              </span>
              <span className="ds-card__title">{t}</span>
            </>
          );
          return href ? (
            <a key={t} href={href} className="ds-card ds-card--link">
              {inner}
            </a>
          ) : (
            <div key={t} className="ds-card">
              {inner}
            </div>
          );
        })}
      </div>
 
      {buttonText && buttonHref && (
        <div className="ds__cta">
          <a href={buttonHref} className="ds__btn">
            {buttonText}
          </a>
        </div>
      )}
    </section>
  );
}
 