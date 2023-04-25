import React, { useState } from 'react';
import '../Assets/CSS/JobNavbar.css';
import {IoMdArrowDropdown} from "react-icons/io"
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JobNavbar = () => {
  const [open, setOpen] = useState(false);
  const toggleSubMenu = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <>
   <nav className="navbar navbar-expand-md sticky-top" style={{ backgroundColor: "gray" }}> 
                    <div className="container-fluid">
                        <NavLink to='/'><img src="/images/logo.png" alt="logo1" width="50" height="60" /></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-3 justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                              <li className='pt-2' > <Link to='/jobDetails' style={{color:'black'}}>Job Descriptions</Link></li>
                              <li className='pt-2' > <Link to='/RTOsignIn' style={{color:'black', marginLeft:'20px'}}>RTO Page</Link></li>
                              

                      {/* Intership Section Start */}
                                <li className="nav-item dropdown">
                                    <NavLink className="text-dark nav-link ms-3 dropdown-toggle" role="button" data-bs-auto-close='outside' data-bs-toggle="dropdown" aria-expanded="false">InternShip</NavLink>
                                     <div>
                                     <ul className="dropdown-menu toggle  text-dark"style={{backgroundColor:'rgb(243, 243, 243)'}}>
                                        <li className='dropend'><NavLink style={{ fontWeight: "500" }} className="dropdown-item dropdown-toggle" data-bs-toggle='dropdown' to="/#">Profile</NavLink>

                                        <ul className='dropdown-menu' style={{backgroundColor:'rgb(243, 243, 243)'}}>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Computer Science Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Marketing Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Finince Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Graphic Design Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Architecture Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Mechanical Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">HR Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Digital Marketing Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Law Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Electronics Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Content Writting Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Civil Internships</NavLink></li>
                                        </ul>
                                        </li>

                                        <li className='dropend'><NavLink style={{ fontWeight: "500" }} className="dropdown-item dropdown-toggle " data-bs-toggle='dropdown' to="/#">Location</NavLink>
                                        <ul className='dropdown-menu' style={{backgroundColor:'rgb(243, 243, 243)'}}>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Work From Home</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Internships In Delhi</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Internships In Gurgaon</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Internships In Noida</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Internships In Bangalore</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Internships In Mumbai</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Internships In Pune</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Internships In Kolkata</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Internships In Chennai</NavLink></li>
                                        </ul>
                                        </li>
                                        
                                        <li className='dropend'><NavLink style={{ fontWeight: "500" }} className="dropdown-item dropdown-toggle " data-bs-toggle='dropdown' to="/#">Category</NavLink>
                                        <ul className='dropdown-menu' style={{backgroundColor:'rgb(243, 243, 243)'}}>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Work From Home</NavLink></li>
                                          <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Business/MBA Internships</NavLink></li>
                                          <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Part-Time Job/ Internships</NavLink></li>
                                          <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Science Internships</NavLink></li>
                                          <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Internships with Job Offer</NavLink></li>
                                          <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Internships for Women</NavLink></li>
                                          <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Humanities Internships</NavLink></li>

                                        </ul>
                                        </li>

                                    </ul>
                                    </div>
                                </li>
                            {/* Intership Section End */}

                          {/* Jobs Section Start */}
                            <li className="nav-item dropdown">
                                    <NavLink className="active text-dark nav-link ms-3 me-5 justify-content-center dropdown-toggle" role="button" data-bs-auto-close='outside' data-bs-toggle="dropdown" aria-expanded="false">Jobs</NavLink>
                                     <div>
                                     <ul className="dropdown-menu  text-dark fs-6" style={{backgroundColor:'rgb(243, 243, 243)'}}>
                                        <li className='dropend'><NavLink style={{ fontWeight: "500" }} className="dropdown-item dropdown-toggle " data-bs-toggle='dropdown' to="/#">Profile</NavLink>

                                        <ul className='dropdown-menu' style={{backgroundColor:'rgb(243, 243, 243)'}}>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Computer Science Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Marketing Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Finince Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Graphic Design Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Architecture Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Mechanical Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">HR Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Digital Marketing Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Law Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Electronics Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Content Writting Internships</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Civil Internships</NavLink></li>
                                        </ul>
                                        </li>

                                        <li className='dropend'><NavLink style={{ fontWeight: "500" }} className="dropdown-item dropdown-toggle " data-bs-toggle='dropdown' to="/#">Location</NavLink>
                                        <ul className='dropdown-menu' style={{backgroundColor:'rgb(243, 243, 243)'}}>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Work From Home</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Jobs In Delhi</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Jobs In Gurgaon</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Jobs In Noida</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Jobs In Bangalore</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Jobs In Mumbai</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Jobs In Pune</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Jobs In Kolkata</NavLink></li>
                                         <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Jobs In Chennai</NavLink></li>
                                        </ul>
                                        </li>
                                        
                                        <li className='dropend'><NavLink style={{ fontWeight: "500" }} className="dropdown-item dropdown-toggle" data-bs-toggle='dropdown' to="/#">Category</NavLink>
                                        <ul className='dropdown-menu' style={{backgroundColor:'rgb(243, 243, 243)'}}>

                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Work From Home</NavLink></li>
                                          <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Fresher Jobs</NavLink></li>
                                          <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Part-Time Jobs</NavLink></li>
                                          <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Content Wtitting Jobs</NavLink></li>
                                          <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Marketing jobs</NavLink></li>
                                          <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Computer Science jobs</NavLink></li>
                                          <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Finince jobs</NavLink></li>
                                          <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">HR jobs</NavLink></li>
                                          <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Graphic design jobs</NavLink></li>
                                          <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/#">Data science jobs</NavLink></li>

                                         
                                        </ul>
                                        </li>

                                    </ul>
                                    </div>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                               <button className="btn btn-outline-success" type="submit">Search</button>
                           </form>
                        </div>
                    </div>
                </nav>

    </>
  );
};

