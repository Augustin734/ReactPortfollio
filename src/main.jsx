import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/main.css';

import Record from './jsx/components/Record.jsx';
import Footer from './jsx/components/Footer.jsx';
import ScrollToTopButton from './jsx/components/ScrollButton.jsx';

import Home_page from './jsx/Home_page.jsx';
import Formations from './jsx/Formations.jsx';
import Projects from './jsx/Projects.jsx';
import Experiences from './jsx/Experiences.jsx';
import Skills from './jsx/Skills.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home_page/>
    <div className="RecordSection">
      <Record RecordName="formations" onClickPath="#formations" />
      <Record RecordName="projets" onClickPath="#projects" />
      <Record RecordName="experiences" onClickPath="#experiences" />
      <Record RecordName="skills" onClickPath="#skills" />
    </div>

    <section id="formations">
      <Formations />
    </section>

    <section id="projects">
      <Projects />
    </section>

    <section id="experiences">
      <Experiences />
    </section>

    <section id="skills">
      <Skills />
    </section>
    <ScrollToTopButton/>
    <Footer />
  </StrictMode>
);
