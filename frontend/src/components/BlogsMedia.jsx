import blogs from '../js/Blogs';
import '../css/BlogsMedia.css';

export default function BlogsMedia() {
  return (
    <section className="blogs" id="blogs">
      <h2 className="blogs__title">
        <span>Blogs/</span> <em>Media</em>
      </h2>

      <div className="blogs__grid">
        {blogs.map((b) => (
          <a key={b.id} href={b.href} className="blog-card">
            <div className="blog-card__img">
              <img
                src={b.image}
                alt={b.title}
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="blog-card__body">
              <h3>{b.title}</h3>
              <p title={b.desc}>{b.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}