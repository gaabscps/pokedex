import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './navbar.css';


function BasicExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/361/361998.png"
              width="30"
              height="30"
              className="d-inline-block align-top" />{' '}
            Pokedex
          </Navbar.Brand>
        </Container>
      </Navbar>
      </>
  )}

export default BasicExample;