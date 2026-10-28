import '../../css/CommonCss/HeroCta.css';

/**
 * Hero ka red "Explore Now" button (PageHero aur HeroSlider dono mein use hota hai).
 * - href "http" se shuru ho (bahari website) => nayi tab mein khulega
 * - warna (jaise "/mutual-funds") => usi tab mein khulega
 */
export default function HeroCta({ text = 'Explore Now', href, newTab, tabIndex }) {
  if (!href) return null;

  const external = newTab ?? /^https?:\/\//i.test(href);

  return (
    <a
      className="hero__btn"
      href={href}
      tabIndex={tabIndex}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {text}
    </a>
  );
}