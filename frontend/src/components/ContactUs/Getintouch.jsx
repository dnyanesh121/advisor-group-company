import { useId, useState } from 'react';
import '../../css/ContactUs/Getintouch.css';

const INFO_ITEMS = [
  { text: 'support@firstadvisorsinsurance.com', href: 'mailto:support@firstadvisorsinsurance.com' },
  { text: '1800-890-9195 (Toll-Free)', href: 'tel:18008909195' },
  { text: 'IRDAI registered broker — trusted by thousands across India' },
];

const INITIAL = { name: '', email: '', mobile: '', subject: '', message: '' };

/**
 * Reusable contact section (left info panel + right form).
 * Props:
 *  title (navy), highlight (red), subtitle        : section heading
 *  panelTitle, panelText, infoItems [{text, href?}] : left blue panel
 *  formTitle, formHint                            : form ka heading + chhota text
 *  buttonText                                     : default "Send Message"
 *  onSubmit(values) => Promise|void               : form data yahan milega (API call yahan lagao)
 *  id                                             : section id
 */
export default function GetInTouch({
  title = 'Get in',
  highlight = 'Touch',
  subtitle = 'Have a question about insurance or need support? Our team is ready to assist you with quick, friendly guidance.',
  panelTitle = 'Need Support?',
  panelText = 'Send us a message and our team will get back to you as soon as possible. We’re here for all your insurance queries.',
  infoItems = INFO_ITEMS,
  formTitle = 'Send us a message',
  formHint = 'Fill in the form below and we’ll respond promptly.',
  buttonText = 'Send Message',
  onSubmit,
  id,
}) {
  const uid = useId();
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // 👇 yahan apni API call lagao (ya parent se onSubmit prop pass karo)
      if (onSubmit) await onSubmit(form);
      setForm(INITIAL);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const fid = (name) => `${uid}-${name}`;

  return (
    <section className="gt" id={id}>
      <h2 className="gt__heading">
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      {subtitle && <p className="gt__sub">{subtitle}</p>}

      <div className="gt__card">
        {/* ---------- Left: info panel ---------- */}
        <aside className="gt__panel">
          <span className="gt__circle gt__circle--tl" aria-hidden="true" />
          <span className="gt__circle gt__circle--tr" aria-hidden="true" />
          <span className="gt__circle gt__circle--bl" aria-hidden="true" />
          <span className="gt__circle gt__circle--br" aria-hidden="true" />

          <div className="gt__panel-body">
            <h3 className="gt__panel-title">{panelTitle}</h3>
            <p className="gt__panel-text">{panelText}</p>
            <hr className="gt__rule" />

            <ul className="gt__info">
              {infoItems.map(({ text, href }) => (
                <li key={text}>
                  <span className="gt__dot" aria-hidden="true" />
                  {href ? <a href={href}>{text}</a> : <span>{text}</span>}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ---------- Right: form ---------- */}
        <form className="gt__form" onSubmit={handleSubmit}>
          <h3 className="gt__form-title">{formTitle}</h3>
          {formHint && <p className="gt__form-hint">{formHint}</p>}

          <div className="gt__row">
            <div className="gt__field">
              <label htmlFor={fid('name')}>Your Name</label>
              <input id={fid('name')} name="name" type="text" placeholder="Enter your name"
                value={form.name} onChange={handleChange} autoComplete="name" required />
            </div>
            <div className="gt__field">
              <label htmlFor={fid('email')}>Your Email</label>
              <input id={fid('email')} name="email" type="email" placeholder="Enter your email"
                value={form.email} onChange={handleChange} autoComplete="email" required />
            </div>
          </div>

          <div className="gt__field">
            <label htmlFor={fid('mobile')}>Mobile Number</label>
            <input id={fid('mobile')} name="mobile" type="tel" inputMode="numeric"
              pattern="[0-9]{10}" maxLength={10} title="10 digit mobile number daalo"
              placeholder="Enter your 10-digit mobile number"
              value={form.mobile} onChange={handleChange} autoComplete="tel" required />
          </div>

          <div className="gt__field">
            <label htmlFor={fid('subject')}>Subject</label>
            <input id={fid('subject')} name="subject" type="text" placeholder="What is this regarding?"
              value={form.subject} onChange={handleChange} />
          </div>

          <div className="gt__field">
            <label htmlFor={fid('message')}>Message</label>
            <textarea id={fid('message')} name="message" rows={3} placeholder="Write your message..."
              value={form.message} onChange={handleChange} required />
          </div>

          <div className="gt__actions">
            <button type="submit" className="gt__btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : buttonText}
            </button>

            <p className={`gt__status gt__status--${status}`} role="status" aria-live="polite">
              {status === 'success' && 'Thank you! We’ll get back to you shortly.'}
              {status === 'error' && 'Something went wrong. Please try again.'}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}