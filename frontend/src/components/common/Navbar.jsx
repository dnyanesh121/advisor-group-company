import { useEffect, useRef, useState } from 'react';
import '../css/Navbar.css';
import logo from '../assets/BannerImg/logonew.png';
import { BUSINESSES } from '../../js/Site';
import { href, NavLink, useLocation } from 'react-router-dom';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Events & News', href: '/event-news' },
  { label: 'Blogs & Media', href: '/blog-media' },
  { label: 'Career', href: '/career' },
  {label: 'Contact Us', href: '/contact-us'},
]

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [active, setActive] = useState(null); // sirf hash links (#partners etc.) ke click ke liye
  const [scrolled, setScrolled] = useState(false);
  const ddRef = useRef(null);
  const { pathname } = useLocation();

  // Active underline URL se decide hoti hai (taaki Insurance page par Home pe red line na aaye)
  const isBusinessPage = BUSINESSES.some((b) => pathname.startsWith(b.path));
  const isActive = (href) => {
  return pathname === href;
};

  // Scroll karte hi navbar ko white background + shadow do
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ddRef.current && !ddRef.current.contains(event.target)) {
        setDdOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const closeMenu = () => {
    setOpen(false);
    setDdOpen(false);
  };

  return (
    <header className={`navbar ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* Logo */}
        <NavLink
          to="/"
          className="navbar__logo"
          aria-label="1Advisor home"
          onClick={closeMenu}
        >
          <img src={logo} alt="1Advisor - Your Happiness, Our Commitment" />
        </NavLink>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          onClick={() => {
            setOpen((prev) => !prev);
            setDdOpen(false);
          }}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="navbar-menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation */}
        <nav id="navbar-menu" className={`navbar__menu ${open ? 'is-open' : ''}`}>
          <ul>
            {links.slice(0, 1).map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={isActive(link.href) ? 'active' : ''}
                  onClick={() => {
                    setActive(link.label);
                    closeMenu();
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Our Businesses Dropdown */}
            <li
              ref={ddRef}
              className={`dd ${ddOpen ? 'open' : ''}`}
              onMouseEnter={() => {
                if (window.innerWidth > 860) setDdOpen(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 860) setDdOpen(false);
              }}
            >
              <button
                type="button"
                className={`dd-btn ${isBusinessPage ? 'active' : ''}`}
                onClick={() => setDdOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={ddOpen}
              >
                Our Businesses
                <span className="dd-arrow">▾</span>
              </button>

              <ul className="dd-menu">
                {BUSINESSES.map((business) => (
                  <li key={business.path}>
                    <a
                      href={business.path}
                      className={pathname.startsWith(business.path) ? 'active' : ''}
                      onClick={closeMenu}
                    >
                      {business.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {/* Remaining Navigation Links */}
            {links.slice(1).map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={isActive(link.href) ? 'active' : ''}
                  onClick={() => {
                    setActive(link.label);
                    closeMenu();
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}