import React from 'react'

class CBCStateex extends React.Component {
    constructor(){
        super();
        this.state={
            // username:"Abhi",
            count:0
        };
    }
    // changeName=()=>{
    //     this.setState({username:"Abhi was here!"});
    // }
    increment=()=>{
        this.setState({count:this.state.count+1});
    }
    decrement=()=>{
        this.setState({count:this.state.count-1});
    }
    reset=()=>{
        this.setState({count:0});
    }
  render() {
    console.log(this.state)
    return (
      <div>
        {/* CBCStateex */}
        {/* <h1>{this.state.username}</h1>
        <button onClick={this.changeName}>Update the state</button> */}
        <h1>{this.state.count}</h1>
        <div>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}
export default CBCStateex
