import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const releases = [
  {
    videoUrl: 'https://youtu.be/4-JVYjTx5Bk',
    title: 'MOST Viral Frames Animations inside Capcut! 🔥🔥 (detailed...',
    views: '3.8K views',
    time: '20 hours ago',
    duration: '25:28'
  },
  {
    videoUrl: 'https://youtu.be/P3JOrFOSPS0',
    title: 'Become a CAPCUT PRO🔥 in 15 Minutes!',
    views: '23K views',
    time: '1 month ago',
    duration: '14:02'
  },
  {
    videoUrl: 'https://youtu.be/4rHYfFW3Edc',
    title: 'Deliver Ultra-Professional edits in Capcut 🔥(Secret Reaveled)',
    views: '49K views',
    time: '2 months ago',
    duration: '4:40'
  },
  {
    videoUrl: 'https://youtu.be/UrdTCE9GlK4',
    title: 'Boost Your CREATIVITY in Capcut with Premium ideas!🔥🔥',
    views: '238K views',
    time: '3 months ago',
    duration: '4:49'
  },
  // {
  //   videoUrl: 'https://youtu.be/i3pU95Lr6Io',
  //   title: 'The power of compound clip in capcut(tutorial)@Anmol_type',
  //   views: '4.9K views',
  //   time: '4 months ago',
  //   duration: '8:06'
  // },
  {
    videoUrl: 'https://youtu.be/96BIYLrBEag',
    title: 'Explained capcut pc in just 30mins! (briefly/advance features)',
    views: '9.1K views',
    time: '5 months ago',
    duration: '31:46'
  },
  {
    videoUrl: 'https://youtu.be/hqvqdvU3bjM',
    title: 'Viral Motion Graphic Edit in Capcut 🔥🔥|capcut tutorials|video editing...',
    views: '21K views',
    time: '6 months ago',
    duration: '12:31'
  }
];

// Helper to extract video ID and get thumbnail
const getThumbnailFromUrl = (url) => {
  try {
    const videoId = url.split("youtu.be/")[1];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  } catch (error) {
    return "";
  }
};

