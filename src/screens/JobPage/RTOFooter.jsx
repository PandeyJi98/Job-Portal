import React from 'react'
import "../Assets/CSS/RTOFooter.css"
import {BsFacebook , BsInstagram} from "react-icons/bs"
import {AiFillGoogleCircle,AiFillTwitterCircle } from "react-icons/ai"
const RTOFooter = () => {
  return (
    

  <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul className="ul1">
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul className="ul1">
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul className="ul1">
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
                   <a href="#" style={{display:"flex",alignItems:"center",justifyContent:"center", fontSize:'25px'}}><BsFacebook/></a>
                   <a href="#" style={{display:"flex",alignItems:"center",justifyContent:"center", fontSize:'25px'}}><AiFillTwitterCircle/></a>
                   <a href="#" style={{display:"flex",alignItems:"center",justifyContent:"center", fontSize:'25px'}}> <BsInstagram/></a>
                   <a href="#" style={{display:"flex",alignItems:"center",justifyContent:"center", fontSize:'25px'}}><AiFillGoogleCircle/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>



  )
}

export default RTOFooter