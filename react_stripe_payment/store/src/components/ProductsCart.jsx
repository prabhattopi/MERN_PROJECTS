import React, { useContext } from 'react'
import {Card,Button,Form,Row,Col} from "react-bootstrap"
import { CartContext } from '../context/CartContext'


const ProductsCart = ({product}) => {
    const {title,id,price}=product
    const cart=useContext(CartContext)
    const productQuantity=cart.getProuductQuantity(id)
  return (
   <>
    <Card>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>${price}</Card.Text>
            {
                productQuantity>0?
                <>
                 <Form as={Row}>
                    <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                    <Col sm="6">
                        <Button sm="6" onClick={()=>cart.addOneToCart(id)} className="mx-2">+</Button>
                        <Button sm="6" onClick={()=>cart.removeOneFromCart(id)} className="mx-2">-</Button>
                    </Col>

                 </Form>
                 <Button variant="danger" onClick={()=>cart.deleteFromCart(id)} className="my-2">Remove From Cart</Button>
                </>
                :<Button variant="primary" onClick={()=>cart.addOneToCart(id)}>Add To Cart</Button>
            }
           
      
        </Card.Body>
    </Card>
   </>
  )
}

export default ProductsCart