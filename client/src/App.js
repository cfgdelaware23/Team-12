import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';




//pages and components
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import VolunteerSignUp from './pages/VolunteerSignUp'
import CreateEvent from './pages/CreateEvent'
import Profile from './pages/Profile'
import Email from './pages/Email'

function App() {
return (
<div className="App">
<BrowserRouter>
<div className="pages">
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/Login" element={<Login />}/>
<Route path="/SignUp" element={<SignUp />}/>
<Route path="/VolunteerSignUp" element={<VolunteerSignUp />}/>
<Route path="/CreateEvent" element={<CreateEvent />}/>
<Route path="/Profile" element={<Profile />}/>
<Route path="/Email" element={<Email />}/>
</Routes>
</div>
</BrowserRouter>
</div>
);
}


export default App;


