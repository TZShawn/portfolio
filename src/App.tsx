import React from 'react';
import pnglogo from './Images/pnglogo.png';
import './App.css';
import Landing from './Sections/landing';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function App() {
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Navbar>
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
      <div className='h-full w-full flex-col'>
        <Landing />
      </div>
    </div>
  )
}
