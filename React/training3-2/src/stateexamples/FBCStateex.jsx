import React , {useState} from 'react'

const FBCStateex = () => {
    // const data = React.useState(100);
    // console.log(data[0]);
    // console.log(data[1]);

    const [value,setValue] = useState("MRU");
    console.log(value);
    let changeName = ()=>{
        setValue("Malla Reddy University");
    }
    // const [count,setCount] = useState(0);
    // let increment = ()=>{
    //     setCount(count + 1);
    // }
    // let decrement = ()=>{
    //     setCount(count - 1);
    // }
    // let reset = ()=>{
    //     setCount(0);
    // }
  return (
    <div>

        <h1>{value}</h1>
        <button onClick={changeName}>Change State</button>
        {/* <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button> */}
    </div>
  )
}

export default FBCStateex