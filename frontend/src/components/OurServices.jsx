import { useRef } from 'react';
import '../css/OurServices.css';
import services from '../js/Services';

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function OurServices() {
  const trackRef = useRef(null);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.service-card');
    const step = card ? card.offsetWidth + 28 : 300;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="services" id="services">
      <h2 className="services__title">
        <span>Our</span> <em>Services</em>
      </h2>

      <div className="services__wrap">
        <button className="services__arrow services__arrow--prev" onClick={() => scrollByCard(-1)} aria-label="Scroll left">‹</button>

        <div className="services__track" ref={trackRef}>
          {services.map((s) => (
            <a key={s.id} href={s.href} className="service-card">
              <div className="service-card__img">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="service-card__body">
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <span className="service-card__btn" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>

        <button className="services__arrow services__arrow--next" onClick={() => scrollByCard(1)} aria-label="Scroll right">›</button>
      </div>
    </section>
  );
}