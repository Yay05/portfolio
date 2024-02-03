import '../App.css';
import {  Link } from "react-router-dom";
import aceImage from '../images/ace.jpg'

const About = () => {
    return (
        <div className="about" >
        <div className="aboutimg"> <img src={aceImage} alt="img"  style={{ height: '200px', width: '200px' }} /></div>
        <div className="about1">
            <p className="p3">FEBIN <span>BIJU</span></p>
            <p className="p4">Web Developer</p>
            <p className="p5">
                I am Febin Biju, a devoted and enthusiastic web developer with a strong commitment to my work. My
                aspiration is to become an integral part of an organization where I can harness my skills and abilities
                to not only contribute to the growth of the company but also to nurture my own professional development.
            </p>
            <Link to="/Cv"><button id="button1"> Learn More</button></Link>
         

     
        </div>

    </div>
    )
  };
  
  export default About;