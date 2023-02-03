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
      <Navbar sticky="top">
        <Container className='m-4'>
          <Navbar.Brand href="#home">
            <img
              src={pnglogo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
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
