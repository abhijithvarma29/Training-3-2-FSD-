import React from 'react'

const FBCPropex = (props) => {
    console.log(props);
    if(props.isLoggedIn == true){
        return(
            <div>
                <h1>Welcome {props.username}</h1>
                {
                    props.hobbies.map((value)=>{
                        return <li>{value}</li>
                    })
                }
            </div>
        )
    }else{
        return <h1>Please Login first</h1>
    }
}
export default FBCPropex