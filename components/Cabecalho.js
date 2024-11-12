import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button, Container, Nav, Navbar} from 'react-bootstrap'; 
import Footer from './Footer';


    function Example() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        
        return (
          <>
          <Navbar className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ backgroundImage: 'linear-gradient(to right, #5E887C,#8D9E96,#8D9E96,#8D9E96,#5E887C' }} 
          variant="primary" >
      
      <Container>
            <Button variant="dark" className="d-grid gap-2"  onClick={handleShow}>
              Menu
            </Button>
      </Container>
      
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto ">
            <Nav.Link className="text-dark" href="/">Inicio</Nav.Link>
            <Nav.Link className="text-dark" href="/biologar">Biologar</Nav.Link>
            <Nav.Link className="text-dark" href="/pesquisador">Pesquisador</Nav.Link>
            <Nav.Link className="text-dark" href="/cursos">Curso</Nav.Link>
            <Nav.Link className="text-dark" href="/universidade">Universidade</Nav.Link>
            <Nav.Link className="text-dark" href="/catalogar">Catalogar</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      
            <Navbar.Brand href="/biologar" className="container d-flex justify-content-center text-white">Voltar</Navbar.Brand>
            
          </Navbar>
          <Footer/>
          </>
        );
      }
  
  
export default Example