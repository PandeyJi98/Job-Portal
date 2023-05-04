import React, { useState } from 'react'
import '../Assets/CSS/JobPageSidebar.css'
const JobPageSidebar = () => {
  const [workExperience, setWorkExperience] = useState("Fresher");
  const [jobType, setJobType] = useState("");

  const handleChange = (event) => {
    setWorkExperience(event.target.value);
  };

  return (
    <div className='sidebar_section'>
        <div className='sidebar_container'>
            <div className='category_section'>
                  <div className='category_container m-auto'>
                    <h6 style={{marginBottom:"10px"}}>Category</h6>
                      <input style={{height:"35px",width:"100%", padding:'10px'}} placeholder='Category' />
                  </div>          
            </div>
            <div className='search_section'>
              <div className='search_container'>
                <h6>Location</h6>
                <input style={{height:"35px",width:"100%", padding:'10px'}} placeholder='Location' />
              </div>
            </div>
            <div className='experienceAndType_section d-flex flex-direction-column'>
              <div className='experience_container'> 
                <select value={workExperience} onChange={handleChange} style={{backgroundColor:"#E4E5E2", width:'100%'}}>
                  <option value="fresher">Fresher</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10+">10+</option>
                </select>
              </div>
              <div className='jobType_container'> 
                <select value={jobType} onChange={(e)=>{setJobType(e.target.value)}} style={{backgroundColor:"#E4E5E2", marginLeft:"0px"}}>
                  <option value="">Job Type</option>
                  <option value="Work From Home">Work From Home</option>
                  <option value="1">On-Site</option>
                  <option value="2">Hybrid</option>
                </select>
              </div>
            </div>
            <div className='text-center'>
              <button className='bg-green-500 h-7 hover:bg-green-400 mt-4 text-center w-2/4 text-white'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default JobPageSidebar;