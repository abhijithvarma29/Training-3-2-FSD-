import React from 'react'

const PropsChildrenex = (props) => {
    console.log(props)
  return (
    <div>PropsChildrenex
        <h1>{props.username}</h1>
        <h1>{props.company}</h1>
        {
            props.children[1]
            // props.children.map((value)=>{
            //     return <h3>{value}</h3>
            // })
            // props.children
        }
    </div>
  )
}

export default PropsChildrenex