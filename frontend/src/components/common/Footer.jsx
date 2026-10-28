import {
  legalText,
  quickLinks,
  businesses,
  legalLinks,
  contact,
  socials,
} from '../../js/Footer';
import '../../css/CommonCss/Footer.css';

/* ---------- Icons (inline SVG, currentColor = navy) ---------- */
const Svg = ({ children, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    {children}
  </svg>
);

const ICONS = {
  mail: (
    <Svg size={14}>
      <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v.4l-10 6.2L2 5.9v-.4Zm0 3.1V18.5A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.5-1.5V8.6l-9.5 5.9a1 1 0 0 1-1 0L2 8.6Z" />
    </Svg>
  ),
  phone: (
    <Svg size={14}>
      <path d="M6.6 2.5c.5 0 .9.3 1.1.8l1.4 3.5c.2.5.1 1-.3 1.4L7.4 9.4a12.5 12.5 0 0 0 7.2 7.2l1.2-1.4c.4-.4.9-.5 1.4-.3l3.5 1.4c.5.2.8.6.8 1.1V20a2 2 0 0 1-2.2 2C10.4 21.4 2.6 13.6 2 4.7A2 2 0 0 1 4 2.5h2.6Z" />
    </Svg>
  ),
  pin: (
    <Svg size={14}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </Svg>
  ),
  facebook: (
    <Svg size={17}>
      <path d="M12 2a10 10 0 0 0-1.6 19.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 12 2Z" />
    </Svg>
  ),
  instagram: (
    <Svg size={17}>
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.2-3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
    </Svg>
  ),
  linkedin: (
    <Svg size={17}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.04 3.78-2.04 4.04 0 4.79 2.66 4.79 6.1V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4V9.75Z" />
    </Svg>
  ),
  youtube: (
    <Svg size={17}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
    </Svg>
  ),
};

/* ---------- Footer ---------- */
const LinkList = ({ title, items, label }) => (
  <nav className="footer__col" aria-label={label || title}>
    <h4>{title}</h4>
    <ul>
      {items.map((l) => (
        <li key={l.label}>
          <a href={l.href}>{l.label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__grid">
        {/* Col 1: license + copyright */}
        <div className="footer__col footer__legal">
          {legalText.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>

        <LinkList title="Quick Links" items={quickLinks} />
        <LinkList title="Our Businesses" items={businesses} />
        <LinkList title="Legal" items={legalLinks} />

        {/* Get in touch */}
        <address className="footer__col footer__contact">
          <h4>Get in touch</h4>

          <p className="footer__row">
            <span className="footer__icon">{ICONS.mail}</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p className="footer__row">
            <span className="footer__icon">{ICONS.phone}</span>
            <a href={`tel:${contact.phone.replace(/-/g, '')}`}>{contact.phone}</a>
          </p>
          <p className="footer__row footer__row--top">
            <span className="footer__icon">{ICONS.pin}</span>
            <span>{contact.address}</span>
          </p>

          <div className="footer__social">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ICONS[s.name]}
              </a>
            ))}
          </div>
        </address>
      </div>
    </footer>
  );
}