const Releases = () => {
  return (
    <>
      <Navbar />
      <section className="releases-section">
        <div className="releases-container">
          <div className="channel-header-wrapper">
            {/* Banner */}
            <div className="channel-banner"></div>

            {/* Profile Section */}
            <a
              href="https://www.youtube.com/@Anmol_type"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-profile-link"
            >
              <div className="channel-profile">
                <div className="avatar-wrapper">
                  <img src="/pfp.jpg" alt="Anmol_type" className="channel-avatar" />
                </div>

                <div className="profile-info">
                  <h1 className="channel-name">Anmol_type.</h1>
                  <div className="channel-meta">
                    <span className="meta-text">@Anmol_type</span>
                    <span className="meta-dot">•</span>
                    <span className="meta-text">16.7K subscribers</span>
                    <span className="meta-dot">•</span>
                    <span className="meta-text">40 videos</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="section-header">
            <h2 className="section-heading">Latest Releases</h2>
          </div>

          <div className="video-grid">
            {releases.map((item, index) => (
              <a
                key={index}
                href={item.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="video-card"
              >
                <div className="thumbnail-wrapper">
                  <img
                    src={getThumbnailFromUrl(item.videoUrl)}
                    alt={item.title}
                    className="thumbnail"
                  />
                  <span className="duration-badge">{item.duration}</span>
                </div>
                <div className="video-info">
                  <h3 className="video-title">{item.title}</h3>
                  <div className="video-meta">
                    <span>{item.views}</span>
                    <span className="meta-dot">•</span>
                    <span>{item.time}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <style>{`
          .releases-section {
            padding: 120px 24px 60px;
            background-color: var(--bg-dark, #050505);
            min-height: 100vh;
            color: #fff;
          }

          .releases-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 40px; /* Added margins */
          }

          /* Channel Header */
          .channel-header-wrapper {
             margin-bottom: 48px;
          }

          .channel-banner {
            width: 100%;
            height: 200px;
            background-image: url('https://yt3.googleusercontent.com/k6eqHVkxwVc_mJlCyffW46nebeZo_HZjJZ_UgqeGEjOSzyh2HcsQOpX3hQlTtTRCGxANRiVRb-s=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj');
            background-size: cover;
            background-position: center;
            border-radius: 16px;
            overflow: hidden;
            margin-bottom: 24px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          }

          .channel-profile-link {
            text-decoration: none;
            display: inline-block;
          }

          .channel-profile {
            display: flex;
            align-items: center;
            gap: 24px;
            padding: 0 16px;
            transition: transform 0.2s ease, opacity 0.2s ease;
          }
          
          .channel-profile-link:hover .channel-profile {
             opacity: 0.9;
             transform: translateX(4px);
          }

          .avatar-wrapper {
            flex-shrink: 0;
          }

          .channel-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid transparent; 
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          }

          .profile-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .channel-name {
            font-size: 2rem;
            font-weight: 700;
            line-height: 1.1;
            margin: 0;
            color: #fff;
          }

          .channel-meta {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 6px;
            color: #aaa;
            font-size: 0.95rem;
          }
          
          .meta-dot {
             font-size: 0.4rem;
             opacity: 0.7;
             position: relative;
             top: -1px;
          }


          .section-header {
            margin-bottom: 32px;
            padding: 0 16px; /* Align with profile padding */
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 32px;
          }

          .section-heading {
            font-size: 1.5rem;
            font-weight: 700;
          }

          /* Grid Layout */
          .video-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 24px 16px;
          }

          /* Video Card */
          .video-card {
            display: flex;
            flex-direction: column;
            gap: 12px;
            cursor: pointer;
            text-decoration: none;
            transition: transform 0.2s ease;
          }

          .video-card:hover .thumbnail {
            border-radius: 0; 
            /* YouTube hover effect often reduces radius or plays, 
               but here we keep it simple or maybe stick to radius.
               Let's keep radius consistent. */
             border-radius: 12px;
          }
          
          .thumbnail-wrapper {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 9;
            border-radius: 12px;
            overflow: hidden;
            background: #1a1a1a;
          }

          .thumbnail {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .video-card:hover .thumbnail {
             transform: scale(1.02);
          }

          .duration-badge {
            position: absolute;
            bottom: 6px;
            right: 6px;
            background-color: rgba(0, 0, 0, 0.8);
            color: #fff;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 2px 4px;
            border-radius: 4px;
            letter-spacing: 0.5px;
          }

          /* Info */
          .video-info {
            padding-right: 12px;
          }

          .video-title {
            font-size: 1rem;
            font-weight: 600;
            line-height: 1.4;
            color: #f1f1f1;
            margin-bottom: 6px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .video-meta {
            font-size: 0.85rem;
            color: #aaa;
            display: flex;
            align-items: center;
            gap: 4px;
          }

          .meta-dot {
            font-size: 0.5rem;
            opacity: 0.6;
          }
          
          @media (max-width: 768px) {
             .releases-section {
                padding-top: 80px; /* Reduced top padding on mobile */
                padding-left: 16px;
                padding-right: 16px;
             }
             .releases-container {
                padding: 0;
             }

             .channel-banner {
                height: 100px; /* Responsive height for mobile */
             }
             
             .channel-profile {
               flex-direction: column;
               align-items: center;
               text-align: center;
               gap: 12px;
             }
             
             .channel-avatar {
               width: 100px;
               height: 100px;
             }
             
             .profile-info {
               align-items: center;
             }
             
             .channel-meta {
                justify-content: center;
             }
             
             .channel-profile-link:hover .channel-profile {
                 transform: none; /* efficient on mobile */
             }
             
             .video-grid {
                grid-template-columns: 1fr;
                gap: 32px;
             }
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
};

export default Releases;
