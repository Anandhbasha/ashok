// import React from 'react'

// const Button = () => {
//   return (
//     <div className='Button'>
//         <button>Click</button>
//         <button>Login</button>
//         <button>Submit</button>
//     </div>
//   )
// }

// export default Button

import React from 'react'

const Button = ({value}) => {
  return (
    <div className='Button'>
        <button>{value}</button>
    </div>
  )
}

export default Button