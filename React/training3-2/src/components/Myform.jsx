import React from 'react'

class Myform extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        textValue:'',
        skill:'view',
        email:'',
        password:''
      }
    }
    changeTextValue = (event) => {
        this.setState({textValue: event.target.value})
    }
    changeEmail = (event) => {
        this.setState({email: event.target.value})
    }
    changePassword = (event) => {
        this.setState({password: event.target.value})
    }
    changeSkill = (event) => {
        this.setState({skill: event.target.value})
    }
    submitValues = (event) => {
        alert("Form is submitted"+ `${this.state.textValue},${this.state.email},${this.state.password},${this.state.skill}`)
    }
  render() {
    return (
      <div>
        <form>
            <label>FirstName:</label>
            <input type="text" value={this.state.textValue} onChange={this.changeTextValue}></input>
            <br/>
            <label>email</label>
            <input type="email" value={this.state.email} onChange={this.changeEmail}></input>
            <br/>
            <label>Password:</label>
            <input type="password" value={this.state.password} onChange={this.changePassword}></input>
            <label>Skill:</label>
            <select value={this.state.skill} onChange={this.changeSkill}>
                <option value="React">React</option>
                <option value="angular">angular</option>
                <option value="view">view</option>
            </select>
            <button type='submit' onChange={this.submitValues}>Submit</button>
        </form>
      </div>
    )
  }
}
export default Myform
