import React from 'react'
import {Card,Button,Form,Row,Col} from "react-bootstrap"


const ProductsCart = ({product}) => {
    const {title,id,price}=product
  return (
   <>
    <Card>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>${price}</Card.Text>
            <Button variant="primary">Add To Cart</Button>
      
        </Card.Body>
    </Card>
   </>
  )
}

export default ProductsCart