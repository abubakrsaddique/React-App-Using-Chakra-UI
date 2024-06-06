import React from 'react';
import Header from './components/header/Header' 
import Navbar from './components/navbar/Navbar'
import RealEstateSection from './components/realestatesection/RealEstateSection'
import CardComponent from './components/cardcomponent/CardComponent'

const App = () => {
  return (
    <div>
      <Header />
      <Navbar/>
      <RealEstateSection />
      <CardComponent />
    </div>
  );
};

export default App;
