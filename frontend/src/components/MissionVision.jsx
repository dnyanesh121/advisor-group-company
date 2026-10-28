import items from '../js/MissionVision';
import '../css/MissionVision.css';
import missionIcon from '../assets/MissonVision/Mission 1.png';
import visionIcon from '../assets/MissonVision/Vision 1.png';
import goalIcon from '../assets/MissonVision/Goal 1.png';

const icons = {
  Mission: missionIcon,
  Vision: visionIcon,
  Goal: goalIcon,
};

export default function MissionVision() {
  return (
    <section className="mvv" id="about">
      <h2 className="mvv__title">
        <span>Mission, Vision and</span> <em>Values</em>
      </h2>

      <div className="mvv__grid">
        {items.map((item) => (
          <article key={item.id} className="mvv-card">
            <div className={`mvv-card__side mvv-card__side--${item.variant}`}>
              {/* <TargetIcon /> */}
              <img
                src={icons[item.title]}
                alt={item.title}
                className="mvv-card__icon"
              />
            </div>
            <div className="mvv-card__body">
              <h3>{item.title}</h3>
              <p title={item.text}>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}