import "../../css/Insurance/Insurance.css";
// 👇 apne icons yahan import karo
import healthIcon from "../../assets/InsuranceIcons/HealthIcon.png";
import travelIcon from "../../assets/InsuranceIcons/TravelIcon.png";
import homeIcon from "../../assets/InsuranceIcons/HomeIcon.png";
import mobilityIcon from "../../assets/InsuranceIcons/Mobility.png";
import termIcon from "../../assets/InsuranceIcons/TermIcon.png";
import businessIcon from "../../assets/InsuranceIcons/BusinessIcon.png";

const PRODUCTS = [
  { title: "Health", icon: healthIcon, link: "/insurance/health" },
  { title: "Travel", icon: travelIcon, link: "/insurance/travel" },
  { title: "Home", icon: homeIcon, link: "/insurance/home" },
  { title: "Mobility", icon: mobilityIcon, link: "/insurance/mobility" },
  { title: "Term", icon: termIcon, link: "/insurance/term" },
  { title: "Business", icon: businessIcon, link: "/insurance/business" },
];

const InsuranceProducts = ({ products = PRODUCTS }) => {
  return (
    <section className="ins-products">
      <h2 className="ins-products__heading">
        Insurance <span className="ins-accent">Products</span>
      </h2>

      <div className="ins-products__grid">
        {products.map(({ title, icon, link }) => (
          <a key={title} href={link} className="ins-card">
            <span className="ins-card__title">{title}</span>
            <img src={icon} alt="" className="ins-card__icon" />
            <span className="ins-card__arrow" aria-hidden="true">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M2 1l3 3-3 3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default InsuranceProducts;