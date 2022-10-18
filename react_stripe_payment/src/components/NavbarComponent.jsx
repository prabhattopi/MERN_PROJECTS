import React from 'react'
import {Button,Container,Navbar,Modal} from "react-bootstrap"
const NavbarComponent = () => {
  return (
<Navbar expand="sm">
    <Navbar.Brand href="/">ECommerce Store</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse className="justify-content-end">
      <Button>Carts 0 Items</Button>
    </Navbar.Collapse>


</Navbar>
  )
}

export default NavbarComponent