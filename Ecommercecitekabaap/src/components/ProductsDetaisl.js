import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { DATA } from "../Data";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions";
export const ProductsDetaisl = () => {
  const[cartBtn, setBtn] = useState(false);
  const { id } = useParams();
  const proDetials = DATA.filter((x) => x.id == id);
  const product = proDetials[0];
  const dispatch=useDispatch()
  
  const handlecart = (product) => {
    if(cartBtn==false){
     dispatch(addItem(product))

      setBtn(true)
    }
    else{
      dispatch(delItem(product))
      setBtn(false)
    }
  
  };

  return (
    <div>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justitfy-content-center mx-auto product">
            <img
              src={product.img}
              alt={product.title}
              height="400px"
              width="500px"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">$ {product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button
              onClick={() => handlecart(product)}
              className="btn btn-outline-primary my-5"
            >
              {!cartBtn?"Add to cart":"Remove To Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
