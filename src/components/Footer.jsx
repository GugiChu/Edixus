import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-content">
                <div className="footer-left">
                    <a href="mailto:hello@anmol.com" className="footer-email">anmoltypebusiness@gmail.com</a>
                </div>
                <div className="footer-right">
                    <p>&copy; {new Date().getFullYear()} The Gugichu Pvt. Ltd.</p>
                </div>
            </div>

            <style>{`
        .footer-section {
          background-color: #050505; /* Matches bg-dark */
          padding: 40px 24px;
          border-top: 1px solid #1a1a1a;
          color: #888;
          font-size: 0.9rem;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-left .footer-email {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .footer-left .footer-email:hover {
          color: #ff4500;
        }

        .footer-right p {
          margin: 0;
        }

        .footer-right .credit {
          color: #555;
          margin-left: 8px;
        }
        
        .creator-link {
            color: #fff;
            text-decoration: none;
            transition: color 0.2s;
        }
        
        .creator-link:hover {
            color: #ff4500;
            text-decoration: underline;
        }

        @media (max-width: 600px) {
          .footer-content {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
          
          .footer-right .credit {
            display: block;
            margin-left: 0;
            margin-top: 4px;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
