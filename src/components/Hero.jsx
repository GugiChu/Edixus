import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        {/* Availability Badge */}
        <div className="availability-badge">
          <span className="dot"></span>
          <span>Specialist Team</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-heading">
          Premium Brands Needs
          {/* <span className="icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.39 9.61L22 12L14.39 14.39L12 22L9.61 14.39L2 12L9.61 9.61L12 2Z" fill="white" />
            </svg>
          </span> */}
          <br />
          A Creative Editor.
        </h1>

        {/* CTA Buttons */}
        <div className="cta-group">
          <a href="https://www.instagram.com/anmol_type" target="_blank" rel="noopener noreferrer" className="btn-primary">Editing Work</a>
          <a href="#faq" className="btn-secondary">How it works</a>
        </div>

        {/* Social Proof */}
        <div className="social-proof">
          {/* <div className="avatars">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" alt="User 1" />
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" alt="User 2" />
                        <div className="avatar-placeholder">VI</div>
                    </div> */}
          <p className="social-text">
            <strong>100+</strong> Happy customers
          </p>
        </div>

      </div>

      <div className="scroll-indicator">
        <div className="work-label">
          <span className="dot-small"></span> Work
        </div>
        <h2>Explore our video editing <br /> work and projects</h2>
      </div>

      <style>{`
        /* ================= DESKTOP (DEFAULT) ================= */

.hero {

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6.25rem; /* 100px */
  text-align: center;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 172, 28, 0.08) 0%,
    transparent 50%
  );
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem; /* 32px */
  margin-bottom: 3rem; /* 80px */
  max-width: 90%;
}

/* ================= BADGE ================= */

.availability-badge {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.4em 2em;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  font-size: 0.7rem;
  color: #ddd;
  margin-top: 2rem;
}

.dot {
  width: 0.4rem;
  height: 0.4rem;
  background-color: #ff4d4d;
  border-radius: 50%;
  box-shadow: 0 0 0.5rem rgba(255, 77, 77, 0.5);
}

/* ================= HEADING ================= */

.hero-heading {
  font-size: 4.2rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.02em;
}

/* ================= ICON ================= */

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(135deg, #FFAC1C, #ffbe4d);
  border-radius: 1rem;
  box-shadow: 0 0.25rem 0.75rem rgba(255, 172, 28, 0.3);
  transform: translateY(-0.5rem);
}

.icon-wrapper svg {
  width: 60%;
  height: 60%;
}

/* ================= BUTTONS ================= */

.cta-group {
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-primary,
.btn-secondary {
  padding: 1em 3em;
  border-radius: 999px;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  line-height: normal;
}

.btn-primary {
  background-color: var(--accent-orange);
  color: #000;
  transition: transform 0.2s, box-shadow 0.2s;
  border: none;
}

.btn-primary:hover {
  transform: translateY(-0.15rem);
  box-shadow: 0 0.5rem 1rem rgba(255, 172, 28, 0.3);
}

.btn-secondary {
  background-color: transparent;
  color: var(--text-white);
  border: 1px solid transparent;
  border-color: rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  border-color: rgba(255, 190, 77, 0.71);
}

/* ================= SOCIAL PROOF ================= */

.social-proof {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.avatars {
  display: flex;
}

.avatars > * {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: 2px solid var(--bg-dark);
  margin-left: -0.6rem;
  object-fit: cover;
}

.avatars > *:first-child {
  margin-left: 0;
}

.social-text {
  font-size: 0.95rem;
  color: var(--text-gray);
}

.social-text strong {
  color: var(--text-white);
}

/* ================= SCROLL INDICATOR ================= */

.scroll-indicator {
  padding-bottom: 3.75rem; /* 60px */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.work-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-orange);
  font-weight: 500;
}

.dot-small {
  width: 0.375rem;
  height: 0.375rem;
  background-color: var(--accent-orange);
  border-radius: 50%;
}

.scroll-indicator h2 {
  font-size: 3rem;
  font-weight: 500;
  color: var(--text-white);
  line-height: 1;
}

/* ================= TABLET ================= */

@media (max-width: 64em) {
  .hero-content {
    // margin-bottom: 4rem;
  }

  .hero-heading {
    font-size: 3rem;
    padding-top: 0.8rem;
    padding-bottom: 1rem;
  }

  .availability-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8em 1.8em;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  margin-top: 2rem;
  font-size: 0.5rem;
  color: #ddd;
}

.dot {
  width: 0.3rem;
  height: 0.3rem;
  background-color: #ff4d4d;
  border-radius: 50%;
  box-shadow: 0 0 0.5rem rgba(255, 77, 77, 0.5);
}

  .hero-heading, h2{
  font-weight: 600;
  line-height: 1.1;
  }

  .hero-content {
    gap: 1rem;
    margin-bottom: 3.5rem;
  }

  .btn-primary,
.btn-secondary {
  border-radius: 999px;
  font-weight: 500;
  font-size: 0.9rem;
}

}

/* ================= MOBILE ================= */

@media (max-width: 48em) {
  .hero {
    padding-top: 5rem;
    padding-inline: 5%;
    min-height: auto;
    margin-bottom: 3rem;
  }

  .hero-heading {
    padding-top: 0.8rem;
    padding-bottom: 1rem;
    font-size: 2rem;
  }

  .social-proof {
    margin-bottom: 1.2rem;
  }

.availability-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2em 0.8em;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  font-size: 0.5rem;
  color: #ddd;
}

.dot {
  width: 0.2rem;
  height: 0.2rem;
  background-color: #ff4d4d;
  border-radius: 50%;
  box-shadow: 0 0 0.5rem rgba(255, 77, 77, 0.5);
}

.hero-heading, h2{
  font-weight: 600;
  line-height: 1.1;
}

.hero-content {
  gap: 1rem;
  margin-bottom: 3.5rem;
}

.scroll-indicator h2 {
  font-size: 2rem;
  width: 90%;
  font-weight: 500;
  color: var(--text-white);
  line-height: 1;
}

  .btn-primary,
.btn-secondary {
  padding: 0.6em 1.2em;
  border-radius: 999px;
  font-weight: 500;
  font-size: 0.9rem;
}

  .cta-group {
    gap: 1rem;
  }

}

      `}</style>
    </section>
  );
};

export default Hero;
