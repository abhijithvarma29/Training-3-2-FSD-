import React from 'react'

class CBCPropex1 extends React.Component {
  render() {
    console.log(this.props.username);
    return (
      <div>CBCPropex1
        <h1>{this.props.username}+</h1>
      </div>
    )
  }
}
export default CBCPropex1
