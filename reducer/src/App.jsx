import React, { useReducer, useState } from 'react'

const App = () => {
  // let [count,setCount] = useState(0)
  // let [bg,setBg] = useState("dark")
  const reducer = (state,action)=>{
    switch(action.type){
      case "increment":
        return ({...state,count:state.count+1})
      case "bgChange":
        return ({...state,bg:state.bg==="dark"?"light":"dark"})
    }

  }
  let [state,dispatch] = useReducer(reducer,{count:0,bg:"dark"})
  return (
    <div className='App'>
      <button onClick={()=>{dispatch({type:"increment"})}}>count{state.count}</button>
      <button onClick={()=>{dispatch({type:"bgChange"})}}>{state.bg}</button>
    </div>
  )
}

export default App