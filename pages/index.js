import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Carousel, Container, Navbar, Row, Col } from "react-bootstrap";
import Footer from "@/components/Footer";

function WelcomePage() {
  const [showCarousel, setShowCarousel] = useState(true);

  return (
    <>
      <Navbar
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          backgroundImage: "linear-gradient(to right, #5E887C, #8D9E96, #8D9E96, #8D9E96, #5E887C)"
        }}
        variant="primary"
      >
        <Container className="d-flex justify-content-center align-items-center">
          <Navbar.Brand href="/biologar" className="text-white">
            Inicio
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Banner de Boas-Vindas */}
      <Container className="my-5 text-center">
        <h1>Bem-vindo ao MeuCampus</h1>
        <p>Descubra o mundo fascinante com conteúdos e cursos de qualidade.</p>
      </Container>

      {/* Carrossel de Imagens */}
      {showCarousel && (
        <Container className="mb-5">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src="https://blog.estacio.br/wp-content/uploads/2020/02/medicina.jpg"
                alt="Ecossistema Marinho"
                style={{ width: "50%" }} // Ajuste de largura da imagem
              />
              <Carousel.Caption>
                <h3>Medicina:</h3>
                <p>Confira mais sobre a faculdade de medicina.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src="https://blog.ead.unipar.br/wp-content/uploads/2021/04/ti.jpg"
                alt="Genética"
                style={{ width: "50%" }} 
              />
              <Carousel.Caption>
                <h3>TI</h3>
                <p>tecnologia da informação e qual a sua importância.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src="https://saoluis.edufor.edu.br/uploads/courses/2022/02/graduacao-em-direito-1644868791.jpg"
                alt="Ecologia e Sustentabilidade"
                style={{ width: "50%" }} 
              />
              <Carousel.Caption>
                <h3>Direito</h3>
                <p>Inscreva-se no Vestibular online e gratuito.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      )}

      {/* Cards de Navegação */}
      <Container className="mb-5">
        <Row className="d-flex justify-content-around">
          <Col md={4}>
            <Card className="text-center mb-3">
              <Card.Body>
                <Card.Title>Universidade</Card.Title>
                <Card.Text>
                  Cadastre universidades.
                </Card.Text>
                <Button variant="primary" href="/universidade">Saiba Mais</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center mb-3">
              <Card.Body>
                <Card.Title> Ensino Superior do Distrito Federal</Card.Title>
                <Card.Text>
                <a href="https://www.semesp.org.br/mapa/edicao-11/regioes/centro-oeste/distrito-federal/" target="DF" class="link-estilizado">
                                                               Visite nosso site
</a>

                </Card.Text>
                <Button variant="primary" href="/pesquisador">Saiba Mais</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center mb-3">
              <Card.Body>
                <Card.Title>Cursos</Card.Title>
                <Card.Text>
                  
                  Cadastre cursos.
                </Card.Text>
                <Button variant="primary" href="/cursos">Saiba Mais</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Seção de Destaque */}
      <Container className="my-5 text-center">
        <h2>Curso em Destaque</h2>
        <p>
          <strong>Analise e desenvolvimento de Sistemas</strong>   <Button variant="success" href="/cursos">Inscreva-se</Button>
        </p>
        <Button variant="success" href="/cursos/destaque">Inscreva-se</Button>
      </Container>

      <Footer />
    </>
  );
}

export default WelcomePage;

