import React, { useContext } from 'react'
import { GlobalDataProvider } from './ContextAPI'

const ContextC3 = () => {
    const data = useContext(GlobalDataProvider);
    console.log(data);
  return (
    <div>ContextC3
        <h1>{data.count}</h1>
        <button onClick={incr}></button>
    </div>
  )
}

export default ContextC3