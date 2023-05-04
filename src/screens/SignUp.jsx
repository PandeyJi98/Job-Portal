import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../screens/Assets/CSS/SignUp.css"

const SignUp = () => {

    const navigate = useNavigate()
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const registerUser =async (e)=>{
      console.log(e)
      e.preventDefault()
    // ---------------
    
    try{ 
    const response = await axios.post("http://localhost:5000/api/register",
            JSON.stringify({ name,email,password }),
            // console.log('thsis is working')
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
        console.log('this is woring')
        console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
        // const accessToken = response?.data?.accessToken;
        // const roles = response?.data?.roles;
        // setAuth({ user, pwd, roles, accessToken });
        setName('');
        setEmail('');
        setPassword('');
        // setSuccess(true);
    }catch(err){
        console.log(err)
    }
 }
  return (
    <div className='register_section'>
        <div className='register_container'>
            <form onSubmit={registerUser} className="registerForm" style={{width:'300px', height:'800px'}} >
                {/* <div>
                    <input ref={nameRef} type="text" value= {name} onChange={(e)=>setName(e.target.value)} placeholder="full name" />
                </div>
                <div>
                    <input ref={emailRef} type="email" value= {email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <input ref = {passwordRef} type="password" value= {password} placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="text"  />
                </div> 
                <div>
                    <input type="submit" value="Register" />
                </div>   */}


		<h1>Student Job and Internship Signup Form</h1>

		<label for="name">Name:</label>
		<input type="text" id="name" name="name" required/>

		<label for="email">Email:</label>
		<input type="email" id="email" name="email" required />

		<label for="phone">Phone:</label>
		<input type="text" id="phone" name="phone" required/>
        
		{/* <label for="higher_education">Higher Education:</label> */}
		{/* <input type="text" id="higher_education" name="higher_education" required /> */}

        <label for="degree-select">Degree:</label>
  <select id="degree-select" name="degree">
    <option value="masters">Master's</option>
    <option value="graduation">Graduation</option>
    <option value="others">Others</option>
  </select>
  <br/><br/>
  <label for="college-name">College Name:</label>
  <input type="text" id="college-name" name="college_name"/>
  <br/><br/>
  <label for="passing-year">Passing Year:</label>
  <input type="text" id="passing-year" name="passing_year"/>
  <br/><br/>
  <label for="percentage">Percentage:</label>
  <input type="text" id="percentage" name="percentage"/>
  <br/><br/>

		{/* <label for="lower_education">Lower Education:</label> */}
		{/* <input type="text" id="lower_education" name="lower_education" required/> */}


		<label for="resume">Resume:</label>
		<input type="file" id="resume" name="resume" required />

		<label for="message">Message:</label>
		<textarea id="message" name="message"></textarea>

		<input type="submit" value="Submit" />
	

            </form>
        </div>
    </div>
    // </div>

  )
}

export default SignUp;



//   const response = await fetch("http://localhost:5000/api/register",{
    //     method:'POST',
    //     headers:{
    //       'Content_Type':'application/json',
    //     },
    //     body:JSON.stringify({
    //       name,email,password
    //     })
    //   })
    //   const data = await response.json()
    //   console.log(data)
    //   if(data.status ==='ok'){
    //     navigate('/login')
    //   }