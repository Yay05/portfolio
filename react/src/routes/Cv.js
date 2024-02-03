import "../cv.css"

import febin from '../images/febin.jpg'
import envelope from '../images/envelope-solid.svg'
import phone from '../images/phone-solid.svg'
import location from '../images/location-dot-solid.svg'
import calendar from '../images/calendar-days-regular.svg'
import earth from '../images/earth-americas-solid.svg'
import brain from '../images/brain-solid.svg'
import folder from '../images/folder-solid.svg'
import file from '../images/file-solid.svg'
import users from '../images/users-solid.svg'
import pen from '../images/pen-solid.svg'


const Cv = () => {
  return (
   <div>
    <div className="main">
        <div className="container1">
            <div className="profile"><img id="image" src={ febin } alt="profilepic"  style={{height: '180px', width: '160px'}} /></div>
            <div>
                <div className="name">
                    <p>Febin Biju</p>
                </div>
                <div><span className="mail"><img id="mail" src={envelope}  alt='envelope' style={{height : '15px', width: '20px'}} />
                        febinbiju0507@gmail.com</span> <span className="ph"><img src={ phone } alt="profilepic"  style={{height: '10', width: '10px'}}
                           /> 9605782752</span></div>
                <div><span className="add"><img  src={ location } alt="profilepic"  style={{height: '10', width: '10px'}}
                            />Pulickal House,Mankuva p.o Mankuva</span><span className="dob"><img
                            src={ calendar } alt="profilepic"  style={{height: '10', width: '10px'}} />05/07/2001</span>
                </div>

            </div>

        </div>
        <div className="container2">
            <div className="OBJECTIVE"><b><img  src={ earth } alt="profilepic"  style={{height: '10', width: '10px'}} />CAREER
                    OBJECTIVE</b></div>
            <div className="OBJECTIVE1">To be a part of organization where I can rise to my full potential and use my
                talents and skills to expand the growth of
                the organization and myself.</div>

            <div className="edu"><img  src={ envelope } alt="profilepic"  style={{height: '10', width: '10px'}}/>EDUCATION</div>
            <div className="year1"><span> 2019-2023</span><span className="details1"><b>B.Tech in Computer Science and
                        Engineering</b>
                    <span className="details2"><div style={{marginLeft : '120px'}}>Mar Baselios Institute of Technology and Science, Nellimattom.</div></span>
                    <span className="details2">cgpa : 6.67</span>
                </span></div>

            <div className="year2"><span>2017-2019</span><span className="details1"><b>Bio-Maths</b>
                    <span className="details2"><div  style={{marginLeft : '120px'}}>St.Mary's Higher Secondary School ,Murickassery</div></span>
                    <span className="details2">Mark: 80%</span>
                </span></div>
            <div className="skills"><img  src={ brain } alt="profilepic"  style={{height: '10', width: '10px'}} height="14px" width="20px" />TECHNICAL SKILLS</div>
            <div className="skill1">
                <ul>
                    <li>Programming skill:<span>Basics of C, python, html and CSS</span></li>
                    <li> Software Known : <span> MS Word, MS Excel, Power Point, Visual Studio Code</span></li>
                </ul>
            </div>

            <div className="pro"><img src={ folder } alt="profilepic"  style={{height: '10', width: '10px'}}/>ACADEMIC PROJECT</div>
            <div className="pro1"><b>Mini Project : College Event Management system</b>
                <div className="pro11">It is a mobile application developed for managing events in a college. This
                    application is developed using Flutter. This
                    application allows the user to view, register and see the results of events. The user can also view
                    the previous events
                    conducted in the college. The results can be downloaded into a pdf.</div>

            </div>
            <div className="pro2"><b>Final Year Project : Sewer Defect Detection</b>
                <div className="pro22">It is a mobile application developed for finding defects in a sewer system. This
                    application is developed using Flutter.
                    This application accepts a video as input. The video is converted into images. Then the defects are
                    detected by using
                    Yolo v5. Then the location of defects is extracted from the detected frames. The detected defects
                    can be downloaded
                    into a pdf.
                </div>

            </div>
            <div className="internship"><img  src={ file } alt="profilepic"  style={{height: '10', width: '10px'}}  />INTERNSHIP</div>
            <div className="internship1">
                <ul>
                    <li>Web Application Development in .NET <span> under Inspirisys Advanced IT Skills Training
                            Program</span></li>
                </ul>
            </div>
            <div className="ref"><b> <img  src={ users } alt="profilepic"  style={{height: '10', width: '10px'}} />REFERENCE</b></div>
            <div className="ref1"><span><b>Midhun Mathew,</b><i> HOD CSE MBITS</i></span>
                <div>8157999636</div>
            </div>
            <div className="dec"><b> <img  src={ pen } alt="profilepic"  style={{height: '10', width: '10px'}} />DECLARATION</b></div>
            <div className="dec1"><span>I hereby declare that all the information furnished above is true to the best of my
                    knowledge.</span>
                <div className="line">
                    
                </div>
                <div className="n1">Febin Biju</div>
                <div className="n2">Mankuva</div>
            </div>
        </div>
    </div>

   </div>
  );
}

export default Cv;
