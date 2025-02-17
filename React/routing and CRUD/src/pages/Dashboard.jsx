import React, { useState } from 'react'
import Styles from './form.module.css'
const Dashboard = () => {
  const[username,setUsername] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[gender,setGender] = useState('')
  const[address,setAddress] = useState('')
  const[file,setFile] = useState('')
  const[country,setCountry] = useState('')

  //! Gender Selection
  let handleGenderChange = (e) => {
    // console.log(e);
    setGender(e.target.value)
  }

  //! Form submit
  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, email, password, gender, address, file, country)
  }

  return (
    <div className={Styles.formBlock}>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='enter username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <br/>
        <input type='email' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <input type='password' placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <input type='radio' name='gender' value="male" onChange={handleGenderChange} checked={gender == 'male'}/><label htmlFor="">Male</label>
        <input type='radio' name='gender' value="female" onChange={handleGenderChange} checked={gender == 'female'}/><label htmlFor="">Female</label>
        <input type='radio' name='gender' value="others" onChange={handleGenderChange} checked={gender == 'others'}/><label htmlFor="">Others</label>
        <br/>
        <textarea id='address' cols="30" rows="5" value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>
        <br/>
        <input type='file' value={file} onChange={(e)=>setFile(e.target.value)}/>
        <br/>
        <select name='' id='country' value={country} onChange={(e)=>setCountry(e.target.value)}>
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="australia">Australia</option>
        </select>
        <br/>
        <input type='submit' value="SignUp"/>
      </form>
    </div>
  )
}

export default Dashboard