import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content grows to push footer down */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
