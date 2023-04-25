import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
// import SignUp from "./screens/SignUp"
import RegistrationForm from "./screens/StudentSignUp";
import EmployeeJobOfferForm from "./screens/EmployeeJobOffer";
import Register from "./screens/Register";
// import RegisterSecond from './screens/Register2';
import ExampleF from "./screens/ExampleForm";
import JobPage from "./screens/JobPage/JobPage";
import JobCardElement from "./screens/JobPage/JobCard";
import JobDescription from "./screens/JobPage/JobDetails";
import RTOLogin from "./screens/JobPage/RTOsingIn";


function App() {
  return (
    <>
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/employeeJobOffer" element={<EmployeeJobOfferForm />} />
          <Route path="/jobPage" element={<JobPage />} />
          <Route path="/exampleForm" element={<ExampleF />} />
          <Route path="/jobDetails" element={<JobDescription />} />
          <Route path="/rtosignin" element={<RTOLogin />} />

          
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
