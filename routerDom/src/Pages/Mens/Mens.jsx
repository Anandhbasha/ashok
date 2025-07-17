import React, { useContext } from 'react'
import { passingValue } from '../../App'

const Mens = ({value}) => {
  const {btnValues} = useContext(passingValue)
  return (
    <div className='Mens'>
      {
        btnValues.map((item)=>(
          <button>{item}</button>
        ))
      }
    </div>
  )
}

export default Mens