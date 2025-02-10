import React, { useEffect, useState } from 'react'

const ExUseEffect = () => {
    // const [count,setCount] = useState(0);
    // !!!!!!
    // useEffect(()=>{
    //     // setCount(1000);
    //     document.write = "MRU";
    //     setTimeout(()=>{
    //         setCount(1000);
    //     },4000)
    // })
    // !!!!!!
    // ! Fetching using useEffect
    const[users,setUsers] = useState([]);
    console.log(users);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json().then(data=>{
            // console.log(data);
            setUsers(data);
        }))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>useEffect Example
        {/* <h1>{count}</h1> */}
        {
            users.map((user, i)=>{
                return(
                    // * use index (using "key:index" in div) to prevent repetitive output in cmd.
                    // <>
                    //     <h1>{user.name}</h1>
                    //     <h3>{user.email}</h3>
                    // </>
                    // ! OR
                    // * "React.Fragment" is used to prevent unnecessary divs.
                    <React.Fragment key={i}>
                        <h1>{user.name}</h1>
                        <h3>{user.email}</h3>
                    </React.Fragment>
                )
            })
        }
    </div>
  )
}

export default ExUseEffect


// let obj = {
//     a: 10,
//     b: 20,
//     c: 30
// }
// console.log(obj.a)
// console.log(obj.b)
//! Object Destructuring
// let {a,b,c} = obj;
// console.log(a);
// console.log(b);
// console.log(c);