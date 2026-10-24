import '../../css/ContactUs/Offices.css';
// import mapImg from '../../assets/BlogImages/Blog1.png'; // 👈 apni map image (ya neeche mapEmbedUrl use karo)

/* ---------- Icons ---------- */
const Svg = ({ children, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const BuildingIcon = () => (
  <Svg size={20}>
    <rect x="5" y="3" width="14" height="18" rx="1" />
    <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M11 21v-3h2v3" />
  </Svg>
);
const PinIcon = () => (
  <Svg>
    <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </Svg>
);
const PhoneIcon = () => (
  <Svg>
    <path d="M6.6 3h2.2l1.6 4-2 1.4a11 11 0 0 0 5.2 5.2l1.4-2 4 1.6v2.2a2 2 0 0 1-2 2C10.6 17.4 6.6 9.4 4.6 5a2 2 0 0 1 2-2Z" />
  </Svg>
);

// Naya office add karna ho to bas yahan ek object jod do (label optional hai)
const OFFICES = [
  {
    label: 'Headquarters',
    name: 'Corporate Office',
    address: '#410, A Wing 4th Floor, Express Zone Western Express Highway, Malad East Mumbai, Maharashtra 400097',
    phone: '+91-22-48012854',
  },
  {
    name: 'Registered Office',
    address: '#312, 3rd Floor Shree Ram Plaza Bank More, Dhanbad Jharkhand 826001',
    phone: '+91-326-2302751',
  },
  {
    name: 'Zonal Office',
    address: 'Unit No. 1472, 14th Floor Aggarwal Cyber Plaza-II Netaji Subhash Place Pitampura Delhi – 110034',
    phone: '+91-120-4577666',
  },
];

/**
 * Reusable offices section (cards left, map right).
 * Props:
 *  title (navy), highlight (red), subtitle   : heading
 *  offices      : [{ label?, name, address, phone }]
 *  mapImage     : static map image (default import upar)
 *  mapEmbedUrl  : Google Maps "Embed a map" ka src URL — dene par image ki jagah live map dikhega
 *  mapTitle     : map ka accessible title
 *  id           : section id (navbar ke "Offices" link ke liye "offices" do)
 */
export default function Offices({
  title = 'Visit Our',
  highlight = 'Offices',
  subtitle = 'Reach out to us through any of our offices across India.',
  offices = OFFICES,
//   mapImage = mapImg,
  mapEmbedUrl =
  "https://maps.google.com/maps?q=First+Advisor+Insurance+Brokers+Pvt+Ltd+Malad+East+Mumbai&z=15&output=embed",
  mapTitle = 'Our office locations',
  id,
}) {
  return (
    <section className="of" id={id}>
      <h2 className="of__heading">
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      {subtitle && <p className="of__sub">{subtitle}</p>}

      <div className="of__grid">
        {/* ---------- Office cards ---------- */}
        <ul className="of__list">
          {offices.map(({ label, name, address, phone }) => (
            <li key={name} className="of-card">
              <div className="of-card__head">
                <span className="of-card__badge" aria-hidden="true">
                  <BuildingIcon />
                </span>
                <div>
                  {label && <p className="of-card__label">{label}</p>}
                  <h3 className="of-card__name">{name}</h3>
                </div>
              </div>

              {address && (
                <p className="of-card__row">
                  <span className="of-card__icon"><PinIcon /></span>
                  <address>{address}</address>
                </p>
              )}

              {phone && (
                <p className="of-card__row of-card__row--phone">
                  <span className="of-card__icon"><PhoneIcon /></span>
                  <a href={`tel:${phone.replace(/[^\d+]/g, '')}`}>{phone}</a>
                </p>
              )}
            </li>
          ))}
        </ul>

        {/* ---------- Map ---------- */}
        <div className="of__map">
          {mapEmbedUrl ? (
            <iframe
              src={mapEmbedUrl}
              title={mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <img src={mapImage} alt={mapTitle} />
          )}
        </div>
      </div>
    </section>
  );
}