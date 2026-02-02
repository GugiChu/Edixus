import React, { useState, useEffect } from "react";

import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <div className="logo-icon">
            <img src={logo} alt="Logo" width="32" height="32" />
          </div>
          <span className="logo-text">
            Anmol Anuragi<span className="logo-suffix"></span>
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#process">Process</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>

        <a href="#contact" className="contact-btn desktop-only">Contact us</a>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-links">
          <li>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>
              Work
            </a>
          </li>
          <li>
            <a href="#process" onClick={() => setMobileMenuOpen(false)}>
              Process
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </a>
          </li>
        </ul>
        <a href="#contact" className="contact-btn mobile-btn" onClick={() => setMobileMenuOpen(false)}>Contact us</a>
      </div>

      <style>{`
        /* ================= BASE (Desktop First) ================= */

.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding-top: 20px;
  display: flex;
  justify-content: center;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1100px;
  padding: 14px 28px;
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 9999px;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(10, 10, 10, 0.85);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 1.1rem;
}

.logo-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
}

.logo-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Desktop Nav */
.nav-links {
  display: flex;
  gap: 32px;
}

.nav-links a {
  font-size: 0.95rem;
  color: #ccc;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #ffb944;
}

.contact-btn {
  background: #ffb944;
  color: #000;
  padding: 10px 24px;
  border-radius: 9999px;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.2s;
}

.contact-btn:hover {
  transform: scale(1.05);
}

/* ================= MOBILE TOGGLE ================= */

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1002;
  position: relative;
}

.hamburger {
  width: 22px;
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* ================= MOBILE TOGGLE ANIMATION ================= */

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 6px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

/* We need 3 spans for a standard hamburger to turn into X easily, or use 2 spans.
   The current JSX has 2 spans. Let's adjust for 2 spans.
*/

.hamburger span {
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: 0.3s;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  transform: translateY(-8px) rotate(-45deg);
}

/* ================= MOBILE MENU ================= */

.mobile-menu {
  position: fixed;
  inset: 0;
  background: #0e0e0e;
  padding-top: 120px;
  transform: translateY(-100%);
  transition: transform 0.35s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  z-index: 999;
}

.mobile-menu.open {
  transform: translateY(0);
}

.mobile-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 28px;
  font-size: 1.4rem;
}

.mobile-links a {
  color: #fff;
  text-decoration: none;
}

/* ================= MOBILE ================= */

@media (max-width: 767px) {
  .nav-links,
  .contact-btn.desktop-only {
    display: none;
  }

  .contact-btn.mobile-btn {
    display: inline-block;
  }

  .mobile-toggle {
    display: flex;
  }

  .navbar {
    padding: 10px 18px;
    width: 84%;
    border-color: #ffb944;
  }

  .logo {
    font-size: 1rem;
  }
}

/* ================= TABLET ================= */

@media (min-width: 768px) and (max-width: 1023px) {
  .navbar {
    max-width: 85%;
    padding: 12px 24px;
    border-color: #ffb944;
  }

  .nav-links {
    gap: 16px;
  }

  .contact-btn {
    padding: 8px 20px;
    font-size: 0.9rem;
  }
}

/* ================= DESKTOP ================= */

@media (min-width: 1024px) {
  .navbar {
    max-width: 60%;
    border-color: #ffb944;
  }

  .nav-links {
    gap: 24px;
  }

  .nav-links a {
    font-size: 0.9rem;
  }
}

      `}</style>
    </div>
  );
};

export default Navbar;
