import React from 'react';

import './App.scss';
import { HeaderComponent } from './components/header/header.component';
import { AboutSection } from './components/sections/about/about.section';
import { ExperienceSection } from './components/sections/experience/experience.section';
import { HomeSection } from './components/sections/home/home.section';
import { WorkSection } from './components/sections/work/work.section';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <div className="container">
        <HomeSection></HomeSection>
        <AboutSection></AboutSection>
        <WorkSection></WorkSection>
        <ExperienceSection></ExperienceSection>
      </div>
    </div>
  );
}

export default App;
