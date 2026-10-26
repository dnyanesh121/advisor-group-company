import '../css/HeroSlider.css';
import HeroCta from './HeroCta';

/**
 * Reusable static hero (HeroSlider ke same CSS classes use karta hai).
 * Props: image, label (red text), text (navy text)
 */
export default function PageHero({ image, label, text, id, buttonText, href, newTab }) {
  return (
    <section className="hero" id={id}>
      {/* .hero__slide ko slider ke CSS ki wajah se is-active chahiye (warna opacity 0 rahegi) */}
      <div className={`hero__slide is-active ${overlayClass}`}>
        <img className="hero__img" src={image} alt="" />
        <div className="hero__fade" />
        <div className="hero__content">
          <h1>
            <span className="hero__label">{label}</span>{' '}
            <span className="hero__text">{text}</span>
          </h1>
          <HeroCta text={buttonText} href={href} newTab={newTab} />
        </div>
      </div>
    </section>
  );
}