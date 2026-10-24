import '../../css/BlogsMedia/LatestArticles.css';
// 👇 apni images ke sahi path daalo
import healthImg from '../../assets/BlogImages/health-insurance.png';
import investImg from '../../assets/BlogImages/investment.png';
import homeImg from '../../assets/BlogImages/dream-home.png';
import carImg from '../../assets/BlogImages/car-insurance.png';
import home from "../../assets/BlogImages/home.png";
import landInsurance from "../../assets/BlogImages/land-insurance.png";

const EXCERPT =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.';

// Naya article add karna ho to bas yahan ek object jod do (href optional hai)
const ARTICLES = [
  {
    title: 'A Complete Guide to Choosing the Right Health Insurance',
    excerpt: EXCERPT,
    image: healthImg,
    author: 'First Advisor',
    date: 'November 27, 2025',
    // href: '/blogs/health-insurance-guide',
  },
  {
    title: 'Smart Investment Strategies for a Better Financial Future',
    excerpt: EXCERPT,
    image: investImg,
    author: 'First Advisor',
    date: 'November 27, 2025',
    // href: '/blogs/smart-investment-strategies',
  },
  {
    title: 'Everything You Need to Know Before Buying Your Dream Home',
    excerpt: EXCERPT,
    image: homeImg,
    author: 'First Advisor',
    date: 'November 27, 2025',
    // href: '/blogs/buying-dream-home',
  },
  {
    title: 'Car Insurance Explained: Coverage, Benefits & Tips',
    excerpt: EXCERPT,
    image: carImg,
    author: 'First Advisor',
    date: 'November 27, 2025',
    // href: '/blogs/car-insurance-explained',
  },
  {
    title: 'Home Loans Made Simple: A Guide for First-Time Buyers',
    excerpt: EXCERPT,
    image: home,
    author: 'First Advisor',
    date: 'November 27, 2025',
    // href: '/blogs/car-insurance-explained',
  },
  {
    title: 'Building Wealth Through Smart Financial Planning',
    excerpt: EXCERPT,
    image: landInsurance,
    author: 'First Advisor',
    date: 'November 27, 2025',
    // href: '/blogs/car-insurance-explained',
  },
];

/**
 * Reusable article/blog card grid.
 * Props:
 *  title (navy), highlight (red)  : heading
 *  articles : [{ title, excerpt, image, author, date, href? }]
 *  id       : section id (navbar scroll ke liye, jaise "blogs")
 */
export default function LatestArticles({
  title = 'Discover Our',
  highlight = 'Latest Articles',
  articles = ARTICLES,
  id,
}) {
  return (
    <section className="la" id={id}>
      <h2 className="la__heading">
        {title} {highlight && <span>{highlight}</span>}
      </h2>

      <div className="la__grid">
        {articles.map(({ title: t, excerpt, image, author, date, href }) => {
          const inner = (
            <>
              <span className="la-card__media">
                <img src={image} alt="" className="la-card__img" />
              </span>

              <span className="la-card__body">
                <h3 className="la-card__title">{t}</h3>
                <p className="la-card__excerpt">{excerpt}</p>

                <span className="la-card__meta">
                  <span className="la-card__author">{author}</span>
                  <span className="la-card__date">{date}</span>
                </span>
              </span>
            </>
          );
          return href ? (
            <a key={t} href={href} className="la-card la-card--link">
              {inner}
            </a>
          ) : (
            <article key={t} className="la-card">
              {inner}
            </article>
          );
        })}
      </div>
    </section>
  );
}