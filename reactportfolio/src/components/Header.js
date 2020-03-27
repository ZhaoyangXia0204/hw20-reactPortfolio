import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavTabs(props) {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Zhaoyang Xia</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#about"
         onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}>About</Nav.Link>
      <Nav.Link href="#contact"
           onClick={() => props.handlePageChange("Contact")}
           className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}>Contact</Nav.Link>
      
    </Nav>

  </Navbar.Collapse>
</Navbar>


  );
}

export default NavTabs;