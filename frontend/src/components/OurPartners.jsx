import '../css/Partners.css';
// 👇 apne logos yahan import karo (naye partner add karne ke liye bas ek import + ek line array mein)
import adityaBirla from '../assets/OurPartner/aditya-birla.png';
import aegonLife from '../assets/OurPartner/aegon-life.png';
import digit from '../assets/OurPartner/digit.png';
import aviva from '../assets/OurPartner/aviva.png';
import icici from "../assets/OurPartner/icici.png";
import sbi from "../assets/OurPartner/sbi.png";
import newIndia from "../assets/OurPartner/new-india.png";
import oriental from "../assets/OurPartner/oriental.jpg";
import bajajAllianz from "../assets/OurPartner/bajaj.png";
import manipalSigna  from "../assets/OurPartner/manipalSigna.jpg";

const PARTNERS = [  
  { name: 'Aditya Birla Group', logo: adityaBirla },
  { name: 'Aegon Life', logo: aegonLife },
  { name: 'Digit', logo: digit },
  { name: 'Aviva', logo: aviva },
  { name: 'Icici', logo: icici },
  {name: 'sbi', logo: sbi},
  {name: 'newIndia', logo: newIndia},
  {name: 'oriental', logo: oriental},
  {name: 'bajajAllianz', logo: bajajAllianz},
  {name: 'manipalSigna', logo: manipalSigna},
];

// Kam logos hon to bhi marquee bhara rahe, isliye list ko itni baar repeat karte hain
const MIN_ITEMS = 8;

export default function OurPartners({ partners = PARTNERS, speed = 30 }) {
  const repeat = Math.max(1, Math.ceil(MIN_ITEMS / partners.length));
  const group = Array.from({ length: repeat }, () => partners).flat();

  // Seamless loop ke liye 2 identical sets
  const renderSet = (setKey, hidden) =>
    group.map((p, i) => (
      <div className="partners__item" key={`${setKey}-${i}`} aria-hidden={hidden}>
        <div className="partners__card">
          <img src={p.logo} alt={hidden ? '' : p.name} />
        </div>
      </div>
    ));

  return (
    <section className="partners">
      <h2 className="partners__heading">
        Our <span>Partners</span>
      </h2>

      <div className="partners__viewport">
        <div className="partners__track" style={{ '--duration': `${speed}s` }}>
          {renderSet('a', false)}
          {renderSet('b', true)}
        </div>
      </div>
    </section>
  );
}