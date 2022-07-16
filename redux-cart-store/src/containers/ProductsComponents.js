import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { Link } from 'react-router-dom'
export const ProductsComponents = () => {
    const product=useSelector(state=>state.allProducts.products)
    // const {id,title}=product;
    const renderList=product.map((e,i)=>(
        <div key={e.id} className='ui four column wide'>
            <Link to={`/product/${e.id}`}>
        <div className='ui link cards'>
            <div className="card">
                <div className="image">
                    <img src={e.image} alt={e.titel} />
                </div>
                <div className="content">
                    <div className="header">
                       {e.title}
                    </div>
                    <div className='meta price'>$ {e.price}</div>
                    <div className="meta">{e.category}</div>
                </div>
            </div>
        </div>
        </Link>
    </div>

    ))
  return (
    <>
    {renderList}
    </>
   
  )
}
