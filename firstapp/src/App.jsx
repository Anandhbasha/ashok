// // const App = ()=>{
// //   return(
// //     <div className="app">
// //       <h1>Hello</h1>
// //       <h1>Welcome</h1>
// //     </div>
// //   )
// // }
// // export default App


// // const App = () => {
// //   const btnValues = ["Click","Login","Submit"]
// //   return (
// //     <div className="App">
// //       {btnValues.map((item)=>(
// //         <button>{item}</button>
// //       ))}
// //       {/* <button></button>
// //       <button></button> */}
// //     </div>
// //   )
// // }

// // export default App

// import React from 'react'
// import Button from './Button'

// const App = () => {
//   const btnValues = ["Click","Login","Submit"]
//   return (
//     <div className='App'>
//       {btnValues.map((item)=>(
//         <Button value={item} />
//       ))}
//     </div>
//   )
// }

// export default App

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  // let count = 0
  let[count,setCount] = useState(0)
  const handleClick = ()=>{
    setCount(++count)
    console.log(count);    
  }
  useEffect(()=>{
    const fetchData = async()=>{
      let res = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
      console.log(res.data);      
    }
    fetchData()
  },[count])
  

  return (
    <div className='App'>
        <button onClick={handleClick}>Count{count}</button>
    </div>
  )
}

export default App