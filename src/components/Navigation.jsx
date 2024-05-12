import "halfmoon/css/halfmoon.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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