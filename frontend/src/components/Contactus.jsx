import { useState } from 'react';
import '../css/Contact.css';
import axios from "axios";

const INTERESTS = ['Health', 'Travel', 'Home', 'Mobility', 'Term', 'Business'];

const INITIAL = { name: '', mobile: '', email: '', interest: '', message: '' };

export default function ContactUs({ onSubmit }) {
  const [form, setForm] = useState(INITIAL);
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setSending(true);
  //   try {
      // 👇 yahan apni API call lagao (ya parent se onSubmit prop pass karo)
const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);

  try {
    const response = await axios.post(
      "https://lambent-dolphin-80bfb5.netlify.app/api/contact",
      form
    );

    console.log(response.data);

    alert("Enquiry Submitted Successfully");

    setForm(INITIAL);

  } catch (error) {
    console.error(error);

    alert("Error Submitting Form");
  } finally {
    setSending(false);
  }
};

  return (
    <section className="contact">
      <h2 className="contact__heading">
        Contact <span>Us</span>
      </h2>

      <form className="contact__card" onSubmit={handleSubmit}>
        <div className="contact__grid">
          <div className="contact__field">
            <label htmlFor="c-name">Full Name</label>
            <input
              id="c-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="c-mobile">Mobile Number</label>
            <input
              id="c-mobile"
              name="mobile"
              type="tel"
              inputMode="numeric"
              pattern="[0-9]{10}"
              title="10 digit mobile number daalo"
              maxLength={10}
              value={form.mobile}
              onChange={handleChange}
              autoComplete="tel"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="c-email">Email Address</label>
            <input
              id="c-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="c-interest">Interested in</label>
            <select
              id="c-interest"
              name="interest"
              value={form.interest}
              onChange={handleChange}
            >
              <option value="" />
              {INTERESTS.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>

          <div className="contact__field contact__field--full">
            <label htmlFor="c-message">Message</label>
            <textarea
              id="c-message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="contact__btn" disabled={sending}>
          {sending ? 'Sending…' : 'Submit Enquiry'}
        </button>
      </form>
    </section>
  );
}