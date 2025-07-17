import React, { createContext, useContext } from 'react'
import Mens from '../Mens/Mens'
import { passingValue } from '../../App'



const Allproducts = () => {
  const {btnValues,count,setCount} = useContext(passingValue)
  const handleCount = ()=>{
    setCount((prev)=>++prev)
  }
  return (
    <div className='Allproducts'>
        All products
        <button onClick={handleCount}>{count}</button>
        {btnValues.map((item)=>(
          <button>{item}</button>
        ))}
    </div>
    
  )
}

export default Allproducts