import React from 'react'
import {Row,Col} from "react-bootstrap"
import { productArray } from '../productStore'

const Store = () => {
  return (
    <>
    <h1 align="center" className='p-3'>Welcome to the Store!</h1>
    <Row xs={1} md={3} className="g-4">
        {
        productArray?.map((e)=>(
            <Col align="center" key={e.id}>
            <h1>{e.title}</h1>
        </Col>
        ))
        }

    </Row>

    </>
    
  )
}

export default Store