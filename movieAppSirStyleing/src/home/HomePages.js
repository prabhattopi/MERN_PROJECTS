import React, { useState } from 'react'
import { Homes } from '../components/Homes/Homes/Homes'
import { Trending } from '../components/trending/Trending'
import { Upcoming } from '../components/Upcoming/Upcoming'


export const HomePages = () => {

  const [items,setItems]=useState(upcome)
  const [item,setItem]=useState(lastest)
  const [rec,setRec]=useState(recommended)
  return (
    <>
    <Homes/>

    <Upcoming items={items} title="Upcoming Movies"/>
    <Upcoming items={item} title="Upcoming Latest"/>
    <Trending/>
    <Upcoming items={rec} title="Recomended Movies"/>
    </>
  )
}
