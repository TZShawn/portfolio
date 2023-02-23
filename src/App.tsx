import React from 'react';
import pnglogo from './Images/pnglogo.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Landing from './Sections/landing';
import Project from './Sections/projects';
import Footer from './Sections/footer';
import AboutMe from './Sections/aboutme';
import Skills from './Sections/skills';

export default function App() {
  return (
    <div className='h-screen overflow-y-auto'>
      <div className='h-full w-full'>
        <Landing />
        <Project />
        <AboutMe />
        <Skills />
        <Footer />
      </div>
    </div>
  )
}
