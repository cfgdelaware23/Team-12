import {Link} from "react-router-dom";
import './navbar.css'

function navbar() {
    return (
    <header>
    <div className="container">
              <Link to="/" onClick = {() => {window.location.href="/"}} > Home </Link>
              <Link to="/projects" onClick = {() => {window.location.href="/Login"}} > Login </Link>
              <Link to="awards" onClick = {() => {window.location.href="/SignUp"}} > Sign Up </Link>
      </div>
    </header>
    )
  }
  
  export default navbar