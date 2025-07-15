import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Allproducts from './Pages/Allproducts/Allproducts'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Allproducts/>}></Route>
        <Route path='/mens' element={<Mens/>}></Route>
        <Route path='/womens' element={<Womens/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App