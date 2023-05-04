import React, { useState } from 'react';
import "../screens/Assets/CSS/StudentSignUp.css"

const RegistrationForm = () => {
    const [educationDetail, setEducationDetail] = useState('');
    const [universityDetails, setUniversityDetails] = useState('');
    const [collegeDetails, setCollegeDetails] = useState('');
    const [passingYearDetails, setPassingYearDetails] = useState('');
    const [percentageDetails, setPercentageDetails] = useState('');
   
    const studentEducationetails = (event) => {
        setEducationDetail(event.target.value);
    };

    const universityName = (event) => {
        setUniversityDetails(event.target.value);
    };

    const collegeName = (event) => {
        setCollegeDetails(event.target.value);
    };

    const passingYear = (event) => {
        setPassingYearDetails(event.target.value);
    };

    const percentage = (event) => {
        setPercentageDetails(event.target.value);
    };

    // Second Highest Education hooks 
    const [secondEducationDetail, setSecondEducationDetail] = useState('');
    const [secondUniversityDetails, setSecondUniversityDetails] = useState('');
    const [secondCollegeDetails, setSecondCollegeDetails] = useState('');
    const [secondPassingYearDetails, setSecondPassingYearDetails] = useState('');
    const [secondPercentageDetails, setSecondPercentageDetails] = useState('');

    const secondStudentEducationetails = (event) =>{
        setSecondEducationDetail(event.target.value)
    }
    const secondUniversityName = (event) => {
        setSecondUniversityDetails(event.target.value);
    };
    const secondCollegeName = (event) => {
        setSecondCollegeDetails(event.target.value);
    };
    const secondPassingYear = (event) => {
        setSecondPassingYearDetails(event.target.value);
    };
    const secondPercentage = (event) => {
        setSecondPercentageDetails(event.target.value);
    };
   

    // skills Hooks and Call
       const[skills, setSkills] =useState('');
      const [skillsType, setSkillstype] = useState('');

      const yourSkills = (event) =>{
        setSkills(event.target.value)
    }

        const skillsTypeDetails = (event) =>{
        setSkillstype(event.target.value)
    }

    return (
        <>
        
           <div style={{backgroundColor:'#295a8b'}}>
           <div className='formBtn  m-auto' >
           <h2>Student SignUp Form</h2>

              <form style={{backgroundColor:''}}>
                
                <div className='pt-3'> 
               <input type='text' id='name' placeholder='First Name' required></input>
               </div>
               <div>
              <input type='text' id='name' placeholder='Last Name' required></input> 
             </div>
             <div>
                <input type='email' placeholder='eg: example@gmail.com' />
             </div>
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
        <input type='file' title='Upload Your RESUME/CV' id='resume' name='resume' style={{display:''}} required ></input>
        </div>
        <div style={{textAlign:"center"}}>
            <button className="p-2" type="submit" value="Submit" onClick={{}}>Submit</button>
        </div>
      </form>
        </div>
   </div>
        </>
    );
}

export default RegistrationForm;


