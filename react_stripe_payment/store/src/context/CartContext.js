import { createContext, useState } from "react";

import { productArray,getProductData } from "../productStore";

export const CartContext = createContext({
  items: [],
  getProuductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProduct, setCartProduct] = useState([]);
  //[{ id:1,quantity:2}]

  function getProuductQuantity(id) {
    const quantity = cartProduct.find((e) => e.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }


  const addOneToCart = (id) => {
    const quantity=getProuductQuantity(id)

    if(quantity===0){
        setCartProduct([...cartProduct,{
            id:id,
            quantity:1
        }])
    }
    else{
        setCartProduct(cartProduct.map(e=>e.id===id?{...e,quantity:e.quantity+1}:e))

    }

      
  };
  const removeOneFromCart = (id) => {
  const quantity=getProuductQuantity(id)
  if(quantity===1){
    deleteFromCart(id)
  }
  else{
    setCartProduct(cartProduct.map(e=>e.id===id?{...e,quantity:e.quantity-1}:e))
  }
  };
  const deleteFromCart = (id) => {

    setCartProduct(
       cartProduct=>cartProduct.filter(e=>e.id!==id)
    )
   
  };
  const getTotalCost = () => {
    let totalCost=0
    cartProduct.map((e)=>{
        const productData=getProductData(e.id)
        totalCost+=(productData.price*e.quantity)
    })
  return totalCost
  };

  const contextValue = {
    items: cartProduct,
    getProuductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
//CODE DOWN HERE

//context (cart,addToCart,removeCart)

//Provider->gives your React app access to all the things
