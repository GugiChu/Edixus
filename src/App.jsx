import React, { useState, useEffect } from 'react';
import Loader from './components/common/Loader';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoCarousel from './components/VideoCarousel';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Login from './components/admin/Login';
import AdminDashboard from './components/admin/AdminDashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <VideoCarousel />
      <Process />
      <Testimonials />
      <Contact />
      <FAQ />
    </main>
    <Footer />
  </>
);

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Auth Check
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Asset Loading Check
    const handleLoad = () => {
      // Small delay to ensure smooth transition even if fast
      setTimeout(() => setLoading(false), 800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Safety Timeout (max 4 seconds)
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      unsubscribe();
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  // Show Loader until everything is ready
  // Note: We render children immediately behind logic but overlay covers them? 
  // Text says "till all assets get fetched", so we can return null OR overlay. 
  // Overlay is better for Transition. Let's return App with Loader on top.


  return (
    <Router>
      <Loader isLoading={loading} />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/master"
            element={user ? <AdminDashboard /> : <Login />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;