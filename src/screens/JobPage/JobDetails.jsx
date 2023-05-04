import React from 'react'
import '../Assets/CSS/JobDetails.css'
import { TfiLocationPin } from 'react-icons/tfi'
import { BsBag,BsPeople } from "react-icons/bs"
import { TbMoneybag, TbPigMoney, TbExternalLink , TbCurrencyRupee} from "react-icons/tb"
import {GiTimeTrap} from "react-icons/gi"
const JobDescription = () => {
  return (
    <div className='jobDescription_section'>
        <div className='jobDescription_container'>
            <div className='jobDecription_titleSection'>
                <div className='jobDecription_titleContainer'>
                    <h3>Software Engineer Job in Delhi at HMInnovance</h3>
                </div>
            </div>
            <div className='jobCard_section'>
                <div className='jobCard_container'>
                    <div style={{textAlign:"start"}}>
                        <h5>Software Engineer</h5>
                        <p>HM Innovance</p>
                    </div>
                    <div style={{marginTop:"7px"}}>
                        <p className='d-flex align-items-center ms-sm-0 ms-2'><TfiLocationPin style={{marginRight:"7px"}} />Delhi</p>
                        <div className='job_type pt-2' style={{display:'flex'}}>
                            <div className='job_role'>
                            <p className='d-flex align-items-center ms-sm-0 ms-3'><BsBag style={{marginRight:"7px"}} /> Experience</p>
                            <p className='d-flex justify-content-md-center align-items-md-center ps-md-0 ps-4'>  Fresher</p>
                            </div >
                            <div className='job_role ms-sm-5 ms-3' style={{ marginLeft:'px'}}>
                            <p className='d-flex align-items-center'><TbPigMoney style={{marginRight:"7px"}} />CTC</p>
                            <p className='d-flex align-items-center' ><TbCurrencyRupee/> 2-4 LPA</p>
                            </div>
                            <div className='job_role ms-sm-5 ms-3' style={{ marginLeft:'px'}}> 
                            <p  className='d-flex align-items-center'><GiTimeTrap style={{marginRight:"7px"}} />Apply By</p>
                            <p className='d-flex justify-content-md-center align-items-md-center ps-md-0 ps-3'>30 April</p>
                            </div>
                        </div>
                        
                        <p className='d-flex align-items-center'><BsPeople style={{marginRight:"10px"}} />Number of Openings : 5</p>
                        <div  className='d-flex align-items-center justify-content-center pt-5 pt-sm-2 '>
                        <button style={{backgroundColor:"#519CF1",height:"35px",width:"75px",color:"#fff"}}>Apply</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className='aboutCompany_section'>
                <div className='aboutCompany_container'>
                    <div className='aboutCompany_headerContainer'>
                        <h5 style={{textAlign:"start"}}>About HM Innovace</h5>
                        <p style={{display:"flex",alignItems:"center"}}>Webite <TbExternalLink style={{marginLeft:"10px"}} /></p>
                    </div>
                    <div className='aboutComapany_description'>
                        <p style={{textAlign:"start"}}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit debitis iusto tenetur nobis laboriosam, exercitationem repellendus nemo similique  rem hic. Ab sit ut temporibus non at nihil suscipit harum ea aspernatur nisi maxime quae corporis, tempore esse pariatur nobis. Quia, ipsam est pariatur possimus repellendus mollitia provident corporis sit saepe quibusdam laboriosam?
                        </p>
                        <div className='about_company'>
                        <h5>Active on JobPortal</h5>
                            <div className='on_jobportal d-flex '>
                            <div className='' style={{ marginLeft:'px'}}>
                            <p className='d-flex align-items-center ms-3 fs-15'><TbPigMoney style={{marginRight:"7px", fontSize:"20px"}} />Hiring Since December 2022</p>
                            </div>
                            <div className=' ms-3' style={{ marginLeft:'px'}}>
                            <p className='d-flex align-items-center fs-15'><TbPigMoney style={{marginRight:"7px", fontSize:"20px"}} />11 opportunities posted</p>
                            </div>
                            <div className='ms-3' style={{ marginLeft:'px'}}>
                            <p className='d-flex align-items-center fs-15'><TbPigMoney style={{marginRight:"7px", fontSize:"20px"}} />20 Candidate Hired</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='aboutJobRole_section'>
                <div className='aboutJobRole_container'>
                    <div className='aboutJobRole_headingSection'>
                        <h5>About Job Role</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ab, accusamus accusantium ratione soluta facere quo neque molestias distinctio, molestiae minima? Voluptatibus minima culpa accusantium, sint blanditiis aspernatur modi molestias ipsum quas soluta omnis vero tempore mollitia ab debitis iste! Veritatis dolores excepturi aliquam dolorem sed qui quas asperiores officia?</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobDescription;