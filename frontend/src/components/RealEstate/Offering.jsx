import '../../css/RealEstate/Offerings.css';
// 👇 apne icons ke sahi path daalo
import residentialIcon from '../../assets/RealEstate/residential.png';
import preLeasedIcon from '../../assets/RealEstate/pre-leased.png';
import officeIcon from '../../assets/RealEstate/office-retail.png';
import landIcon from '../../assets/RealEstate/residential.png';
import industrialIcon from '../../assets/RealEstate/industrial.png';
import structuredIcon from '../../assets/RealEstate/structured.png';

// Naya offering add karna ho to bas yahan ek object jod do (href optional hai)
const OFFERINGS = [
  { title: 'Residential & Commercial Advisory', icon: residentialIcon },
  { title: 'Pre-Leased Investments', icon: preLeasedIcon },
  { title: 'Office & Retail Leasing', icon: officeIcon },
  { title: 'Land & Weekend Homes', icon: landIcon },
  { title: 'Industrial & Warehousing', icon: industrialIcon },
  { title: 'Structured Investments', icon: structuredIcon },
];

/**
 * Reusable "Our Offerings" grid.
 * Props: title (navy), highlight (red), items [{ title, icon, href? }], id
 */
export default function Offerings({
  title = 'Our',
  highlight = 'Offerings',
  items = OFFERINGS,
  id,
}) {
  return (
    <section className="off" id={id}>
      <h2 className="off__heading">
        {title} {highlight && <span>{highlight}</span>}
      </h2>

      <div className="off__grid">
        {items.map(({ title: t, icon, href }) => {
          const inner = (
            <>
              <img src={icon} alt="" className="off-card__icon" />
              <span className="off-card__title">{t}</span>
            </>
          );
          return href ? (
            <a key={t} href={href} className="off-card off-card--link">
              {inner}
            </a>
          ) : (
            <div key={t} className="off-card">
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}