export default JobNavbar;


 
   {/* <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Internships
                </a>
                <ul className={`dropdown-menu ${open ? "show" : ""}`}>
                  <li className="dropdown-submenu">
                    <a href="#" className="dropdown-item" onClick={toggleSubMenu}>Location</a>
                    <ul className={`dropdown-menu ${open ? "show" : ""}`}>
                      <li><a href="#" className="dropdown-item">Work From Home</a></li>
                      <li><a href="#" className="dropdown-item">Internships In Delhi</a></li>
                      <li><a href="#" className="dropdown-item">Internships In Gurgaon</a></li>
                      <li><a href="#" className="dropdown-item">Internships In Noida</a></li>
                      <li><a href="#" className="dropdown-item">Internships In Bangalore</a></li>
                      <li><a href="#" className="dropdown-item">Internships In Mumbai</a></li>
                      <li><a href="#" className="dropdown-item">Internships In Pure</a></li>
                      <li><a href="#" className="dropdown-item">Internships In Kolkata</a></li>
                      <li><a href="#" className="dropdown-item">Internships In Chennai</a></li>
                    </ul>
                  </li>

                  <li className="dropdown-submenu">
                    <a href="#" className="dropdown-item" onClick={toggleSubMenu}>Profile</a>
                    <ul className={`dropdown-menu ${open ? "show" : ""}`}>
                      <li><a href="#" className="dropdown-item">Computer Science Internships</a></li>
                      <li><a href="#" className="dropdown-item">Marketing Internships</a></li>
                      <li><a href="#" className="dropdown-item">Finince Internships</a></li>
                      <li><a href="#" className="dropdown-item">Graphic Design Internships</a></li>
                      <li><a href="#" className="dropdown-item">Architecture Internships</a></li>
                      <li><a href="#" className="dropdown-item">Mechanical Internships</a></li>
                      <li><a href="#" className="dropdown-item">HR Internships</a></li>
                      <li><a href="#" className="dropdown-item">Digital Marketing Internships</a></li>
                      <li><a href="#" className="dropdown-item">Law Internships</a></li>
                      <li><a href="#" className="dropdown-item">Electronics Internships</a></li>
                      <li><a href="#" className="dropdown-item">Content Writting Internships</a></li>
                      <li><a href="#" className="dropdown-item">Civil Internships</a></li>

                    </ul>
                  </li>

                  <li className="dropdown-submenu">
                    <a href="#" className="dropdown-item" onClick={toggleSubMenu}>Category</a>
                    <ul className={`dropdown-menu ${open ? "show" : ""}`}>
                      <li><a href="#" className="dropdown-item">Engineering Internships</a></li>
                      <li><a href="#" className="dropdown-item">Business/MBA Internships</a></li>
                      <li><a href="#" className="dropdown-item">Part-Time Job/ Internships</a></li>
                      <li><a href="#" className="dropdown-item">Science Internships</a></li>
                      <li><a href="#" className="dropdown-item">Internships with Job Offer</a></li>
                      <li><a href="#" className="dropdown-item">Internships for Women</a></li>
                      <li><a href="#" className="dropdown-item">Humanities Internships</a></li>

                    </ul>
                  </li>

                  <li><hr className="dropdown-divider"/></li>
                  <li><a href="#" className="dropdown-item">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav> */}
