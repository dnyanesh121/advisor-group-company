import { legend, description } from '../js/Presence';
import '../css/OurPresence.css';
import MapImg from  "../assets/MapImg/india-map.png"

export default function OurPresence() {
  return (
    <section className="presence" id="offices">
      <h2 className="presence__title">
        <span>Our</span> <em>Presence</em>
      </h2>

      <div className="presence__grid">
        {/* LEFT: map (pins aur labels image me hi hain) */}
        <div className="presence__map">
          <img
            src={MapImg}
            alt="Map of India showing our offices in Jaipur, Noida, Patna, Ranchi, Dhanbad, Kolkata and Mumbai"
          />
        </div>

        {/* RIGHT: legend + text */}
        <div className="presence__info">
          <ul className="presence__legend">
            {legend.map((item) => (
              <li key={item.id}>
                <span style={{ background: item.color }} />
                {item.label}
              </li>
            ))}
          </ul>

          <p className="presence__text">{description}</p>
        </div>
      </div>
    </section>
  );
}