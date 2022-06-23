import React from 'react'
import {DATA} from "../Data"
import { NavLink } from 'react-router-dom'
export const Product = () => {

  const cardItem=(Item)=>{
    return (
      <div className="card mb-5 py-4" key={Item.id} style={{width: "18rem"}}>
  <img src={Item.img} class="card-img-top" alt="..."/>
  <div className="card-body text-center">
    <h5 className="card-title">{Item.title}</h5>
    <p className="lead">$ {Item.price}</p>
    <NavLink to={`/products/${Item.id}`} className="btn btn-outline-primary">BuY Now</NavLink>
  </div>
</div>
    );
  }
  return (
    <div> 
     <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Product</h1>
          <hr />
        </div>
      </div>
     </div>
     <div className="container" >
      <div className="row justify-content-around">
        {DATA.map(cardItem)}
      </div>
     </div>
    </div>
  )
}
