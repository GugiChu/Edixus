import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Submit Request',
    description: 'Share your video needs and project details to get started.'
  },
  {
    number: '02',
    title: 'Video Editing',
    description: 'Our team edits and you can request revisions to perfect it.'
  },
  {
    number: '03',
    title: 'Final Delivery',
    description: 'Receive the final video with all necessary adjustments.'
  }
];

const Process = () => {
  return (
    <section id="process" className="process-section">
      <div className="container process-container">

        {/* Left: Image */}
        <div className="process-image-wrapper">
          <img
            src="https://i.pinimg.com/1200x/62/4c/5a/624c5a9dd1fdba135a165e263bded442.jpg"
            alt="Process"
            className="process-img"
            loading="lazy"
          />
        </div>

        {/* Right: Content */}
        <div className="process-content">
          <div className="section-label">
            <span className="dot-orange"></span> Process
          </div>

          <h2 className="section-heading">
            How our video editing <br /> service works for you
          </h2>

          <div className="steps-list">
            {steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{step.number}</div>
                <div className="step-details">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        /* ===============================
   PROCESS SECTION – DESKTOP FIRST
================================ */
.process-section {
  padding: 100px 0;
  background-color: var(--bg-dark);
  overflow: hidden;
}

/* container */
.process-container {
  display: flex;
  align-items: center;
  gap: 60px;
}

/* ===============================
   IMAGE SIDE
================================ */
.process-image-wrapper {
  flex: 1;
  height: 600px;
  border-radius: 24px;
  overflow: hidden;

  /* animation on load */
  /* animation: imageReveal 1s ease forwards; */
}

.process-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

/* hover interaction */
.process-image-wrapper:hover .process-img {
  transform: scale(1.08);
}

/* ===============================
   CONTENT SIDE
================================ */
.process-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;

  /* animation: contentReveal 1s ease forwards;
  animation-delay: 0.2s;
  opacity: 1; */
}

/* label */
.section-label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-gray);
  font-weight: 500;
}

.dot-orange {
  width: 8px;
  height: 8px;
  background-color: var(--accent-orange);
  border-radius: 50%;
  animation: pulse 1.6s infinite ease-in-out;
}

/* heading */
.section-heading {
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.1;
}

/* ===============================
   STEPS
================================ */
.steps-list {
  display: flex;
  flex-direction: column;
}

.step-item {
  display: flex;
  align-items: baseline;
  gap: 40px;
  padding: 32px 0;
  border-top: 1px solid var(--border-color);
  cursor: pointer;

  transition: 
    background 0.3s ease,
    transform 0.3s ease;
}

.step-item:last-child {
  border-bottom: 1px solid var(--border-color);
}

/* hover / keyboard focus */
.step-item:hover,
.step-item:focus-within {
  background: rgba(255, 255, 255, 0.03);
  transform: translateX(8px);
}

/* number */
.step-number {
  font-family: monospace;
  color: var(--text-gray);
  font-size: 0.9rem;
  min-width: 30px;
}

/* details */
.step-details {
  display: flex;
  flex: 1;
  justify-content: space-between;
  gap: 24px;
}

.step-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-white);
  flex: 1;
}

.step-desc {
  color: var(--text-gray);
  font-size: 0.9rem;
  flex: 1.5;
  line-height: 1.6;
}

/* ===============================
   ANIMATIONS
================================ */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
/* ===============================
   TABLET / SMALL LAPTOP
================================ */
@media (max-width: 1024px) {
  .process-container {
    gap: 40px;
  }

  .section-heading {
    font-size: 2.5rem;
  }
}

/* ===============================
   MOBILE
================================ */
@media (max-width: 768px) {
  .process-section {
    padding: 60px 0;
  }

  .process-container {
    flex-direction: column; 
    gap: 40px;
  }

  .process-image-wrapper {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    max-height: 400px;
    border-radius: 20px;
  }

  .section-heading {
    font-size: 2rem;
    line-height: 1.2;
    text-align: center; /* Center align on mobile for better look */
  }
  
  .section-label {
    justify-content: center; /* Center label too */
  }

  .step-item {
    gap: 16px;
    padding: 24px 0;
  }

  .step-details {
    flex-direction: column;
    gap: 8px;
  }

  .step-title {
    font-size: 1.1rem;
  }

  .step-desc {
    font-size: 0.9rem;
    color: #a3a3a3;
  }
}

/* ===============================
   ACCESSIBILITY
================================ */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

      `}</style>
    </section>
  );
};

export default Process;
