import './App.css';
// import { Route, Routes } from 'react-router-dom'

import { Navbar, Hero, Body, Card, FAQ, Footer, Community } from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Body />
      <Card />
      <Community />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
