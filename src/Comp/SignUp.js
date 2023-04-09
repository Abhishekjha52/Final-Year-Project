import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () =>{
        Axios.post("http://localhost:3002/signUp", {
            firstName: firstName,
            lastName: lastName, 
            email: email,
            password: password
        })
    }
  return (
    <div className='main-div1'>
        <h1>Sign Up</h1>
        <div>
            <label>First Name : </label>
            <input type="text" onChange={(e)=>{setFirstName(e.target.value)}} placeholder='Enter your first name'/>
        </div>
        <div>
            <label>Last Name : </label>
            <input type="text" onChange={(e)=>{setLastName(e.target.value)}} placeholder='Enter your last name'/>
        </div>
        <div>
            <label>Email : </label>
            <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your email'/>
        </div>
        <div>
            <label>Password : </label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your password'/>
        </div>
        <div>
            <button onClick={() => {handleSubmit()}}>SUBMIT</button>
        </div>
    
        <Link to='/signIn'>Already have an account?</Link>
    </div>
  )
}

export default SignUp