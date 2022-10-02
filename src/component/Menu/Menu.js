import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import niter_logo from "../front/image/niter.png";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Link, Outlet } from 'react-router-dom';

import {Col } from 'react-bootstrap';

function Menu() {
    return(
        <section>

      {['md'].map((expand) => (
        <Navbar
            key={expand} 
            bg="light"
            expand={expand}
            className="nav_bar px-5 mb-5"
            fixed="top"
            height="50"
        >
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center mx-auto">
                                  
                  <Nav.Link><Link to="/" className='text-muted h6 nav_link'>Home</Link></Nav.Link>

                  <Nav.Link><Link to="/about" className='text-muted h6 nav_link'>About</Link></Nav.Link>
                  
                  <Nav.Link><Link to="/notice" className='text-muted h6 nav_link'>Notice</Link></Nav.Link>

                  <NavDropdown
                    title="Campus Life"
                    id={`offcanvasNavbarDropdown_2-expand-${expand}`}
                    className='text-muted h6 nav_link'
                  >
                    <NavDropdown.Item><Link to ='/niterclub' className='text-muted h6 nav_link'>Clubs</Link></NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                    
                    <NavDropdown.Item><Link to ='/residents' className='text-muted h6 nav_link'>Resident</Link></NavDropdown.Item>
                    
                  </NavDropdown>
                  </Nav></Offcanvas.Body></Navbar.Offcanvas>


                  <Navbar.Brand href="home">
                    <Link to="/" className=''>
                    <img
                        alt=""
                        src={niter_logo}
                        bg="light"
                        width="200"
                        height="200"
                        className="d-inline-block align-top nav_bar_image"
                        fixed="top"
                    />
                    </Link>
                </Navbar.Brand>
                  

                  <Navbar.Offcanvas><Offcanvas.Body><Nav className="navbar-right">

                  <Nav.Link><Link to ='/office' className='text-muted h6 nav_link'>Office</Link></Nav.Link>

                  <NavDropdown
                    title="Academy"
                    id={`offcanvasNavbarDropdown_1-expand-${expand}`}
                    className='text-muted h6 nav_link'
                  >
                    <NavDropdown.Item><Link to ='/faculties' className='text-muted h6 nav_link'>Faculty</Link></NavDropdown.Item>
                    
                    <NavDropdown.Divider />

                    <NavDropdown.Item><Link to ='/department' className='text-muted h6 nav_link'>Department</Link></NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                    
                    <NavDropdown.Item><Link to ='/admission' className='text-muted h6 nav_link'>Admission</Link></NavDropdown.Item>
                    
                  </NavDropdown> 

                  <Nav.Link><Link to ='/career' className='text-muted h6 nav_link'>Career</Link></Nav.Link>

                  <Nav.Link><Link to ='/contactus' className='text-muted h6 nav_link'>Contacts</Link></Nav.Link>

                  <Outlet/>

                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}


        </section>
        
    )
}
export default Menu;