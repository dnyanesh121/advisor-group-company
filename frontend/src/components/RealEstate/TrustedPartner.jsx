import '../../css/RealEstate/TrustedPartner.css';

/**
 * Reusable "Your Trusted Partner in ..." section (text + button left, image right).
 *
 * Props:
 *  - title       : heading ka navy hissa      (e.g. "Your Trusted Partner in")
 *  - highlight   : heading ka red hissa       (e.g. "Real Estate Investment")
 *  - text        : paragraph
 *  - image       : right side ki image
 *  - imageAlt    : image ka alt text (default: "")
 *  - buttonText  : button ka text (default: "Talk to an Expert")
 *  - href        : button ka link (nahi doge to button nahi dikhega, jab tak onClick na do)
 *  - onClick     : link ki jagah koi action chahiye (jaise modal kholna)
 *  - id          : section ka id (navbar scroll ke liye)
 */
export default function TrustedPartner({
  title,
  highlight,
  text,
  image,
  imageAlt = '',
  buttonText = 'Talk to an Expert',
  href,
  onClick,
  id,
}) {
  const external = href && /^https?:\/\//i.test(href);

  return (
    <section className="tp" id={id}>
      <div className="tp__inner">
        <div className="tp__content">
          <h2 className="tp__title">
            {title} {highlight && <span>{highlight}</span>}
          </h2>
          <p className="tp__text">{text}</p>

          {href ? (
            <a
              className="tp__btn"
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {buttonText}
            </a>
          ) : (
            onClick && (
              <button type="button" className="tp__btn" onClick={onClick}>
                {buttonText}
              </button>
            )
          )}
        </div>

        {image && (
          <div className="tp__media">
            <img src={image} alt={imageAlt} />
          </div>
        )}
      </div>
    </section>
  );
}