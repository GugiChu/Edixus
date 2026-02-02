import AppointmentModal from './AppointmentModal';
import React, { useState } from 'react';

const faqData = [
  {
    question: "What is your typical turnaround time?",
    answer: "Turnaround time varies by project complexity. Simple edits: 48Hours, complex projects:1 week. Rush jobs available for additional fee."
  },
  {
    question: "Do you work with clients remotely?",
    answer: "Yes! I work with clients worldwide. All communication and file transfers are handled digitally through secure platforms."
  },
  {
    question: "What formats do you deliver in?",
    answer: "I deliver in any format you need: MP4, MOV, ProRes, and more. Multiple versions optimized for different platforms included."
  },
  {
    question: "How many revisions are included?",
    answer: "All packages include 3 rounds of revisions. Additional revisions available at $150/hour for minor changes."
  },
  {
    question: "Do you provide raw footage backup?",
    answer: "Yes, all project files and raw footage are backed up and stored for 6 months after project completion."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container faq-container">

        {/* Left Side: Text & CTA */}
        <div className="faq-left">
          <div className="section-label">
            <span className="dot-orange"></span> FAQ
          </div>

          <h2 className="section-heading">
            Frequently asked <br /> questions about us
          </h2>

          <div className="faq-cta-box">
            <p className="cta-text">Have a question? Let's discuss it now!</p>
            <button className="cta-button" onClick={() => setModalOpen(true)}>Book an appointment</button>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="faq-right">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {item.question}
                <div className="icon-wrapper">
                  <span className="icon-line hor"></span>
                  <span className="icon-line ver"></span>
                </div>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style>{`
        /* =======================
   FAQ SECTION BASE
======================= */

.faq-section {
  padding: 100px 24px;
  background-color: var(--bg-dark);
  /* animation: fadeUp 0.8s ease forwards; */
}

/* @keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
} */

.faq-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  gap: 60px;
}

/* =======================
   LEFT SIDE
======================= */

.faq-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

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
  background-color: #ff4500;
  border-radius: 50%;
}

.section-heading {
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.1;
}

/* CTA BOX */

.faq-cta-box {
  background-color: #ff6b35;
  padding: 32px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  /* animation: fadeUp 1s ease forwards; */
}

.cta-text {
  color: #fff;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.3;
  flex: 1;
}

.cta-button {
  background-color: #222;
  color: #fff;
  padding: 14px 24px;
  border-radius: 999px;
  font-size: 0.95rem;
  white-space: nowrap;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.cta-button:hover {
  transform: scale(1.07);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* =======================
   RIGHT SIDE
======================= */

.faq-right {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* FAQ ITEM */

.faq-item {
  background-color: #171717;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.25s ease;
  /* animation: fadeUp 0.6s ease forwards; */
}

.faq-item:hover {
  background-color: #222;
  transform: translateY(-2px);
}

.faq-question {
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-white);
  gap: 16px;
}

/* ICON */

.icon-wrapper {
  width: 32px;
  height: 32px;
  background-color: #ff6b35;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.icon-line {
  position: absolute;
  background-color: #fff;
  border-radius: 1px;
}

.icon-line.hor {
  width: 14px;
  height: 2px;
}

.icon-line.ver {
  width: 2px;
  height: 14px;
  transition: transform 0.3s ease;
}

/* ACTIVE STATE */

.faq-item.active .icon-line.ver {
  transform: rotate(90deg);
}

.faq-item.active .icon-wrapper {
  background-color: #fff;
  transform: rotate(180deg);
}

.faq-item.active .icon-line {
  background-color: #ff6b35;
}

/* ANSWER */

.faq-answer {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.3s ease, transform 0.3s ease;
  padding: 0 24px;
  color: var(--text-gray);
  line-height: 1.6;
  transform: translateY(-8px);
}

.faq-item.active .faq-answer {
  max-height: 240px;
  opacity: 1;
  transform: translateY(0);
  padding-bottom: 24px;
}

/* =======================
   TABLET (≤1024px)
======================= */

@media (max-width: 1024px) {
  .faq-container {
    flex-direction: column;
    gap: 48px;
  }

  .section-heading {
    font-size: 2.5rem;
  }
}

/* =======================
   MOBILE (≤768px)
======================= */

@media (max-width: 768px) {
  .faq-section {
    padding: 72px 16px;
  }

  .section-heading {
    font-size: 2rem;
  }

  .faq-question {
    font-size: 1rem;
    padding: 20px;
  }

  .faq-cta-box {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .cta-button {
    width: 100%;
    text-align: center;
  }
}

/* =======================
   SMALL MOBILE (≤480px)
======================= */

@media (max-width: 480px) {
  .section-heading {
    font-size: 1.75rem;
  }

  .faq-question {
    font-size: 0.95rem;
  }
}

      `}</style>
    </section>
  );
};

export default FAQ;
