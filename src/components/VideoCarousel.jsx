import React, { useState, useEffect, useRef } from "react";

const videos = [
  "/myvideo1.mp4",
  "/myvideo2.mp4",
  "/myvideo3.mp4",
  "/myvideo4.mp4",
];

const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    // Programmatic play/pause based on activeIndex
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          // Play active video
          video.currentTime = 0; // Optional: restart if desired, or remove to resume
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.log("Autoplay prevented:", error);
            });
          }
        } else {
          // Pause others
          video.pause();
          // video.currentTime = 0; // Optional: reset others
        }
      }
    });
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Helper to handle simple swipe for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchStartX.current - touchEndX.current < -50) prevSlide();
  };

  return (
    <section id="work" className="carousel-section">
      <div className="carousel-container">
        {/* Prev Button */}
        <button className="nav-btn prev" onClick={prevSlide}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className="carousel-track"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {videos.map((video, index) => {
            // Logic to determine position relative to active index
            let position = "hidden";
            if (index === activeIndex) position = "active";
            else if (index === (activeIndex + 1) % videos.length)
              position = "next";
            else if (
              index ===
              (activeIndex - 1 + videos.length) % videos.length
            )
              position = "prev";

            // Optimization Logic
            const isActive = position === "active";
            const isNear = position === "next" || position === "prev";
            const shouldPreload = isActive || isNear ? "auto" : "none";

            return (
              <div key={index} className={`slide ${position}`}>
                <div className="video-wrapper">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video}
                    // Remove autoPlay prop, controlled via useEffect
                    // autoPlay={isActive}
                    autoPlay={false} // Managed by ref
                    // Preload active & neighbors
                    preload={shouldPreload}
                    muted={isMuted}
                    loop
                    playsInline
                    className="carousel-video"
                  />
                  {/* Overlay for inactive slides to make them darker */}
                  {position !== "active" && (
                    <div className="video-overlay"></div>
                  )}

                  {/* Active Overlay Content (Example: '10' badge from screenshot) */}
                  {/* {position === 'active' && (
                                        <div className="active-badge">
                                            <span>10</span>
                                        </div>
                                    )} */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button className="nav-btn next" onClick={nextSlide}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>


        {/* Audio Control Button - Fixed for entire carousel */}
        <button
          className="audio-control-btn"
          onClick={() => setIsMuted(!isMuted)}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            // Muted Icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            // Unmuted Icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>
      </div>

      <style>{`
/* ================= CAROUSEL SECTION ================= */
.carousel-section {
  padding: clamp(2.5rem, 6vh, 4rem) 0;
  overflow: hidden;
  min-height: clamp(38rem, 80vh, 50rem);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* ================= CONTAINER ================= */
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 75rem;
  height: clamp(28rem, 70vh, 44rem);
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-track {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ================= SLIDES ================= */
.slide {
  position: absolute;
  width: clamp(16rem, 22vw, 22rem);
  height: clamp(28rem, 45vh, 38rem);
  border-radius: 1.5rem;
  overflow: hidden;
  opacity: 0;
  z-index: 0;
  transform: scale(0.8);
  transition:
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.4s ease,
    filter 0.4s ease;
  box-shadow: 0 1.25rem 3rem rgba(0,0,0,0.5);
}

/* ACTIVE */
.slide.active {
  opacity: 1;
  z-index: 10;
  transform: scale(1);
  border: 1px solid rgba(255,255,255,0.12);
}

.slide.active:hover {
  transform: scale(1.06);
}

/* PREV / NEXT */
.slide.prev {
  opacity: 0.5;
  z-index: 6;
  transform: translateX(-120%) scale(0.85) perspective(1000px) rotateY(6deg);
}

.slide.next {
  opacity: 0.5;
  z-index: 6;
  transform: translateX(120%) scale(0.85) perspective(1000px) rotateY(-6deg);
}

.slide.prev:hover,
.slide.next:hover {
  opacity: 0.7;
}

/* EXTRA DESKTOP SLIDES (5 VIDEOS UI) */
.slide.prev2 {
  opacity: 0.25;
  z-index: 3;
  transform: translateX(-240%) scale(0.7);
  filter: blur(1px);
}

.slide.next2 {
  opacity: 0.25;
  z-index: 3;
  transform: translateX(240%) scale(0.7);
  filter: blur(1px);
}

/* ================= VIDEO ================= */
.video-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
}

.carousel-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* VIDEO HOVER OVERLAY */
.video-wrapper::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0,0,0,0.55),
    rgba(0,0,0,0.1)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.slide:hover .video-wrapper::after {
  opacity: 1;
}

/* ================= ACTIVE BADGE ================= */
.active-badge {
  position: absolute;
  inset: 0;
  margin: auto;
  width: clamp(3.5rem, 6vw, 5rem);
  height: clamp(3.5rem, 6vw, 5rem);
  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.45),
    rgba(255,255,255,0.1)
  );
  backdrop-filter: blur(6px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255,255,255,0.8);
  box-shadow: 0 0 1.25rem rgba(255,255,255,0.3);
}

.active-badge span {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  color: #fff;
}

/* ================= NAV BUTTONS ================= */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: clamp(2.75rem, 4vw, 3.5rem);
  height: clamp(2.75rem, 4vw, 3.5rem);
  border-radius: 50%;
  background: var(--accent-orange);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    box-shadow: 0 0.75rem 1.25rem rgba(0,0,0,0.3);
}

.audio-control-btn {
  position: absolute;
  bottom: 2rem;
  right: clamp(1rem, 8vw, 20%);
  z-index: 25;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
}

.audio-control-btn:hover {
  background: rgba(255, 172, 28, 0.9);
  border-color: var(--accent-orange);
  color: #000;
  transform: scale(1.1);
}

.nav-btn:hover {
  transform: translateY(-50%) scale(1.15);
  background: var(--accent-orange-hover);
  box-shadow: 0 1rem 2rem rgba(0,0,0,0.45);
}

.nav-btn:active {
  transform: translateY(-50%) scale(0.95);
}

.nav-btn.prev {
  left: clamp(1rem, 8vw, 20%);
}

.nav-btn.next {
  right: clamp(1rem, 8vw, 20%);
}

/* ================= DESKTOP FIX (REEL RATIO + 5 VIDEOS) ================= */
@media (min-width: 64.01em) {

  .carousel-container {
    max-width: 90rem;
  }

  .slide {
    width: clamp(14rem, 16vw, 18rem);
    aspect-ratio: 9 / 16;
    height: auto;
  }

  .video-wrapper,
  .carousel-video {
    aspect-ratio: 9 / 16;
  }
}

/* ================= TABLET ================= */
@media (max-width: 64em) {

  .slide.prev {
    transform: translateX(-90%) scale(0.8);
  }

  .slide.next {
    transform: translateX(90%) scale(0.8);
  }

  .slide.prev2,
  .slide.next2 {
    display: none;
  }

  .nav-btn.prev {
    left: 2rem;
  }

  .nav-btn.next {
    right: 2rem;
  }
  
  .audio-control-btn {
    right: 2rem;
    bottom: 1rem;
  }
}

/* ================= MOBILE ================= */
@media (max-width: 48em) {

  .carousel-section {
    min-height: auto;
    padding: 2.5rem 0;
  }

  .carousel-container {
    height: 32rem;
    overflow: hidden;
  }

  .slide {
    width: 16rem;
    height: 28rem;
    box-shadow: 0 0.75rem 2rem rgba(0,0,0,0.45);
  }

  .slide.prev {
    transform: translateX(-65%) scale(0.85);
    opacity: 0.3;
    pointer-events: none;
  }

  .slide.next {
    transform: translateX(65%) scale(0.85);
    opacity: 0.3;
    pointer-events: none;
  }

  .slide.prev2,
  .slide.next2 {
    display: none;
  }

  .nav-btn {
    width: 2.75rem;
    height: 2.75rem;
    background: rgba(255, 172, 28, 0.9);
  }

  .nav-btn.prev {
    left: 1rem;
  }

  .nav-btn.next {
    right: 1rem;
  }

  .audio-control-btn {
    right: 1rem;
    bottom: 1rem;
    width: 2.5rem;
    height: 2.5rem;
  }
}

      `}</style>
    </section >
  );
};

export default VideoCarousel;
