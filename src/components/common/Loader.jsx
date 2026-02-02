import React from 'react';

const Loader = ({ isLoading }) => {
    return (
        <div className={`loader-overlay ${!isLoading ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <div className="loader-logo">
                    <span className="logo-text">AA</span>
                </div>
                <div className="loading-bar-container">
                    <div className="loading-bar"></div>
                </div>
            </div>

            <style>{`
                .loader-overlay {
                    position: fixed;
                    top: 0; 
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: #050505;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                    transition: opacity 0.8s ease-in-out, visibility 0.8s;
                }

                .loader-overlay.fade-out {
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                }

                .loader-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                }

                .loader-logo {
                    width: 80px;
                    height: 80px;
                    border: 2px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    animation: pulseBorder 2s infinite;
                }

                .logo-text {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #fff;
                    letter-spacing: 2px;
                    animation: fadeInOut 2s infinite ease-in-out;
                }

                .loading-bar-container {
                    width: 150px;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 4px;
                    overflow: hidden;
                    position: relative;
                }

                .loading-bar {
                    width: 100%;
                    height: 100%;
                    background: #FFAC1C;
                    position: absolute;
                    left: -100%;
                    animation: progress 1.5s ease-in-out infinite;
                }

                @keyframes pulseBorder {
                    0% { box-shadow: 0 0 0 0 rgba(255, 172, 28, 0.4); border-color: rgba(255, 172, 28, 0.4); }
                    70% { box-shadow: 0 0 0 15px rgba(255, 172, 28, 0); border-color: rgba(255, 255, 255, 0.1); }
                    100% { box-shadow: 0 0 0 0 rgba(255, 172, 28, 0); border-color: rgba(255, 255, 255, 0.1); }
                }

                @keyframes fadeInOut {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; text-shadow: 0 0 10px rgba(255, 172, 28, 0.5); }
                }

                @keyframes progress {
                    0% { left: -100%; }
                    50% { left: 0; }
                    100% { left: 100%; }
                }
            `}</style>
        </div>
    );
};

export default Loader;
