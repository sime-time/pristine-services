import Container from 'react-bootstrap/cjs/Container.js';
import Nav from 'react-bootstrap/cjs/Nav.js'
import Navbar from 'react-bootstrap/cjs/Navbar.js';
import NavDropdown from 'react-bootstrap/cjs/NavDropdown.js';

export default function Navigation() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="logo.svg" height="80" className="d-inline-block align-top" alt="Company logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/residential">Residential</NavDropdown.Item>
              <NavDropdown.Item href="/commercial">Commercial</NavDropdown.Item>
              <NavDropdown.Item href="/airbnb">Airbnb</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/checklist">Cleaning Checklist</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}