import {Link} from "react-router-dom";
import './navbar.css'


function navbar() {
<<<<<<< HEAD
    return (
    <header>
    
    <div className="sidebar">
    <p> Visionary Advocates </p>
              <Link to="/" onClick = {() => {window.location.href="/"}} > Home </Link>
              <Link to="/Login" onClick = {() => {window.location.href="/Login"}} > Login </Link>
              <Link to="SignUp" onClick = {() => {window.location.href="/SignUp"}} > Sign Up </Link>
              <Link to="/CreateEvent" onClick = {() => {window.location.href="/CreateEvent"}} > Create Event </Link>
              <Link to="/VolunteerSignUp" onClick = {() => {window.location.href="/VolunteerSignUp"}} > Volunteer Sign Up </Link>
              <Link to="/Profile" onClick = {() => {window.location.href="/Profile"}} > Profile </Link>
      </div>
    </header>
    )
  }
  
  export default navbar
=======
return (
<header>
<div className="sidebar">
<p> Visionary Advocates </p>
<Link to="/" onClick = {() => {window.location.href="/"}} > Home </Link>
<Link to="/Login" onClick = {() => {window.location.href="/Login"}} > Login </Link>
<Link to="SignUp" onClick = {() => {window.location.href="/SignUp"}} > Sign Up </Link>
<Link to="/CreateEvent" onClick = {() => {window.location.href="/CreateEvent"}} > Create Event </Link>
<Link to="/VolunteerSignUp" onClick = {() => {window.location.href="/VolunteerSignUp"}} > Volunteer Sign Up </Link>
<Link to="/Profile" onClick = {() => {window.location.href="/Profile"}} > Profile </Link>
</div>
</header>
)
}
export default navbar
>>>>>>> profile
