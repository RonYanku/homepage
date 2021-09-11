import React from 'react';
import './App.css';

import NavBar from './Components/NavBar'
import PortfolioTitle from './Components/PortfolioTitle'
import PortfolioAbout from './Components/PortfolioAbout'
import PortfolioContact from './Components/PortfolioContact'
import PortfolioProjects from './Components/PortfolioProjects'
import PortfolioExperience from './Components/PortfolioExperience'

function App() {
  return (
    <div>
      <NavBar />
      <PortfolioTitle />
      <PortfolioAbout />
      <PortfolioExperience />
      {/* <PortfolioProjects /> */}
      <PortfolioContact />
    </div>
  )
}
export default App;
