import React, { useContext, useState } from 'react'
import {Button,Container,Navbar,Modal} from "react-bootstrap"
import { CartContext } from '../context/CartContext';
import CartProducts from './CartProducts';
const NavbarComponent = () => {
  const [show,setShow]=useState(false);
 const cart=useContext(CartContext)

  const handleClose=()=>setShow(false)
  const handleShow=()=>setShow(true)

  const productsCount=cart.items.reduce((sum,e)=>sum+=e.quantity,0)
  console.log(productsCount)
const checkout=async()=>{
await fetch("http://localhost:8080/checkout",{
  method:"POST",
  headers:{
    'Content-Type':`application/json`
  },
  body:JSON.stringify({
    items:cart.items
  })
})
  .then(response=>{
    return response.json();
  }).then(response=>{
    if(response.url){
      window.location.assign(response.url)
    }
  })

}
  return (
<>
<Navbar expand="sm">
    <Navbar.Brand href="/">ECommerce Store</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse className="justify-content-end">
      <Button onClick={handleShow}>Carts ({productsCount} Items)</Button>
    </Navbar.Collapse>


</Navbar>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Shopping Cart</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    {
      productsCount>0?
      <>
      <p>Items in Your Cart:</p>
       {cart.items.map((e,idx)=>(
       <CartProducts key={idx} product={e}/>
       ))}

       <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

      <Button variant="success" onClick={checkout}>Purchase Items</Button>
      </>

      :
      <>
      <h1>There are no Items in the Cart</h1></>
    }
    
  </Modal.Body>
   
</Modal>
</>
  )
}

export default NavbarComponent