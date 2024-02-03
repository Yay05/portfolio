import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container" id="container">
        <p className="p1">FEBIN <span>BIJU</span></p>
        <p className="p2">Web Developer</p>
        <button id="button" ><Link style={{textDecoration:'none',color: 'inherit'}} to="/contact">Get in Touch</Link></button>
        </div>
    )
  };
  
  export default Home;