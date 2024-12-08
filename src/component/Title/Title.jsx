import React, { useEffect, useRef } from 'react'
import './Title.css'
import Cards_data from '../../assets/cards/Cards_data'
function Title({title,category}) {
 const scroll= useRef()
  function handleweel(e){
e.prevetnDefault()
scroll.current.scrollLeft +=e.deltaY
   }
 useEffect(()=>{
    scroll.current.addEventListener('wheel',handleweel)
 },[])
  return (
    <div className='title'>
      <h2>{title?title:"Popular On Netflix"}</h2>
      <div className="cart_list">
         {Cards_data.map((item,index)=>{
          return(<div className="cart" key={index} ref={scroll}>
          <img src={item.image} alt="" />
          <p>{item.name}</p>
          </div>
          )
         })}
      </div>
    </div>
  )
}

export default Title