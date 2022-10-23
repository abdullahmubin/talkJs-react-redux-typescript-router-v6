import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { IModalCurrentUser } from '../../types';

const Navibar: React.FC<IModalCurrentUser> = (activeUserObj) => {

  let validUser = activeUserObj.activeUserObj;

  return (

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className='p-0'>
        <Navbar.Brand href="/">Talk.Js</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>

          {
            validUser ? <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/logout">Log out</Nav.Link>
            </Nav>
              : <Nav>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/login">Log in</Nav.Link>
              </Nav>
          }

          
        </Navbar.Collapse>
      </Container>
    </Navbar>



  )
}

export default Navibar;