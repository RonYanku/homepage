import React from 'react';
import './App.css';

import NavBar from './Components/NavBar'
import PortfolioTitle from './Components/PortfolioTitle'
import PortfolioAbout from './Components/PortfolioAbout'
import PortfolioSkills from './Components/PortfolioSkills'
import PortfolioContact from './Components/PortfolioContact'
import PortfolioProjects from './Components/PortfolioProjects'

function App() {
  return (
    <div>
      <NavBar />
      <PortfolioTitle />
      <PortfolioAbout />
      <PortfolioProjects />
      <PortfolioContact />
    </div>
  )
}
export default App;
