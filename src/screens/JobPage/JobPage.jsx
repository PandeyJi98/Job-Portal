import React from 'react'
import Footer from '../../components/Footer';
import JobCardElement from './JobCard';
import JobPageSidebar from './JobPageSidebar';
import "../Assets/CSS/JobPage.css"
import JobNavbar from './JobNavbar';
import RTOFooter from './RTOFooter';
const JobPageElement = () => {
  return (
    <> 
      <JobNavbar />
    <div className='d-flex mediaQ justify-content-center'>
      <div>
        <JobPageSidebar/>
      </div>
      <div >
          <JobCardElement />
          <JobCardElement />
          <JobCardElement />
          <JobCardElement />
          <JobCardElement />
          <JobCardElement />
          <JobCardElement />
          <JobCardElement />
          <JobCardElement />
          <JobCardElement />
          <JobCardElement />
          <JobCardElement />
      </div>
    </div>
    <RTOFooter/>
    </>
  )
}

export default JobPageElement;