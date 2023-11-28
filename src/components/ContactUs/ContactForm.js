import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBValidation,
  MDBValidationItem

} from 'mdb-react-ui-kit';

import { Link, useNavigate } from "react-router-dom";
import { send } from 'emailjs-com';
import { useState } from 'react';

const checkFlags = Array.apply(null,Array(3)).map(Boolean.prototype.valueOf,false);
export default function ContactForm() {
  const [inputs, setInputs] = useState({
    Name:"",
    Email:"",
    Msg:""
  });
  const navigate = useNavigate();

  const sendEmail=(e)=> {
  
      e.preventDefault();
      send(
        'service_1ux85mk',
        'template_95domwm',
        inputs,
        'FgC4BNxZ_WUTzSBW0'
      ).then((response)=> {
        console.log('Message Sent Successfuly', response.status , response.text)
  
        alert('Your Email Sent to the Authorities Thanks For The Email');
        navigate('/',{replace:true});
      })
      .catch((err)=>{
        console.log('Failed',err)
      })
 
    

  }


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
    if (value.length > 15) {
    
      checkFlags[2] = true;

    }
    else {
     
      checkFlags[2] = false;
    }

  }
  const handleSubmit = (event) => {
   
    if(checkFlags[0]&& checkFlags[1] && checkFlags[2])
    {
    event.preventDefault();
    console.log(inputs);
    }
    else{
      alert("Invalid Data Enter Please Recheck your data");
    }
   
  }

  function ValidateEmail(e) 
  {
  
    setInputs({ ...inputs, [e.target.name]: e.target.value });
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
    {
      document.getElementById('email_pane').style.display = 'none';
      checkFlags[1] = true;
      return true;
    }
     
    document.getElementById('email_pane').style.display = 'block';
    document.getElementById('email_pane').innerHTML = "Email is Invalid";
    checkFlags[1] =false;
      return false;
  }

  const validateName = (e) => {
    console.log(e.target.name);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    let flag = false;
    let Name = e.target.value;

    for (let index = 0; index < Name.length; index++) {
      if (Name[index] >= '0' && Name[index] <= '9' || Name[index] == ' ') {
   
          document.getElementById('name_pane').style.display = 'block';
          document.getElementById('name').style.borderBlockColor = "red";
          document.getElementById('name_pane').innerHTML = "Name is Invalid";
        flag = false;
        break;
      }
      else {
        
          document.getElementById('name_pane').style.display = 'none';
       
        flag = true;
      }
    }
    checkFlags[0]=flag;
    return flag;
  }

  return (
    
       <MDBValidation className='row g-3' isValidated>

<MDBValidationItem feedback='' className='col-md-12'>
  <MDBInput
    value={inputs.Name}
    name='Name'
    onChange={validateName}
    id='name'
    required
    label='Name'
    className='my-0'
  />
</MDBValidationItem>
<p id='name_pane' className='text-danger mt-0' style={{ display: "none" }}></p>
      {/* <MDBInput required id='form4Example1' wrapperClass='mb-4' label='Name' name='Name' value={inputs.Name || ""} onChange={handleChange} /> */}
    <MDBValidationItem><MDBInput  type='email' id='email' wrapperClass='mb-4' label='Email address' name='Email' value={inputs.Email || ""} required onChange={ValidateEmail} /></MDBValidationItem>  
      <p id='email_pane' className='text-danger mt-0' style={{ display: "none" }}></p>
      <MDBInput required wrapperClass='mb-4' textarea='true' id='form4Example3' rows={4} label='Message' name='Msg' value={inputs.Msg || ""} onChange={handleChange} />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this message'
        defaultChecked
      />
      <Link  to="/" role={"button"}>
      <MDBBtn type='submit' className='mb-4' block onClick={sendEmail}>
        Submit
      </MDBBtn>
      </Link>
   
      </MDBValidation>
     
   
  );
}