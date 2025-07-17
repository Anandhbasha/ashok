import React, { createContext, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Allproducts from './Pages/Allproducts/Allproducts'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'


const btnValues = ["checkout","proceedtopay","placeoreder"]

export const passingValue = createContext()
const App = () => {
  const [count,setCount] = useState(0)
  const handleCount = ()=>{
    setCount((prev)=>++prev)
  }
  return (
    <BrowserRouter>
      <passingValue.Provider value={{btnValues,count,setCount}}>
        <div className='App'>
        <Navbar/>
      </div>
      <button onClick={handleCount}>{count}</button>
      <Routes>
        <Route path='/' element={<Allproducts/>}></Route>
        <Route path='/mens' element={<Mens/>}></Route>
        <Route path='/womens' element={<Womens/>}></Route>
      </Routes>
      </passingValue.Provider>
    </BrowserRouter>
  )
}

export default App