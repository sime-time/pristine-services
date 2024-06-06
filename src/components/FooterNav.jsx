import Nav from 'react-bootstrap/cjs/Nav.js'

function FooterNav({ links }) {
  return (
    <Nav className="flex-column">
      {links.map((link, index) =>
        <Nav.Link href={link.href} key={index} className={`${index === 0 ? 'fw-bold fs-5' : 'd-none d-md-block'}`}>
          {link.label}
        </Nav.Link>
      )}
    </Nav>
  );
}

export default FooterNav; 