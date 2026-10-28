import '../../css/MutualFund/Mutualfunds.css';
// 👇 apne icons ke sahi path daalo
import largeCapIcon from '../../assets/MutualFund/large.png';
import midCapIcon from '../../assets/MutualFund/mid.png';
import smallCapIcon from '../../assets/MutualFund/small.png';

// Naya fund add karna ho to bas yahan ek object jod do
const FUNDS = [
  { id: 'large', title: ['Large Cap', 'Mutual Funds'], icon: largeCapIcon, link: '/mutual-funds/large-cap' },
  { id: 'mid', title: ['Mid Cap', 'Mutual Funds'], icon: midCapIcon, link: '/mutual-funds/mid-cap' },
  { id: 'small', title: ['Small Cap', 'Mutual Funds'], icon: smallCapIcon, link: '/mutual-funds/small-cap' },
];

export default function MutualFunds({ funds = FUNDS }) {
  return (
    <section className="mf">
      <h2 className="mf__heading">
        Invest in <span>Mutual Funds</span>
      </h2>

      <div className="mf__grid">
        {funds.map(({ id, title, icon, link }) => (
          <article key={id} className="mf-card">
            <div className="mf-card__body">
              <h3 className="mf-card__title">
                {title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h3>
              {/* <a href={link} className="mf-card__btn">
                Invest Now
              </a> */}
            </div>
            <img src={icon} alt="" className="mf-card__icon" />
          </article>
        ))}
      </div>
    </section>
  );
}