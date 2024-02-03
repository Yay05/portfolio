import Form from '../routes/form'
import '../App.css';
import location from '../images/location.png'
import phone from '../images/phone-call.png'
import gmail from '../images/gmail.png'
import linkedin from '../images/linkedin.png'

const Contact = () => {
    return (
        <div className="contact" id="contact">
        <p className="p6">Get in <span>Touch</span></p>
        
        <div className="contact-details">
            <div className="address"><img src={location} />Pulickal House,Mankuva p.o,Mankuva</div>
            <div className="ph1"><img src={phone} />9605782752</div>
            <div className="gmail"><img src={gmail} />febinbiju0507@gmail.com</div>
            <div className="linkedin"><img src={linkedin} />https://www.linkedin.com</div>
        </div>
       <Form  />
    </div>
    )
  };
  
  export default Contact;