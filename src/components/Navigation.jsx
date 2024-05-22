import Container from 'react-bootstrap/cjs/Container.js';
import Nav from 'react-bootstrap/cjs/Nav.js'
import Navbar from 'react-bootstrap/cjs/Navbar.js';
import NavDropdown from 'react-bootstrap/cjs/NavDropdown.js';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="/">
          <img src="logo.svg" height="120" className="d-inline-block align-top" alt="Company logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="fw-bold" href="tel:3175378111">317-513-8111</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/residential">Residential</NavDropdown.Item>
              <NavDropdown.Item href="/commercial">Commercial</NavDropdown.Item>
              <NavDropdown.Item href="/airbnb">Airbnb</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/checklist">Cleaning Checklist</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}