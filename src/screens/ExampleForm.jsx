import React, { useState } from 'react';

const ExampleF = () => {

  const submit = (event) => {
    event.preventDefault();
    console.log("submit",inputFields)
    // Your form submission logic goes here
  };


  const [inputFields, setInputFields] = useState({
    firstName:"",
    lastName:'',
    phoneNumber:'',
    location:'',
    resume:'',
    gender:'',
    educationDetail:'',
    boardDetails:'',
    schoolDetails:'',
    universityDetails:'',
    collegeDetails:'',
    startingYearDetails:'',
    degree:'',
    passingYearDetails:'',
    percentageDetails:'',
    secondEducationDetail:'',
    secondBoardDetails:'',
    secondSchoolDetails:'',
    secondUniversityDetails:'',
    secondCollegeDetails:'',
    secondDegree:'',
    secondStartingYearDetails:'',
    secondPassingYearDetails:'',
    secondPercentageDetails:''

});
const handleInputs =(e)=>{
const {value,name} = e.target;
// console.log("value",value,name);
setInputFields({...inputFields,
    [name]:value})
} 

console.log("inputFields", inputFields);


// .................................................
console.log("inputFields.educationDetail" , inputFields.e )

// ..................................................
  return (
  <div style={{backgroundColor:'#295a8b'}}>
      <div className='formBtn m-auto'>

   <form >
<div className='d-flex'>
  <input style={{marginRight:'10px'}} type="text" id="firstName" name="firstName" placeholder='First Name' value={inputFields.firstName} onChange={(e) => handleInputs(e)} />
  <input type="text" id="lastName" name="lastName" placeholder='Last Name' value={inputFields.lastName} onChange={(e) => handleInputs(e)} />
  </div>

  <input type="tel" id="phoneNumber" name='phoneNumber' placeholder='Phone Number' value={inputFields.phoneNumber} onChange={(e) => handleInputs(e)} />


  <input type="text" id="location" name='location' placeholder='Enter Your Permanent Address' value={inputFields.location} onChange={(e) => handleInputs(e)} />
    <select id="gender" name='gender' value={inputFields.gender} onChange={(e) => handleInputs(e)} >
      <option value="">Select Your Gender Type</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="others">Others</option>
      </select>

  <div>
    <select id="education-detail-dropdown" name='educationDetail' value={inputFields.educationDetail} onChange={(e) => handleInputs(e)}  required >
      <option value="">Select Your Higher Education Details</option>
      <option value="Intermediate">Intermediate </option>
      <option value="graduation">Graduation </option>
      <option value="master">Master</option>
      <option value="others">Others</option>
    </select>
  </div>


  {
    inputFields.educationDetail=="Intermediate" ?
    (
    <>
      <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type="text" id="board-name" name='boardyDetails' value={inputFields.boardDetails} placeholder='Board Name' required onChange={(e) => handleInputs(e)} />
        <input  style={{marginRight:'10px'}} type="text" id="school-name" name='schoolDetails' value={inputFields.schoolDetails} placeholder='School Name' required onChange={(e) => handleInputs(e)} />

        <input type='text' placeholder='Stream' id="degree" name='degree' value={inputFields.degree} onChange={(e) => handleInputs(e)}/>
      
      </div>
      <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type='text' id="starting-year" name='startingYearDetails' value={inputFields.startingYearDetails} placeholder='Starting Year' required onChange={(e) => handleInputs(e)} />
  
        <input style={{ marginRight: '10px' }} type='text' id="passing-year" name='passingYearDetails' value={inputFields.passingYearDetails} placeholder='Passing Year' required onChange={(e) => handleInputs(e)} />
        <input type="text" id="percentage" name='percentagedetails' value={inputFields.percentageDetails} placeholder='Percentage' onChange={(e) => handleInputs(e)} />
      </div>
    </>
    ):
    (<>
      
    </>)
    }
    {inputFields.educationDetail=="graduation" || inputFields.educationDetail=="master" || inputFields.educationDetail=="others" ? <>
       <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type="text" id="college-name" name='universityDetails' value={inputFields.universityDetails} placeholder='University Name' required onChange={(e) => handleInputs(e)} />
        <input style={{ marginRight: '10px' }} type="text" id="college-name" name='collegeName' value={inputFields.collegeDetails} placeholder='College Name' required onChange={(e) => handleInputs(e)} />
        <input type='text' placeholder='Course Name' id="degree" name='degree' value={inputFields.degree} onChange={(e) => handleInputs(e)}/>
         
      </div>
      <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type='text' id="starting-year" name='startingYearDetails' value={inputFields.startingYearDetails} placeholder='Starting Year' required onChange={(e) => handleInputs(e)} />
  
        <input style={{ marginRight: '10px' }} type='text' id="passing-year" name='passingYearDetails' value={inputFields.passingYearDetails} placeholder='Passing Year' required onChange={(e) => handleInputs(e)} />
        <input type="text" id="percentage" name='percentagedetails' value={inputFields.percentageDetails} placeholder='Percentage' onChange={(e) => handleInputs(e)} />
      </div>
    </> : <></>}

    {/* {inputFields.educationDetail==="master" ? <>
       <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type="text" id="college-name" name='universityDetails' value={inputFields.universityDetails} placeholder='University Name' required onChange={(e) => handleInputs(e)} />
        <input style={{ marginRight: '10px' }} type="text" id="college-name" name='collegeName' value={inputFields.collegeDetails} placeholder='College Name' required onChange={(e) => handleInputs(e)} />
        <input type='text' placeholder='Course Name' id="degree" name='degree' value={inputFields.degree} onChange={(e) => handleInputs(e)}/>
         
      </div>
      <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type='text' id="starting-year" name='startingYearDetails' value={inputFields.startingYearDetails} placeholder='Starting Year' required onChange={(e) => handleInputs(e)} />
  
        <input style={{ marginRight: '10px' }} type='text' id="passing-year" name='passingYearDetails' value={inputFields.passingYearDetails} placeholder='Passing Year' required onChange={(e) => handleInputs(e)} />
        <input type="text" id="percentage" name='percentagedetails' value={inputFields.percentageDetails} placeholder='Percentage' onChange={(e) => handleInputs(e)} />
      </div>
    </> : <></>}

    {inputFields.educationDetail==="others" ? <>
       <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type="text" id="college-name" name='universityDetails' value={inputFields.universityDetails} placeholder='University Name' required onChange={(e) => handleInputs(e)} />
        <input style={{ marginRight: '10px' }} type="text" id="college-name" name='collegeName' value={inputFields.collegeDetails} placeholder='College Name' required onChange={(e) => handleInputs(e)} />
        <input type='text' placeholder='Course Name' id="degree" name='degree' value={inputFields.degree} onChange={(e) => handleInputs(e)}/>
      </div>
      <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type='text' id="starting-year" name='startingYearDetails' value={inputFields.startingYearDetails} placeholder='Starting Year' required onChange={(e) => handleInputs(e)} />
  
        <input style={{ marginRight: '10px' }} type='text' id="passing-year" name='passingYearDetails' value={inputFields.passingYearDetails} placeholder='Passing Year' required onChange={(e) => handleInputs(e)} />
        <input type="text" id="percentage" name='percentagedetails' value={inputFields.percentageDetails} placeholder='Percentage' onChange={(e) => handleInputs(e)} />
      </div>
    </> : <></>}
     */}

  <div>
    <select id="education-detail-dropdown" name='secondEducationDetail' value={inputFields.secondEducationDetail} onChange={(e) => handleInputs(e)} >
      <option value="">Select Your Second Higher Education Details</option>
      <option value="Intermediate">Intermediate </option>
      <option value="graduation">Graduation</option>
      <option value="master">Master</option>
      <option value="others">Others</option>
    </select>
  </div>
  {
   inputFields.secondEducationDetail == 'Intermediate'?  
      <>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type="text" id="college-name"name='secondBoardDetails' value={inputFields.secondBoardDetails} placeholder='Board Name' required onChange={(e) => handleInputs(e)} />
          <input style={{marginRight:'10px'}} type="text" id="college-name" name='secondSchoolDetails' value={inputFields.secondSchoolDetails} placeholder='School Name' required onChange={(e) => handleInputs(e)} />

          <select id="degree" name='secondDegree' value={inputFields.secondDegree} onChange={(e) => handleInputs(e)}>
           <option value="">Stream</option>
           <option value="Science">Science</option>
           <option value="Commerce">Commerce</option>
          <option value="Arts">Arts</option>
          </select>

        </div>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type='text' id="starting-year" name='secondStartingYearDetails' value={inputFields.secondStartingYearDetails} placeholder='Starting Year' required onChange={(e) => handleInputs(e)} />

          <input style={{ marginRight: '10px' }} type='text' id="passing-year" name='secondPassingYearDetails' value={inputFields.secondPassingYearDetails} placeholder='Passing Year' required onChange={(e) => handleInputs(e)} />
          <input type="text" className='no-spinner' id="percentage" name='secondPercentageDetails' value={inputFields.secondPercentageDetails} placeholder='Percentage/CGPA' onChange={(e) => handleInputs(e)} />
        </div>
      </> : 
      
      <></>}

  {
   inputFields.secondEducationDetail == 'graduation' || inputFields.secondEducationDetail == 'master' || inputFields.secondEducationDetail == 'others'?  
      <>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type="text" id="college-name" name='secondUniversityDetails' value={inputFields.secondUniversityDetails} placeholder='University Name' required onChange={(e) => handleInputs(e)} />
          <input style={{ marginRight: '10px' }} type="text" id="college-name" name='secondCollegeDetails' value={inputFields.secondCollegeDetails} placeholder='College Name' required onChange={(e) => handleInputs(e)} />

          <input type='text' id="degree" name='secondDegree' placeholder='Course Name' value={inputFields.secondDegree} onChange={(e) => handleInputs(e)}/>
      
        </div>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type='text' id="starting-year" name='secondStartingYearDetails' value={inputFields.secondStartingYearDetails} placeholder='Starting Year' required onChange={(e) => handleInputs(e)} />

          <input style={{ marginRight: '10px' }} type='text' id="passing-year" name='secondPassingYearDetails' value={inputFields.secondPassingYearDetails} placeholder='Passing Year' required onChange={(e) => handleInputs(e)} />
          <input type="text" className='no-spinner' id="percentage" name='secondPercentageDetails' value={inputFields.secondPercentageDetails} placeholder='Percentage/CGPA' onChange={(e) => handleInputs(e)} />
        </div>
      </> : 
      
      <></>}

{/* {
   inputFields.secondEducationDetail == 'master'?  
      <>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type="text" id="college-name" name='secondUniversityDetails' value={inputFields.secondUniversityDetails} placeholder='University Name' required onChange={(e) => handleInputs(e)} />
          <input style={{ marginRight: '10px' }} type="text" id="college-name" name='secondCollegeDetails' value={inputFields.secondCollegeDetails} placeholder='College Name' required onChange={(e) => handleInputs(e)} />

          <select id="degree" name='secondDegree' value={inputFields.secondDegree} onChange={(e) => handleInputs(e)}>
      <option value="">Stream</option>
      <option value="m.tech">M.Tech</option>
      <option value="mca">MCA</option>
      <option value="B.Com">M.Com</option>
      <option value="B.Sc.">M.Sc.</option>
      <option value="B.Sc(IT)">M.Sc(IT)</option>
      <option value="ma">MA</option>
      <option value="others">Others</option>
      </select>

        </div>
        <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type='text' id="starting-year" name='secondStartingYearDetails' value={inputFields.secondStartingYearDetails} placeholder='Starting Year' required onChange={(e) => handleInputs(e)} />
        <input style={{ marginRight: '10px' }} type='text' id="passing-year" name='secondPassingYearDetails' value={inputFields.secondPassingYearDetails} placeholder='Passing Year' required onChange={(e) => handleInputs(e)} />
        <input type="text" className='no-spinner' id="percentage" name='secondPercentageDetails' value={inputFields.secondPercentageDetails} placeholder='Percentage/CGPA' onChange={(e) => handleInputs(e)} />

        </div>
      </> : 
      
      <></>}

{
   inputFields.secondEducationDetail == 'others'?  
      <>
        <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type="text" id="college-name" name='secondUniversityDetails' value={inputFields.secondUniversityDetails} placeholder='University Name' required onChange={(e) => handleInputs(e)} />
          <input style={{ marginRight: '10px' }} type="text" id="college-name" name='secondCollegeDetails' value={inputFields.secondCollegeDetails} placeholder='College Name' required onChange={(e) => handleInputs(e)} />

          <select id="degree" name='secondDegree' value={inputFields.secondDegree} onChange={(e) => handleInputs(e)}>
      <option value="">Stream</option>
      <option value="Deploma">Deploma</option>
      </select>

        </div>
        <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type='text' id="starting-year" name='secondStartingYearDetails' value={inputFields.secondStartingYearDetails} placeholder='Starting Year' required onChange={(e) => handleInputs(e)} />
        <input style={{ marginRight: '10px' }} type='text' id="passing-year" name='secondPassingYearDetails' value={inputFields.secondPassingYearDetails} placeholder='Passing Year' required onChange={(e) => handleInputs(e)} />
        <input type="text" className='no-spinner' id="percentage" name='secondPercentageDetails' value={inputFields.secondPercentageDetails} placeholder='Percentage/CGPA' onChange={(e) => handleInputs(e)} />

        </div>
      </> : 
      
      <></>} */}

<label htmlFor="resume">Upload Resume:</label>
  <input type="file" id="resume" name='resume' placeholder='Upload Your Resume'onChange={(e) => handleInputs(e)}  />

  <div style={{ textAlign: "center" }}>
    <button className="p-2" type="submit" value="Submit" onClick={submit}>SignUp</button>
  </div>

</form>
</div>
  </div>
  )
};

export default ExampleF;