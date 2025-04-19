import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Navbar from './components/Header';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
