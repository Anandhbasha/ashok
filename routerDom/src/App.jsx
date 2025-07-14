import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
      </div>
    </BrowserRouter>
  )
}

export default App