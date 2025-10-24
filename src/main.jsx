import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./css/main.css"

import Home_page from './jsx/Home_page.jsx';
import Formations from './jsx/Formations.jsx';
import Projects from './jsx/Projects.jsx';
import Experiences from './jsx/Experiences.jsx';
import Skills from './jsx/Skills.jsx';
import Interest from './jsx/Interest.jsx'
import ScrollToTop from './jsx/components/Scroll.jsx';
import ScrollToTopButton from './jsx/components/ScrollButton.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/interest" element={<Interest/>}/>
      </Routes>
    <ScrollToTopButton/>
    </BrowserRouter>
  </StrictMode>
);
