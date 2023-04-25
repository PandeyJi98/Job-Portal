import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../screens/Assets/CSS/StudentSignUp.css";

const Register = () => {

    const [inputFields, setInputFields] = useState({
        firstName:"",
        lastName:'',
        password:'',
        email:'',
    });
    const controleInputs =(e)=>{
        const {value,name} = e.target;
        // console.log("value",value,name);
        setInputFields({...inputFields,
            [name]:value})
        } 
    return (
        <>
            <div style={{ backgroundColor: "#295a8b", height: "800px", display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className="formBtn justify-content-center "
                    style={{ borderRadius: "50px" }}>
                    <form style={{ backgroundColor: "", height: "450px" }}>
                        <div className="text-center">
                            <h2>
                                <strong>Sign Up</strong>
                            </h2>
                        </div>
                        <span className="text-center">
                            <p>Create a Free account with your email</p>
                        </span>
                        <div className="pt-3">
                            <input type="text" id="name" name='firstName'  placeholder="First Name" required onChange={(e) => controleInputs(e)}></input>
                        </div>
                        <div>
                            <input type="text" id="name" name="lastName" placeholder="Last Name" required onChange={(e) => controleInputs(e)} ></input>
                        </div>
                        <div>
                            <input type="email" name='email' placeholder="eg: example@gmail.com" onChange={(e) => controleInputs(e)} />
                        </div>
                        <div>
                            <input type="password" name="password"  id="password"  placeholder="Create Password" onChange={(e) => controleInputs(e)}/>
                        </div>

                        <div style={{ textAlign: "center" }}>
                        <Link to ="/ExampleForm">
                            <button className="p-2" type="submit" value="Login">
                                Submit
                            </button>
                        </Link>
                        </div>
                    </form>
                    <div>
                        <p>
                            Already have an Account <a href="">Log in</a>
                        </p>
                    </div>
                </div>
                {/* <Link to ="/"> */}
            </div>
        </>
    );
};

export default Register;

{
    /*
  
   <div>
            <select id="education-detail-dropdown" value={educationDetail} onChange={studentEducationetails} required >
               <option value="">Select Your Higher Education Details</option>
                 <option value="graduation">Graduation
               </option>
               <option value="master">Master</option>
                <option value="others">Others</option>
                 </select>
            </div>
                   {
                 educationDetail && (
             <>
                 <div className='d-flex'>
                  <input style={{marginRight:'10px'}} type="text" id="college-name" value={universityDetails} placeholder='University Name' required onChange={universityName} />
                  <input type="text" id="college-name" value={collegeDetails} placeholder='College Name' required onChange={collegeName} />
                  </div>
                 <div className='d-flex'>
                  <input style={{marginRight:'10px'}} type='date' id="passing-year" value={passingYearDetails} placeholder='Passing Year' required onChange={passingYear} />
                  <input type="text" id="percentage" value={percentageDetails} placeholder='Percentage' onChange={percentage} />
              </div>
          </>
      )}
  
        <div>
        <select id="education-detail-dropdown" value={secondEducationDetail} onChange={secondStudentEducationetails} >
          <option value="">Select Your Second Higher Education Details</option>
          <option value="graduation">Graduation
          </option>
          <option value="master">Master</option>
          <option value="others">Others</option>
      </select>
        </div>
      {
        secondEducationDetail && (
          <>
              <div className='d-flex'>
                  <input style={{marginRight:'10px'}} type="text" id="college-name" value={secondUniversityDetails} placeholder='University Name' required onChange={secondUniversityName} />
                  <input type="text" id="college-name" value={secondCollegeDetails} placeholder='College Name' required onChange={secondCollegeName} />
              </div>
              <div className='d-flex'>
                  <input style={{marginRight:'10px'}} type="date" id="passing-year" value={secondPassingYearDetails} placeholder='Passing Year' required onChange={secondPassingYear} />
                  <input type="text" className='no-spinner' id="percentage" value={secondPercentageDetails} placeholder='Percentage/CGPA' onChange={secondPercentage} />
              </div>
          </>
      )}
  
         <div>
         <select id="skills-detail-dropdown" value={skillsType} onChange={skillsTypeDetails} >
          <option value="">Any Other Skills</option>
          <option value="technical">Technical</option>
          <option value="non-technical">Non Technical</option>
      </select>
         </div>
      {
        skillsType && (
          <>
              <div>
                  <textarea type='text' id='skills' value={skills} placeholder="Type Here" onChange={yourSkills}></textarea>
              </div>
             
          </>
      )}
        
          <div> 
          <select id="education-detail-dropdown"  required >
          <option value="">Any Prefered Location</option>
          <option value="graduation">Gurgaon
          </option>
          <option value="master">Delhi</option>
          <option value="others">Noida</option>
          </select>
          </div>
          
          <div>
          <input type='file' title='Upload Your RESUME/CV' name='resume' style={{display:''}} required ></input>
          </div>
          <div style={{textAlign:"center"}}>
              <button className="p-2" type="submit" value="Submit" onClick={{}}>Submit</button>
          </div>
  */
}
