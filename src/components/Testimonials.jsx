import React from 'react';

const testimonials = [
    '/ss/1.webp',
    '/ss/2.webp',
    '/ss/3.webp',
    '/ss/5.webp',
    '/ss/6.webp',
];

// Pre-define rotations for a consistent messy stack look
const rotations = [-2, 3, -1, 4, -3, 2, -4, 1, -2, 3];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label"><span className="dot-orange"></span>Testimonials</span>
                    <h2 className="section-heading">See what our premium clients are saying about us</h2>
                </div>

                <div className="testimonials-stack">
                    {testimonials.map((src, index) => (
                        <div
                            key={index}
                            className="testimonial-card-wrapper"
                            style={{
                                '--index': index,
                                '--rotation': `${rotations[index % rotations.length]}deg`
                            }}
                        >
                            <div className="testimonial-card">
                                <img src={src} alt={`Testimonial ${index + 1}`} loading="lazy" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="stack-spacer"></div>
            </div>

            <style>{`
        .testimonials-section {
          padding: 100px 24px;
          background: linear-gradient(to bottom, #050505, #111);
          color: #fff;
          position: relative;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
        }

        .section-header {
            text-align: center;
            margin-bottom: 60px;
            position: relative;
            z-index: 2;
        }
        
        .section-label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #888;
            font-weight: 500;
            margin-bottom: 16px;
        }
        .dot-orange {
            width: 8px; height: 8px; background: #ff4500; border-radius: 50%;
        }
        .section-heading {
            font-size: 3rem;
            font-weight: 700;
            background: linear-gradient(to right, #fff, #888);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* Stacking Logic */
        .testimonials-stack {
            position: relative;
            padding-bottom: 150px;
        }

        .testimonial-card-wrapper {
            position: sticky;
            /* Dynamic top calculation using CSS variable --index */
            top: calc(10vh + calc(var(--index) * 20px));
            margin-bottom: 100px; 
            display: flex;
            justify-content: center;
            z-index: 1;
        }

        .testimonial-card {
            width: 100%;
            max-width: 500px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            background: #1a1a1a;
            border: 1px solid rgba(255,255,255,0.08);
            transform: rotate(var(--rotation));
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
            transform: rotate(0deg) scale(1.02);
            box-shadow: 0 30px 60px rgba(0,0,0,0.7);
            z-index: 10;
        }

        .testimonial-card img {
            width: 100%;
            display: block;
            height: auto;
        }

        .stack-spacer {
            height: 100px;
        }

        @media (max-width: 768px) {
            .testimonials-section {
                padding: 60px 16px;
            }
            .section-heading { 
                font-size: 2rem; 
            }
            .testimonial-card-wrapper {
                margin-bottom: 40px;
                /* Mobile: tighter stacking start */
                top: calc(10vh + calc(var(--index) * 10px)); 
            }
             .testimonial-card {
                max-width: 100%;
                border-radius: 12px;
            }
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
