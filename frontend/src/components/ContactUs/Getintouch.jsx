import { useId, useState } from 'react';
import axios from 'axios';
import '../../css/ContactUs/Getintouch.css';
import emailIcon from '../../assets/ContactUs/email.png';
import phoneIcon from '../../assets/ContactUs/phone.png';
import sheildIcon from '../../assets/ContactUs/sheild.png';

const INFO_ITEMS = [
  { text: 'support@firstadvisorsinsurance.com', href: 'mailto:support@firstadvisorsinsurance.com', icon: emailIcon, },
  { text: '1800-890-9195 (Toll-Free)', href: 'tel:18008909195',  icon: phoneIcon, },
  { text: 'IRDAI registered broker — trusted by thousands across India',  icon: sheildIcon, },
];

const INITIAL = { name: '', email: '', mobile: '', subject: '', message: '' };

const API_URL = import.meta.env.VITE_API_URL || 'https://advisor-group-company-1.onrender.com';

const saveContact = (values) => axios.post(`${API_URL}/api/contact`, values);

/**
 * Reusable contact section (left info panel + right form).
 * Props:
 *  title (navy), highlight (red), subtitle        : section heading
 *  panelTitle, panelText, infoItems [{text, href?}] : left blue panel
 *  formTitle, formHint                            : form ka heading + chhota text
 *  buttonText                                     : default "Send Message"
 *  onSubmit(values) => Promise|void               : default: backend /api/contact pe save karta hai
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
  onSubmit = saveContact,
  id,
}) {
  const uid = useId();
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [sentName, setSentName] = useState('');

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await onSubmit(form);
      setSentName(form.name.trim());
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
            {infoItems.map(({ text, href, icon }) => (
              <li key={text}>
                <span style={{width: '20px', height: '20px', borderRadius: '50%', background: '#fff'}}>
                <img
                  src={icon}
                  alt=""
                  className="gt__icon"
                />
                </span>
                {href ? (
                  <a href={href} style={{width: '207px'}}>{text}</a>
                ) : (
                  <span style={{width: '200px'}}>{text}</span>
                )}
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
              {status === 'success' &&
                `Thank you${sentName ? `, ${sentName}` : ''} for filling the form! We’ve received your message and sent a confirmation SMS to your mobile. Our team will get back to you shortly.`}
              {status === 'error' && 'Something went wrong. Please try again.'}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}