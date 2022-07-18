import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import Home from 'src/pages/Home';

function App() {
  return (
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
