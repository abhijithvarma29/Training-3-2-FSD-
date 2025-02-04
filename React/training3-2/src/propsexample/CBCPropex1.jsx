import React from 'react'

class CBCPropex1 extends React.Component {
  render() {
    console.log(this);    
    return (
      <div>CBCPropex1
        <h1>{this.props.username}</h1>
        <h1>{this.props.age}</h1>
        <div>{this.props.desig[0]}</div>
        <h1>{this.props.userdetails.area}</h1>

        <button onClick={this.props.sendFun}>Click it</button>
      </div>
    )
  }
}
export default CBCPropex1
