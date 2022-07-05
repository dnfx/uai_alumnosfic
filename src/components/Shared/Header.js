import React, { useEffect, useState } from "react";
import { NavDropdown, Nav, Navbar, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <>
            
            <Navbar expand="xl">
              <Container>
                  <Row>
                    <Col className="d-none d-xl-block">
                  <Nav className="navbar navbar-light bg-light custom-size position-absolute start-50 translate-middle shadow-sm fixed-top">
                    <NavLink to="/">
                    <Nav.Link href="#home" className="fw-bolder">Inicio</Nav.Link>
                    </NavLink>
                    
                    <Nav.Item>
                      <Nav.Link className="fw-bolder" href="MallasCurrirulares" title="Pregrado">
                        Mallas Curriculares
                      </Nav.Link> 
                    </Nav.Item>
                    
                    <NavDropdown
                          className="fw-bolder"
                          id="nav-dropdown-4"
                          title="Pregrado"
                          menuVariant="light"
                        >
                          <NavLink to="/ReglamentoPregrado">
                            <NavDropdown.Item href="#/ReglamentoPregrado">Reglamentos</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/NormativasPregrado">
                            <NavDropdown.Item href="#action/3.1">Normativa interna UAI</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/CalendarioPregrado">  
                            <NavDropdown.Item href="#action/3.2">Calendario Académico</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/CalendarioPEPregrado">
                            <NavDropdown.Item href="#action/3.3">Calendario Pruebas y Examenes</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/MinorPregrado">
                            <NavDropdown.Item href="#action/3.4">Minor</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/TallerPregrado">
                            <NavDropdown.Item href="#action/3.5">Taller investigación Dirigida</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/CoordinacionPregrado">
                            <NavDropdown.Item href="#/pregrado">Coordinación Pregrado</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/CharlasPregrado">
                            <NavDropdown.Item href="#action/3.7">Charlas Sumate al Zoom</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/PreguntasPregado">
                            <NavDropdown.Item href="#action/3.8">Preguntas frecuentes</NavDropdown.Item>
                          </NavLink>
                        </NavDropdown>

                        <NavDropdown
                          className="fw-bolder"
                          id="nav-dropdown-5"
                          title="Quinto Año"
                          menuVariant="light"
                        >
                          <NavDropdown.Item href="#action/3.1">Reglamento</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Normativa Interna UAI</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Finanzas</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Calendario Académico</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Calendario de Pruebas/Exámenes</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Ingreso al Quinto Año</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Optativos Profesionales</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Condiciones Egreso/Titulación</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Coordinación Quinto Año</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Postulación MIF</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Preguntas Frecuentes</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                          className="fw-bolder"
                          id="nav-dropdown-6"
                          title="Practicas"
                          menuVariant="light"
                        >
                          <NavDropdown.Item href="#action/3.1">Procedimientos</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Reglamentos</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Preguntas Frecuentes</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                          className="fw-bolder"
                          id="nav-dropdown-7"
                          title="Titulacion"
                          menuVariant="light"
                        >
                          <NavDropdown.Item href="#action/3.1">Emprendimiento</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Pasantías</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Articulación con Magister</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                          className="fw-bolder"
                          id="nav-dropdown-9"
                          title="Internacionalizacion"
                          menuVariant="light"
                        >
                          <NavDropdown.Item href="#action/3.1">Oportunidades</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Preguntas Frecuentes</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                          className="fw-bolder"
                          id="nav-dropdown-10"
                          title="Acreditaciones"
                          menuVariant="light"
                        >
                          <NavDropdown.Item href="#action/3.1">Comisión nacional de Acreditación</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Acreditación Internacional</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Colegio de Ingenieros</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                          className="fw-bolder"
                          id="nav-dropdown-11"
                          title="Asuntos Estudiantiles"
                          menuVariant="light"
                        >
                          <NavDropdown.Item href="#action/3.1">Vida Universitaria Santiago</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Vida Universitaria Viña</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Becas</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">CAE</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Preguntas Frecuente</NavDropdown.Item>
                        </NavDropdown>
                  </Nav>
                </Col>
                <Col className="d-xl-none">
                <Navbar collapseOnSelect fixed="top" expand="xxl" bg="dark" variant="dark">
                      <Container>
                        <Navbar.Brand href="#home">
                          <img 
                            src="https://www.uai.cl/assets/themes/uai-central/img/logo.svg"
                            width="120"
                            height="50"
                          />
                        </Navbar.Brand>
                        
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                          <Nav>
                          <NavLink to="/">
                            <Nav.Link href="#home" className="fw-bolder">Inicio</Nav.Link>
                          </NavLink>

                          <Nav.Item>
                            <Nav.Link  href="MallasCurrirulares" title="Pregrado">
                              Mallas Curriculares
                            </Nav.Link> 
                          </Nav.Item>
                    
                    <NavDropdown
                          id="nav-dropdown-4"
                          title="Pregrado"
                          menuVariant="light"
                        >
                          <NavLink to="/ReglamentoPregrado">
                            <NavDropdown.Item href="#/ReglamentoPregrado">Reglamentos</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/NormativasPregrado">
                            <NavDropdown.Item href="#action/3.1">Normativa interna UAI</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/CalendarioPregrado">  
                            <NavDropdown.Item href="#action/3.2">Calendario Académico</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/CalendarioPEPregrado">
                            <NavDropdown.Item href="#action/3.3">Calendario Pruebas y Examenes</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/MinorPregrado">
                            <NavDropdown.Item href="#action/3.4">Minor</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/TallerPregrado">
                            <NavDropdown.Item href="#action/3.5">Taller investigación Dirigida</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/CoordinacionPregrado">
                            <NavDropdown.Item href="#/pregrado">Coordinación Pregrado</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/CharlasPregrado">
                            <NavDropdown.Item href="#action/3.7">Charlas Sumate al Zoom</NavDropdown.Item>
                          </NavLink>
                          <NavLink to="/PreguntasPregado">
                            <NavDropdown.Item href="#action/3.8">Preguntas frecuentes</NavDropdown.Item>
                          </NavLink>
                        </NavDropdown>

                        <NavDropdown
                          id="nav-dropdown-5"
                          title="Quinto Año"
                          menuVariant="light"
                        >
                          <NavDropdown.Item href="#action/3.1">Reglamento</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Normativa Interna UAI</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Finanzas</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Calendario Académico</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Calendario de Pruebas/Exámenes</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Ingreso al Quinto Año</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Optativos Profesionales</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Condiciones Egreso/Titulación</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Coordinación Quinto Año</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Postulación MIF</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Preguntas Frecuentes</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                          id="nav-dropdown-6"
                          title="Practicas"
                          menuVariant="light"
                        >
                          <NavDropdown.Item href="#action/3.1">Procedimientos</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Reglamentos</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Preguntas Frecuentes</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                          id="nav-dropdown-7"
                          title="Titulacion"
                          menuVariant="light"
                        >
                          <NavDropdown.Item href="#action/3.1">Emprendimiento</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Pasantías</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Articulación con Magister</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                          id="nav-dropdown-9"
                          title="Internacionalizacion"
                          menuVariant="light"
                        >
                          <NavDropdown.Item href="#action/3.1">Oportunidades</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Preguntas Frecuentes</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                          id="nav-dropdown-10"
                          title="Acreditaciones"
                          menuVariant="light"
                        >
                          <NavDropdown.Item href="#action/3.1">Comisión nacional de Acreditación</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Acreditación Internacional</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Colegio de Ingenieros</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                          id="nav-dropdown-11"
                          title="Asuntos Estudiantiles"
                          menuVariant="light"
                        >
                          <NavDropdown.Item href="#action/3.1">Vida Universitaria Santiago</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Vida Universitaria Viña</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Becas</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">CAE</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Preguntas Frecuente</NavDropdown.Item>
                        </NavDropdown>
                          </Nav>
                        </Navbar.Collapse>
                      </Container>
                    </Navbar>
                <br></br>
                </Col>
                </Row>
              </Container>
            </Navbar>
            <br></br>
           </>

    );
}

export default Header