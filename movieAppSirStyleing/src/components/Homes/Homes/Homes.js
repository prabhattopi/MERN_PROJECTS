import React, { useState } from 'react'
import { homeData } from '../../../dummydata'
import { Home } from './Home'
import "./home.css"

export const Homes = () => {
  const [items, setItems] = useState(homeData)
  return (
    <>
    <section className='home'>
      <Home items={items}/>

    </section>
    <div className="margin"></div>
    </>
  )
}
