import './Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar'; // Use "Navbar" with an uppercase "N"

function Home() {
  return (
    <> 
      <Navbar /> 
      <h1>Home Page</h1>
    </>
  );
}

export default Home;