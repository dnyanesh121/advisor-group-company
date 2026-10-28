import { useCallback, useEffect, useRef, useState } from 'react';
import '../../css/Loans/LoanProducts.css';
// 👇 apni images ke sahi path daalo
import homeLoanImg from '../../assets/LoanImg/HomeLoan.png';
import personalLoanImg from '../../assets/LoanImg/Personal.png';
import businessLoanImg from '../../assets/LoanImg/Business.png';
import loanPropertyImg from "../../assets/LoanImg/LoanProperty.png";
 
const DESC =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.';

// Naya loan add karna ho to bas yahan ek object jod do — scroll apne aap ban jayega
const LOANS = [
  { id: 'home', title: 'Home Loan', desc: DESC, image: homeLoanImg, applyHref: '/loans/home/apply', moreHref: '/loans/home' },
  { id: 'personal', title: 'Personal Loan', desc: DESC, image: personalLoanImg, applyHref: '/loans/personal/apply', moreHref: '/loans/personal' },
  { id: 'business', title: 'Business Loan', desc: DESC, image: businessLoanImg, applyHref: '/loans/business/apply', moreHref: '/loans/business' },
  { id: 'loan against property', title: 'Loan Against Property', desc: DESC, image: loanPropertyImg, applyHref: '/loans/personal/apply', moreHref: '/loans/personal' },
];

export default function LoanProducts({ loans = LOANS }) {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows, loans.length]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    const card = el.firstElementChild;
    if (!card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  return (
    <section className="loans">
      <h2 className="loans__heading">
        Loan <span>Products</span>
      </h2>

      <div className="loans__wrap">
        {canPrev && (
          <button
            type="button"
            className="loans__arrow loans__arrow--prev"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous loans"
          >
            ‹
          </button>
        )}

        <div className="loans__track" ref={trackRef}>
          {loans.map(({ id, title, desc, image, applyHref, moreHref }) => (
            <article key={id} className="loan-card">
              <img src={image} alt="" className="loan-card__img" />
              <div className="loan-card__body">
                <h3 className="loan-card__title">{title}</h3>
                <p className="loan-card__desc">{desc}</p>
                {/* <div className="loan-card__actions">
                  <a href={applyHref} className="loan-btn loan-btn--solid">Apply Now</a>
                  <a href={moreHref} className="loan-btn loan-btn--outline">View More</a>
                </div> */}
              </div>
            </article>
          ))}
        </div>

        {canNext && (
          <button
            type="button"
            className="loans__arrow loans__arrow--next"
            onClick={() => scrollByCard(1)}
            aria-label="Next loans"
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
}