import '../../css/ContactUs/RegulatoryInfo.css';

// Text yahan se badlo. Har item ek alag paragraph (nayi line) banta hai.
const LINES = [
  'IRDAI Broking License No: 584, Category: Direct Broker (Life & General), valid till 07-02-2029.',
  'Product information is solely based on the information received from insurers. For risk factors, terms and exclusions, please read the sales brochure carefully before concluding a sale.',
  'The Point of Sales Person (POSP) is appointed by First Advisor Insurance Brokers Pvt. Ltd. as per IRDAI guidelines.',
];

/**
 * Reusable regulatory / compliance info block.
 * Props:
 *  title (navy), highlight (red) : main heading
 *  heading : chhota sub-heading (nahi doge to nahi dikhega)
 *  lines   : [string | JSX] — har item alag paragraph
 *  id      : section id
 */
export default function RegulatoryInfo({
  title = 'Regulatory',
  highlight = 'Info',
  heading = 'Compliance & Regulatory Information',
  lines = LINES,
  id,
}) {
  return (
    <section className="ri" id={id}>
      <h2 className="ri__title">
        {title} {highlight && <span>{highlight}</span>}
      </h2>

      {heading && <h3 className="ri__heading">{heading}</h3>}

      <div className="ri__text">
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </section>
  );
}