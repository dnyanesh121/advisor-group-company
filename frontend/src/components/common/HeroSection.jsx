import { useEffect, useState, useCallback } from 'react';
import slides from '../../js/Slides';
import '../css/HeroSlider.css';
import HeroCta from './HeroCta';
import "../css/HeroCta.css"

const AUTOPLAY_MS = 2000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    []
  );
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      className="hero"
      id="home"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`hero__slide ${i === current ? 'is-active' : ''}`}
          aria-hidden={i !== current}
        >
          <img className="hero__img" src={slide.image} alt="" />
          <div className="hero__fade" />
          <div className="hero__content">
            <h1>
              <span className="hero__label">{slide.label}</span>{' '}
              <span className="hero__text">{slide.text}</span>
            </h1>
              {/* har slide ka apna button + apna link */}
              <HeroCta
                text={slide.buttonText}
                href={slide.href}
                newTab={slide.newTab}
                tabIndex={i === current ? 0 : -1}
              />
          </div>
        </div>
      ))}

      <button className="hero__arrow hero__arrow--prev" onClick={prev} aria-label="Previous slide">
        ‹
      </button>
      <button className="hero__arrow hero__arrow--next" onClick={next} aria-label="Next slide">
        ›
      </button>

      <div className="hero__dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={i === current ? 'is-active' : ''}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}