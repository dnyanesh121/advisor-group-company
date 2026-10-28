import { useId, useState } from 'react';
import '../../css/CommonCss/Faq.css';

/**
 * Reusable FAQ accordion.
 *
 * Props:
 *  - faqs         : [{ q: string, a: string | ReactNode }]   (required)
 *  - title        : heading ka pehla (navy) hissa     (default: "Frequently Asked")
 *  - highlight    : heading ka doosra (red) hissa     (default: "Questions")
 *  - disclaimer   : string | ReactNode — nahi doge to disclaimer nahi dikhega
 *  - defaultOpen  : kaunsa item pehle se khula ho (index). -1 = sab band (default: 0)
 *  - allowMultiple: true => ek saath kai items khule reh sakte hain (default: false)
 */
export default function FAQ({
  faqs,
  title = 'Frequently Asked',
  highlight = 'Questions',
  disclaimer,
  defaultOpen = 0,
  allowMultiple = false,
}) {
  const uid = useId(); // ek page par kai FAQ ho to bhi ids unique rahengi
  const [open, setOpen] = useState(() =>
    defaultOpen >= 0 ? [defaultOpen] : []
  );

  if (!Array.isArray(faqs) || !faqs.length) {
    console.warn(
      '[FAQ] "faqs" prop khali ya undefined hai, isliye kuch render nahi hua. Aise bhejo: <FAQ faqs={mutualFundFaqs} />. Mila:',
      faqs
    );
    return null;
  }

  const toggle = (i) =>
    setOpen((cur) => {
      if (cur.includes(i)) return cur.filter((x) => x !== i);
      return allowMultiple ? [...cur, i] : [i];
    });

  return (
    <section className="faq">
      <h2 className="faq__heading">
        {title} {highlight && <span>{highlight}</span>}
      </h2>

      <div className="faq__list">
        {faqs.map(({ q, a }, i) => {
          const isOpen = open.includes(i);
          const btnId = `${uid}-btn-${i}`;
          const panelId = `${uid}-panel-${i}`;
          return (
            <div key={q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
              <h3 className="faq-item__head">
                <button
                  type="button"
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  <span>{q}</span>
                  <span className="faq-item__icon" aria-hidden="true" />
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className="faq-item__panel"
              >
                <div className="faq-item__panel-inner">
                  <p>{a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {disclaimer && (
        <div className="faq__disclaimer">
          <h4>Disclaimer</h4>
          <p>{disclaimer}</p>
        </div>
      )}
    </section>
  );
}