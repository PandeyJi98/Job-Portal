
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import ToggleButton from './ToggleMenuButton';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "rgba(186, 185, 185, 0.977)",color:"black",fontSize:"bold"}}  fixed='top'>
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Brand href="#">
            <img
              alt=""
              src="/images/logo.png"
              width="45"
              height="45"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="jobPage">Jobs</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <NavDropdown title="login" id="collasible-nav-dropdown">
              <NavDropdown.Item href="login">Student Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Employee Login
              </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Register" id="collasible-nav-dropdown" className='me-6'>
              <NavDropdown.Item href="Register">Student Register</NavDropdown.Item>
              <NavDropdown.Item href="EmployeeJobOffer"> Employee Register</NavDropdown.Item>
              {/* <NavDropdown.Item href='JobPage'></NavDropdown.Item> */}
             </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;








// import React, { useEffect, useState } from "react"
// import "./Nav.css"
// import { Link } from "react-router-dom"
// import { FaBars } from "react-icons/fa"
// import { ImCross } from "react-icons/im"

// const Nav = () => {
//   const [Mobile, setMobile] = useState(false)
//   const [show,handleShow] = useState(false)

//   const transitionNavBar = ()=>{
//     if (window.scrollY > 100) {
//       handleShow(true);
//     } else {
//       handleShow(false);
//     }
//   }
//   useEffect(()=>{
//     window.addEventListener("scroll",transitionNavBar);
//     return() =>window.removeEventListener('scroll',transitionNavBar);
//   },[]);

//   return (
//     <>
//     <div className="navbar_container">
//       <nav className= {`navbar ${show && `nav_black`}`}>
//         <h3 className='logo'>Logo</h3>
//         {/*
//         if large screen ma xa bhane Mobile add huxa
//         if mobile screen ma xa bhane nav-links-mobile add huxa
//         */}
//         <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
//           <Link to='/' className='home'>
//             <li>Home</li>
//           </Link>
//           <Link to='/about' className='about'>
//             <li>About</li>
//           </Link>
//           <Link to='/services' className='services'>
//             <li>Services</li>
//           </Link>
//           <Link to='/login' className='skills'>
//             <li>Login</li>
//           </Link>
//           <Link to='/contact' className='home'>
//             <li>contact</li>
//           </Link>
//         </ul>
//         {/* 
//         whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
//         */}
//         <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
//           {Mobile ? <ImCross /> : <FaBars />}
//         </button>
//       </nav>
//     </div>
//     </>
//   )
// }
// export default Nav;
