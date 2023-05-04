import React, { useState } from 'react';

const RegisterSecond = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [resume, setResume] = useState('');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');

  const genderDetails = (event) => {
    setGender(event.target.value);
  }

  const resumedetails = (event) => {
    setResume(event.target.files[0]);
  };

  const submit = (event) => {
    event.preventDefault();
    // Your form submission logic goes here
  };


  const [educationDetail, setEducationDetail] = useState('');
  const [universityDetails, setUniversityDetails] = useState('');
  const [collegeDetails, setCollegeDetails] = useState('');
  const [startingYearDetails, setStartingYearDetails] = useState('');
  const [degree, setDegree] = useState('');
  const [passingYearDetails, setPassingYearDetails] = useState('');
  const [percentageDetails, setPercentageDetails] = useState('');
// const [intermediateDetails, setIintermediateDetails]=useState("13");


//   graduation and post graduation
  const studentEducationetails = (event) => {
    setEducationDetail(event.target.value);
  };

  const universityName = (event) => {
    setUniversityDetails(event.target.value);
  };

  const collegeName = (event) => {
    setCollegeDetails(event.target.value);
  };

  const startingYear = (event) => {
    setStartingYearDetails(event.target.value);
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
  const [secondStartingYearDetails, setSecondStartingYearDetails] = useState('');

  const [secondPassingYearDetails, setSecondPassingYearDetails] = useState('');
  const [secondPercentageDetails, setSecondPercentageDetails] = useState('');

  const secondStudentEducationetails = (event) => {
    setSecondEducationDetail(event.target.value)
  }
  const secondUniversityName = (event) => {
    setSecondUniversityDetails(event.target.value);
  };
  const secondCollegeName = (event) => {
    setSecondCollegeDetails(event.target.value);
  };
  const secondStartingYear = (event) => {
    setSecondStartingYearDetails(event.target.value);
  };
  const secondPassingYear = (event) => {
    setSecondPassingYearDetails(event.target.value);
  };
  const secondPercentage = (event) => {
    setSecondPercentageDetails(event.target.value);
  };



  return (
  <div style={{backgroundColor:'#295a8b'}}>
      <div className='formBtn m-auto'>

   <form onSubmit={submit}>
<div className='d-flex'>
  <input type="text" id="firstName" name="firstName" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
  <input type="text" id="lastName" name="lastName" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
  </div>

  <input type="tel" id="phoneNumber" placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />


  <input type="text" id="location" placeholder='Enter Your Permanent Address' value={location} onChange={(e) => setLocation(e.target.value)} />
  <div className='mt-2 d-flex'>
    <p >Select Your Gender</p>
      <label>
        <input type="radio"  value="male" checked={gender === 'male'} onChange={genderDetails}/> Male
      </label>
      <label>
        <input type="radio" value="female" checked={gender === 'female'} onChange={genderDetails} /> Female
      </label>
      <label>
        <input  type="radio" value="other" checked={gender === 'other'} onChange={genderDetails} /> Other
      </label>
    </div>

  <div>
    <select id="education-detail-dropdown" value={educationDetail} onChange={studentEducationetails} required >
      <option value="">Select Your Higher Education Details</option>
      <option value="Intermediate">Intermediate </option>
      <option value="graduation">Graduation </option>
      <option value="master">Master</option>
      <option value="others">Others</option>
    </select>
  </div>


  {
    educationDetail=="Intermediate" ?
    (
    <>
      <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type="text" id="college-name" value={universityDetails} placeholder='Board Name' required onChange={universityName} />
        <input  style={{marginRight:'10px'}} type="text" id="college-name" value={collegeDetails} placeholder='School Name' required onChange={collegeName} />

        <select id="degree" value={degree} onChange={(e) => setDegree(e.target.value)}>
      <option value="">Stream</option>
      <option value="Science">Science</option>
      <option value="Commerce">Commerce</option>
      <option value="Arts">Arts</option>
      </select>
      </div>
      <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type='text' id="starting-year" value={startingYearDetails} placeholder='Starting Year' required onChange={startingYear} />
  
        <input style={{ marginRight: '10px' }} type='text' id="passing-year" value={passingYearDetails} placeholder='Passing Year' required onChange={passingYear} />
        <input type="text" id="percentage" value={percentageDetails} placeholder='Percentage' onChange={percentage} />
      </div>
    </>
    ):
    (<>
      
    </>)
    }
    {educationDetail=="graduation" ? <>
       <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type="text" id="college-name" value={universityDetails} placeholder='University Name' required onChange={universityName} />
        <input style={{ marginRight: '10px' }} type="text" id="college-name" value={collegeDetails} placeholder='College Name' required onChange={collegeName} />

        <select id="degree" value={degree} onChange={(e) => setDegree(e.target.value)}>
      <option value="">Stream</option>
      <option value="bca">BCA</option>
      <option value="B.Com">B.Com</option>
      <option value="ba">BA</option>
      <option value="B.Sc.">B.Sc.</option>
      <option value="B.Sc(IT)">B.Sc(IT)</option>
      </select>
      </div>
      <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type='text' id="starting-year" value={startingYearDetails} placeholder='Starting Year' required onChange={startingYear} />
  
        <input style={{ marginRight: '10px' }} type='text' id="passing-year" value={passingYearDetails} placeholder='Passing Year' required onChange={passingYear} />
        <input type="text" id="percentage" value={percentageDetails} placeholder='Percentage' onChange={percentage} />
      </div>
    </> : <></>}

    {educationDetail=="master" ? <>
       <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type="text" id="college-name" value={universityDetails} placeholder='University Name' required onChange={universityName} />
        <input style={{ marginRight: '10px' }} type="text" id="college-name" value={collegeDetails} placeholder='College Name' required onChange={collegeName} />

        <select id="degree" value={degree} onChange={(e) => setDegree(e.target.value)}>
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
        <input style={{ marginRight: '10px' }} type='text' id="starting-year" value={startingYearDetails} placeholder='Starting Year' required onChange={startingYear} />
  
        <input style={{ marginRight: '10px' }} type='text' id="passing-year" value={passingYearDetails} placeholder='Passing Year' required onChange={passingYear} />
        <input type="text" id="percentage" value={percentageDetails} placeholder='Percentage' onChange={percentage} />
      </div>
    </> : <></>}

    {educationDetail=="others" ? <>
       <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type="text" id="college-name" value={universityDetails} placeholder='University Name' required onChange={universityName} />
        <input style={{ marginRight: '10px' }} type="text" id="college-name" value={collegeDetails} placeholder='College Name' required onChange={collegeName} />

        <select id="degree" value={degree} onChange={(e) => setDegree(e.target.value)}>
      <option value="">Stream</option>
      <option value="Deploma">Deploma</option>
      </select>
      </div>
      <div className='d-flex'>
        <input style={{ marginRight: '10px' }} type='text' id="starting-year" value={startingYearDetails} placeholder='Starting Year' required onChange={startingYear} />
  
        <input style={{ marginRight: '10px' }} type='text' id="passing-year" value={passingYearDetails} placeholder='Passing Year' required onChange={passingYear} />
        <input type="text" id="percentage" value={percentageDetails} placeholder='Percentage' onChange={percentage} />
      </div>
    </> : <></>}
    

  <div>
    <select id="education-detail-dropdown" value={secondEducationDetail} onChange={secondStudentEducationetails} >
      <option value="">Select Your Second Higher Education Details</option>
      <option value="Intermediate">Intermediate </option>
      <option value="graduation">Graduation</option>
      <option value="master">Master</option>
      <option value="others">Others</option>
    </select>
  </div>
  {
    secondEducationDetail == 'Intermediate'?  
      <>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type="text" id="college-name" value={secondUniversityDetails} placeholder='Board Name' required onChange={secondUniversityName} />
          <input style={{marginRight:'10px'}} type="text" id="college-name" value={secondCollegeDetails} placeholder='School Name' required onChange={secondCollegeName} />

          <select id="degree" value={degree} onChange={(e) => setDegree(e.target.value)}>
           <option value="">Stream</option>
           <option value="Science">Science</option>
           <option value="Commerce">Commerce</option>
          <option value="Arts">Arts</option>
          </select>

        </div>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type='text' id="starting-year" value={secondStartingYearDetails} placeholder='Starting Year' required onChange={secondStartingYear} />

          <input style={{ marginRight: '10px' }} type='text' id="passing-year" value={secondPassingYearDetails} placeholder='Passing Year' required onChange={secondPassingYear} />
          <input type="text" className='no-spinner' id="percentage" value={secondPercentageDetails} placeholder='Percentage/CGPA' onChange={secondPercentage} />
        </div>
      </> : 
      
      <></>}

  {
    secondEducationDetail == 'graduation'?  
      <>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type="text" id="college-name" value={secondUniversityDetails} placeholder='University Name' required onChange={secondUniversityName} />
          <input style={{ marginRight: '10px' }} type="text" id="college-name" value={secondCollegeDetails} placeholder='College Name' required onChange={secondCollegeName} />

          <select id="degree" value={degree} onChange={(e) => setDegree(e.target.value)}>
      <option value="">Stream</option>
      <option value="bca">BCA</option>
      <option value="B.Com">B.Com</option>
      <option value="ba">BA</option>
      <option value="B.Sc.">B.Sc.</option>
      <option value="B.Sc(IT)">B.Sc(IT)</option>
      </select>
        </div>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type='text' id="starting-year" value={secondStartingYearDetails} placeholder='Starting Year' required onChange={secondStartingYear} />

          <input style={{ marginRight: '10px' }} type='text' id="passing-year" value={secondPassingYearDetails} placeholder='Passing Year' required onChange={secondPassingYear} />
          <input type="text" className='no-spinner' id="percentage" value={secondPercentageDetails} placeholder='Percentage/CGPA' onChange={secondPercentage} />
        </div>
      </> : 
      
      <></>}

{
    secondEducationDetail == 'master'?  
      <>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type="text" id="college-name" value={secondUniversityDetails} placeholder='University Name' required onChange={secondUniversityName} />
          <input style={{ marginRight: '10px' }} type="text" id="college-name" value={secondCollegeDetails} placeholder='College Name' required onChange={secondCollegeName} />

          <select id="degree" value={degree} onChange={(e) => setDegree(e.target.value)}>
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
          <input style={{ marginRight: '10px' }} type='text' id="starting-year" value={secondStartingYearDetails} placeholder='Starting Year' required onChange={secondStartingYear} />

          <input style={{ marginRight: '10px' }} type='text' id="passing-year" value={secondPassingYearDetails} placeholder='Passing Year' required onChange={secondPassingYear} />
          <input type="text" className='no-spinner' id="percentage" value={secondPercentageDetails} placeholder='Percentage/CGPA' onChange={secondPercentage} />
        </div>
      </> : 
      
      <></>}

{
    secondEducationDetail == 'others'?  
      <>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type="text" id="college-name" value={secondUniversityDetails} placeholder='University Name' required onChange={secondUniversityName} />
          <input style={{ marginRight: '10px' }} type="text" id="college-name" value={secondCollegeDetails} placeholder='College Name' required onChange={secondCollegeName} />

          <select id="degree" value={degree} onChange={(e) => setDegree(e.target.value)}>
      <option value="">Stream</option>
      <option value="Deploma">Deploma</option>
      </select>

        </div>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type='text' id="starting-year" value={secondStartingYearDetails} placeholder='Starting Year' required onChange={secondStartingYear} />

          <input style={{ marginRight: '10px' }} type='text' id="passing-year" value={secondPassingYearDetails} placeholder='Passing Year' required onChange={secondPassingYear} />
          <input type="text" className='no-spinner' id="percentage" value={secondPercentageDetails} placeholder='Percentage/CGPA' onChange={secondPercentage} />
        </div>
      </> : 
      
      <></>}

<label htmlFor="resume">Upload Resume:</label>
  <input type="file" id="resume" name='resume' placeholder='Upload Your Resume' onChange={resumedetails} />

  <div style={{ textAlign: "center" }}>
    <button className="p-2" type="submit" value="Submit" onClick={{}}>SignUp</button>
  </div>

</form>
</div>
  </div>
  )
};

export default RegisterSecond;