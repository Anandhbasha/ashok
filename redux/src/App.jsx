import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeColor, decrement, increment } from './Slice/Slice'

const App = () => {
  const count = useSelector((state)=>state.app.count)
  const bg = useSelector((state)=>state.app.bg)
  const disptach = useDispatch()
  return (
    <div className='App' style={{backgroundColor:bg,height:"100vh",textAlign:"center",padding:"2rem"}}>
      <h1>Redux Counter</h1>
      <h2>Count :{count}</h2>
      <button onClick={()=>disptach(increment())}>increment</button>
      <button onClick={()=>disptach(decrement())}>decrement</button>
      <button onClick={()=>disptach(changeColor("lightblue"))}>setLightBlue</button>
      <button onClick={()=>disptach(changeColor("red"))}>Change to Red</button>
      <button onClick={()=>disptach(changeColor("green"))}>Change to green</button>
    </div>
  )
}

export default App