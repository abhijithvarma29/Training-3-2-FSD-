import React, { useRef , useEffect } from 'react'

const Refexamples = () => {
    const eleref = useRef();
    // console.log(eleref);
    useEffect(()=>{
        eleref.current.style.color="red";
    },[]);
  return (
    <div>
        <h1 ref={eleref}>Refexamples</h1>
    </div>
  )
}

export default Refexamples