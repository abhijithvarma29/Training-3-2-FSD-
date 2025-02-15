import React from 'react'
import form from './form.css'

const Form1 = () => {
  return (
    <div>
        <form>
            <div>
                <label for='username'>Username</label>
                <input type="text" id='username' name="username"/>
            </div>
            <div>
                <label for='email'>Email</label>
                <input type="email" id='email' name="email"/>
            </div>
            <div>
                <label for='pass'>Password</label>
                <input type="password" id='pass' name="password"/>
            </div>
            <div>
                <label for='gender'>Gender</label>
                <input type="radio" name="gender" value="male"/> Male
                <input type="radio" name="gender" value="female"/> Female
            </div>
            <div>
                <label for='add'>Address</label>
                <input type="textarea" id='add' name="address"/>
            </div>
            <div>
                <label for='file'>Upload</label>
                <input type="file" id='file' name="upload"/>
            </div>
            <div>
                <label for='country'>Country</label>
                <select name="country">
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form1