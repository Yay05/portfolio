import { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ContactForm = () => {

  const [formData, setFormDta] = useState(
    { name: "", email: "",note : ""}
)

function handleChange(event) {
    const { name, value } = event.target
    setFormDta(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
}

console.log(formData)
const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.name === '') {
      document.getElementById('error').innerHTML = 'Please Enter your name';
      return false;
    } else if (formData.email === '') {
      document.getElementById('error').innerHTML = 'Please Enter your email';
      return false;
    } else if (formData.note === '') {
      document.getElementById('error').innerHTML = 'Please Enter your message';
      return false;
    }
   
    axios.post('http://localhost:5000/form', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

};

  return (
    <div className='form'>
      <form className="msg"  onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="name" 
          placeholder="Name" 
          name="name"
          onChange={handleChange}
          value={formData.name}
         />

        <input 
          type="email" 
          id="email" 
          placeholder="Email" 
          name="email" 
          onChange={handleChange}
          value={formData.email}
          />
          <br />

        <textarea 
          id="note"   
          placeholder="Message" 
          name="note"
          onChange={handleChange}
          value={formData.message}
          /><br />
        <button type="submit" id="button2">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
