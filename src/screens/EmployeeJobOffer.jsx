import React, { useState } from 'react';

const EmployeeJobOfferForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [resume, setResume] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [preferredIndustry, setPreferredIndustry] = useState('');
  
  const [workPreference, setWorkPreference] = useState('');
  const [expectedSalary, setExpectedSalary] = useState('');
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  


  const workPrefreneceDetails = (event) => {
    setWorkPreference(event.target.value);
  };

  const resumedetails = (event) => {
    setResume(event.target.files[0]);
  };

  const submit = (event) => {
    event.preventDefault();
    // Your form submission logic goes here
  };

  const [workPreferredCities, setWorkPrefer] = useState('');


  // skills Hooks and Call
  const [skills, setSkills] = useState('');
  const [skillsType, setSkillstype] = useState('');

  const yourSkills = (event) => {
    setSkills(event.target.value)
  }

  const skillsTypeDetails = (event) => {
    setSkillstype(event.target.value)
  }

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

  const secondStudentEducationetails = (event) => {
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

  // Preferred Cities
  const [preferredCities, setPreferredCities] = useState([])

  return (
  <div style={{backgroundColor:'#295a8b'}}>
      <div className='formBtn m-auto'>

   <form onSubmit={submit}>

  <input type="text" id="fullName" placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />

  <input type="email" id="email" placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />

  <input type="tel" id="phoneNumber" placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

  <input type="password" id="password" placeholder='Create Password' value={password} onChange={(e) => setPassword(e.target.value)} />
  <input type="password" id="confirmPassword" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

  <input type="text" id="location" placeholder='Enter Your Permanent Address' value={location} onChange={(e) => setLocation(e.target.value)} />

  <label htmlFor="resume">Upload Resume:</label>
  <input type="file" id="resume" placeholder='Upload Your Resume' onChange={resumedetails} />

  <div>
    <select id="skills-detail-dropdown" value={skillsType} onChange={skillsTypeDetails} >
      <option value="">Skills</option>
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
    <select id="education-detail-dropdown" value={educationDetail} onChange={studentEducationetails} required >
      <option value="">Select Your Higher Education Details</option>
      <option value="Intermediate">Intermediate </option>
      <option value="graduation">Graduation </option>
      <option value="master">Master</option>
      <option value="others">Others</option>
    </select>
  </div>
  {
    educationDetail && (
      <>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type="text" id="college-name" value={universityDetails} placeholder='University Name' required onChange={universityName} />
          <input type="text" id="college-name" value={collegeDetails} placeholder='College Name' required onChange={collegeName} />
        </div>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type='text' id="passing-year" value={passingYearDetails} placeholder='Passing Year' required onChange={passingYear} />
          <input type="text" id="percentage" value={percentageDetails} placeholder='Percentage' onChange={percentage} />
        </div>
      </>
    )}

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
    secondEducationDetail && (
      <>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type="text" id="college-name" value={secondUniversityDetails} placeholder='University Name' required onChange={secondUniversityName} />
          <input type="text" id="college-name" value={secondCollegeDetails} placeholder='College Name' required onChange={secondCollegeName} />
        </div>
        <div className='d-flex'>
          <input style={{ marginRight: '10px' }} type='text' id="passing-year" value={secondPassingYearDetails} placeholder='Passing Year' required onChange={secondPassingYear} />
          <input type="text" className='no-spinner' id="percentage" value={secondPercentageDetails} placeholder='Percentage/CGPA' onChange={secondPercentage} />
        </div>
      </>
    )}
  <input type="text" id="experience" placeholder='Experience' value={experience} onChange={(e) => setExperience(e.target.value)} />

  <select id="preferredIndustry" value={preferredIndustry} onChange={(e) => setPreferredIndustry(e.target.value)}>
    <option value="">Select Preferred Industry</option>
    <option value="Technology">Technology</option>
    <option value="Finance">Finance</option>
    <option value="Healthcare">Healthcare</option>
    <option value="Marketing">Marketing</option>
    <option value="Retail">Retail</option>
    <option value="Hospitality">Hospitality</option>
    <option value="Education">Education</option>
    <option value="Manufacturing">Manufacturing</option>
    <option value="Transportation">Transportation</option>
    <option value="Other">Other</option>
  </select>


<select id="preferredCity" value={preferredCities} onChange={(e) => {
  const selectedOptions = e.target.value;

  setPreferredCities([...preferredCities, selectedOptions]);
}}>
  <option value="">Select Preferred City</option>
  <option value="Delhi" disabled={preferredCities.includes("Delhi")}>Delhi</option>
  <option value="Gurgaon" disabled={preferredCities.includes("Gurgaon")}>Gurgaon</option>
  <option value="Pune" disabled={preferredCities.includes("Pune")}>Pune</option>
  <option value="Patna" disabled={preferredCities.includes("Patna")}>Patna</option>
  <option value="Noida" disabled={preferredCities.includes("Noida")}>Noida</option>
  <option value="Haryana" disabled={preferredCities.includes("Haryana")}>Haryana</option>
  <option value="Rewari" disabled={preferredCities.includes("Rewari")}>Rewari</option>
  <option value="Mumbai" disabled={preferredCities.includes("Mumbai")}>Mumbai</option>
  <option value="Kolkatta" disabled={preferredCities.includes("Kolkatta")}>Kolkatta</option>
  <option value="Other" disabled={preferredCities.includes("Other")}>Other</option>
</select>

{
  preferredCities && preferredCities.map((item)=>{
    return(
    <>
        <span className='me-2 d-inline-block'>
        {item}
        </span>
    </>
    )
  })
}

<div className='pt-3 text-center'> <label htmlFor="workPreference">Work Preference:</label> </div>

  <div className='d-flex justify-content-center align-items-center'>
    <label>
      <input type="radio" name="workPreference" value="workFromHome" checked={workPreference === 'workFromHome'} onChange={workPrefreneceDetails} /> Work from Home
    </label>
    <label>
      <input type="radio" name="workPreference" value="workFromOffice" checked={workPreference === 'workFromOffice'} onChange={workPrefreneceDetails} /> Work in Office
    </label>
  </div>

  {/* <label htmlFor="expectedSalary">Expected Salary:</label> */}
  <input type="text" id="expectedSalary" placeholder='Expected Salary' value={expectedSalary} onChange={(e) => setExpectedSalary(e.target.value)} />

  <div className=''>
    <input type="checkbox" checked={termsAndConditions} onChange={() => setTermsAndConditions(!termsAndConditions)} /> I agree to the <a href="#">Terms and Conditions</a>.
  </div>
  <div style={{ textAlign: "center" }}>
    <button className="p-2" type="submit" value="Submit" onClick={{}}>Submit</button>
  </div>

</form>
</div>
  </div>
  )
};

export default EmployeeJobOfferForm;