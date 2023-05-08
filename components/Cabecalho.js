import React from 'react'
import { Container, Nav, Navbar, NavDropdown, } from 'react-bootstrap'

function Cabecalho() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="../deputados">Portal Dep.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Cabecalho;