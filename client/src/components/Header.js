import React from "react"

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
    return (
      
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" className="text-success">Search for Books</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/search" className="text-primary">Search</Nav.Link>
        <Nav.Link href="/saved" className="text-primary">Saved</Nav.Link>
      </Nav> 
      </Navbar>
      
    )
};

export default Header;
