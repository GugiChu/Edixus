import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    budget: '',
    vision: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setFormData({ name: '', email: '', serviceType: '', budget: '', vision: '' });
      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      console.error("Error submitting form: ", error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">

        {/* Header */}
        <div className="contact-header">
          <div className="section-label">
            <span className="dot-orange"></span> Contact
          </div>
          <h2 className="section-heading">
            Contact us for amazing video <br /> editing projects
          </h2>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>

          {/* Top Row: Name & Email */}
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="jane@framer.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Video Type Dropdown */}
          <div className="form-group">
            <label>What Kind of Video Do You Need?</label>
            <div className="select-wrapper">
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select...</option>
                <option value="youtube">YouTube Video</option>
                <option value="shorts">Shorts/Reels</option>
                <option value="corporate">Corporate</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Budget Radio Group */}
          <div className="form-group">
            <label>What's Your Budget Range?</label>
            <div className="budget-options">
              {['Under $500', '$500-$1000', '$1000-$2000', '$2000-$5000'].map((option) => (
                <label key={option} className="radio-label">
                  <input
                    type="radio"
                    name="budget"
                    value={option}
                    checked={formData.budget === option}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Message Textarea */}
          <div className="form-group">
            <label>Share Your Vision</label>
            <textarea
              name="vision"
              placeholder="Tell us about your project..."
              rows="4"
              value={formData.vision}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-group full-width">
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending Request...' : 'Send Request'}
            </button>
            {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
            {status === 'error' && <p className="error-msg">Failed to send. Please try again.</p>}
          </div>

        </form>

      </div>

      <style>{`
/* ==========================
   CONTACT SECTION BASE
========================== */

.contact-section {
  padding: 100px 24px;
  background-color: var(--bg-dark);
  display: flex;
  justify-content: center;
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

.contact-container {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

/* ==========================
   HEADER
========================== */

.contact-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
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

/* ==========================
   FORM
========================== */

.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* animation: fadeUp 1s ease forwards; */
}

.form-row {
  display: flex;
  gap: 24px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-size: 0.9rem;
  color: var(--text-gray);
  font-weight: 500;
}

/* INPUTS */

input[type="text"],
input[type="email"],
select,
textarea {
  width: 100%;
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 14px 16px;
  color: var(--text-white);
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #007aff;
  box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.2);
  transform: translateY(-1px);
}

input::placeholder,
textarea::placeholder {
  color: #555;
}

/* ==========================
   RADIO (BUDGET)
========================== */

.budget-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: var(--text-gray);
  font-weight: 400;
  transition: color 0.2s ease;
}

.radio-label:hover {
  color: var(--text-white);
}

.radio-label input {
  display: none;
}

.radio-custom {
  width: 18px;
  height: 18px;
  border: 2px solid #555;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.radio-label input:checked + .radio-custom {
  border-color: #007aff;
  transform: scale(1.1);
}

.radio-label input:checked + .radio-custom::after {
  content: "";
  width: 10px;
  height: 10px;
  background-color: #007aff;
  border-radius: 50%;
}

/* ==========================
   SUBMIT BUTTON
========================== */

.submit-btn {
  background-color: #333;
  color: var(--text-white);
  padding: 16px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 16px;
  transition: background-color 0.25s ease, transform 0.2s ease, box-shadow 0.2s;
  width: 100%;
}

.submit-btn:hover {
  background-color: #444;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
}

.submit-btn:active {
  transform: scale(0.97);
}

/* ==========================
   STATUS MESSAGES
========================== */

.success-msg {
  color: #4ade80;
  text-align: center;
  margin-top: 10px;
}

.error-msg {
  color: #ef4444;
  text-align: center;
  margin-top: 10px;
}

/* ==========================
   TABLET (≤768px)
========================== */

@media (max-width: 768px) {
  .contact-section {
    padding: 72px 20px;
  }

  .section-heading {
    font-size: 2.2rem;
  }

  .form-row {
    flex-direction: column;
    gap: 24px;
  }
}

/* ==========================
   MOBILE (≤480px)
========================== */

@media (max-width: 480px) {
  .contact-section {
    padding: 60px 16px;
  }

  .section-heading {
    font-size: 1.9rem;
  }

  input,
  textarea {
    font-size: 0.95rem;
  }
}

      `}</style>
    </section>
  );
};

export default Contact;
