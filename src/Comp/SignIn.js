import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn=()=>{
        Axios.post("http://localhost:3002/signIn", {
            email: email,
            password: password
        })
    }
  return (
    <div className='main-div'>
        <h1>Sign In</h1>
        <div>
            <label>Email : </label>
            <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your email'/>
        </div><br/>
        <div>
            <label>Password : </label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your password'/>
        </div><br/>
        <div>
            <button onClick={() => {handleSignIn()}}>LOGIN</button>
        </div><br/>
        <Link to='/signUp'>Don't have an account?</Link>
    </div>
  )
}

export default SignIn