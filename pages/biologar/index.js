import Footer from "@/components/Footer";
import Pagina from "@/components/Pagina";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Nav, Navbar, Row, Table,} from "react-bootstrap";


const index = () => {
  const [cursos, setCursos] = useState([]);

  return (
    <>
      <Navbar style={{ backgroundImage: 'linear-gradient(to right, #5E887C,#8D9E96,#8D9E96,#8D9E96,#5E887C' }} variant="dark">
        <Container >
        <Navbar.Brand href="/biologar" className="container text-center text-white">MeuCampus</Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link className="text-white" href="/">Inicio</Nav.Link>
            <Nav.Link className="text-white" href="/pesquisador">Pesquisador</Nav.Link>
            <Nav.Link className="text-white" href="/cursos">Curso</Nav.Link>
            <Nav.Link className="text-white" href="/universidade">Universidade</Nav.Link>
            <Nav.Link className="text-white" href="/catalogar">Catalogar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Row class="col-md-12 mt-5 mb-5 row justify-content-around ">
          <Card style={{ width: "18rem" }}>
            <Card.Img  variant="top"
              src="https://images.unsplash.com/photo-1614308459036-779d0dfe51ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            />

            <Card.Body>
              <Card.Title>Pesquisador</Card.Title>
              <Card.Text>
                Deixe-nos lhe conhecer melhor.
              </Card.Text>
              <Button className="d-grid gap-2" variant="dark" size="lg"  href="/pesquisador">
                Cadastrar
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img 
              src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            />

            <Card.Body>
              <Card.Title>Curso</Card.Title>
              <Card.Text>
              Qual é a sua área de estudo ?
              </Card.Text>
              <Button className="d-grid gap-2" variant="dark" size="lg" href="/cursos">
                Cadastrar
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top"
              src="https://images.unsplash.com/photo-1558533761-03a7657e0cdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            />

            <Card.Body>
              <Card.Title>Universidade</Card.Title>
              <Card.Text>
                Cadastre sua universidade.
              </Card.Text>
              <Button className="d-grid gap-2" variant="dark" size="lg" href="/universidade">
                Cadastrar
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top"
              src="https://images.unsplash.com/photo-1549964336-67d7d7d74ac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80"
            />

            <Card.Body>
              <Card.Title>Catalogar</Card.Title>
              <Card.Text>
                Compartilhe suas descobertas.
              </Card.Text>
              <Button className="d-grid gap-2" variant="dark" size="lg" href="/catalogar">
                Catalogar
              </Button>
            </Card.Body>
          </Card>

        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default index;
