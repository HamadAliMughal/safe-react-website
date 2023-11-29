import React, { useState, useEffect } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'

import {
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBCol,
  MDBRow,
  MDBFile,
  MDBTextArea,
  MDBValidation,
  MDBValidationItem,
  MDBInputGroup

} from 'mdb-react-ui-kit';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

import './SSF.css';

const checkFlags = Array.apply(null,Array(5)).map(Boolean.prototype.valueOf,false);



const SuccessStoriesForm = () => {
  const [value, setValue] = useState()
  const [formValue, setFormValue] = useState({
    fname: '',
    lname: '',
    email: '',
    phn: '',
    story: '',
    terms: false,
    
  });

  useEffect(() => {
    if(phonenumber(value)){
      setFormValue({...formValue,phn:value});
    }
  }, [value]);

  const onChange1 = (e) => {
    const checkbox = document.getElementById("invalidCheck");
    console.log(value);
    console.log(formValue);

    if (checkbox.checked) {
      setFormValue({ ...formValue, [e.target.name]: true });
    }
    else {
      setFormValue({ ...formValue, [e.target.name]: false });
    }
  };

  const validateImage = (e) => {
    console.log(e.target.required);
    if (e.target.required) {
      checkFlags[3] = true;
    }
    else {
      checkFlags[3] = false;
    }
  }

  const validateMsg = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    if (e.target.value.length > 30) {
      e.target.required = true;
      document.getElementById('sstory').style.display = 'block';
      document.getElementById('sstory').style.color = '#006400';
      document.getElementById('sstory').innerHTML = `Number of letters :  ${e.target.value.length}/30`;

    }
    else {
      e.target.required = false;
      document.getElementById('sstory').style.display = 'block';
      document.getElementById('sstory').style.color = '#FF0000';
      document.getElementById('sstory').innerHTML = `Number of letters :  ${e.target.value.length}/30`;
      checkFlags[4]=false;
    }
  }


  const validateName = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    let flag = false;
    let Name = e.target.value;
    for (let index = 0; index < Name.length; index++) {
      if (Name[index] >= '0' && Name[index] <= '9' || Name[index] == ' ') {
        if (e.target.name === 'fname') {
          document.getElementById('name_pane').style.display = 'block';
          document.getElementById('name_pane').innerHTML = "Name is Invalid";
          checkFlags[0]=false;
        }
        else {
          document.getElementById('lname_pane').style.display = 'block';
          document.getElementById('lname_pane').innerHTML = "Partner's Name is Invalid";
          checkFlags[1]=false;
        }
        flag = false;
      
        break;
      }
      else {
        if (e.target.name === 'fname') {
          document.getElementById('name_pane').style.display = 'none';
          checkFlags[0]=true;
        }
        else {
          document.getElementById('lname_pane').style.display = 'none';
          checkFlags[1]=true;
        }
        flag = true;
        
      }
    }
    
    return flag;
  }

  function phonenumber(val) {
  
   if(typeof(val)==='undefined'){
    return false;
   }
    else if (val.length >=10 && val.length <=15)
        {
          document.getElementById('phnNo').style.display = 'none';
          checkFlags[2]=true;
      return true;
    }
    else {
      document.getElementById('phnNo').style.display = 'block';
      document.getElementById('phnNo').innerHTML = "Phone No is Invalid";
      checkFlags[2]=false;
      return false;
    }
  }


  const onSubmit = (e) => {

    if (formValue.terms && checkFlags[0] && checkFlags[4]) {
      e.preventDefault();
      console.log(formValue);
      return false;
    }
    else {
      alert('Invalid or empty data');
      return true;
    }
      //  e.preventDefault();
      // console.log(formValue);
  }

  return (
    <div style={{backgroundColor:'rgb(238, 233, 218)'}}>
      <Navbar />
      <div>
        <br></br>
        <h1 className='ssf-head-text'>Contact Us </h1>
      
        <hr />
        <br />

      </div>

      <section className='ssf-section'>
        <MDBRow>
          <MDBCol className='col-lg-2'></MDBCol>
          <MDBCol className='col-12 col-lg-4'>
            <img className='col-12' src="/img/ssf-img.png" alt="" />
          </MDBCol>
          <MDBCol className='col-12 col-lg-4'>
            <MDBValidation className='row g-3' isValidated>

              <MDBValidationItem feedback='' className='col-md-12'>
                <MDBInput
                  value={formValue.fname}
                  name='fname'
                  onChange={validateName}
                  id='validationCustom01'
                  required
                  label='Name'
                  className='my-0'
                />
              </MDBValidationItem>
              <p id='name_pane' className='text-danger mt-0' style={{ display: "none" }}></p>
              <MDBValidationItem feedback='' className='col-md-12'>
                <MDBInput
                  value={formValue.lname}
                  name='lname'
                  onChange={validateName}
                  id='email'
                  required
                  label="Email"
                  className='my-0'
                />
              </MDBValidationItem>
              <p id='lname_pane' className='text-danger mt-0' style={{ display: "none" }}></p>
              <MDBValidationItem feedback="" invalid className='col-md-12'>
                {/* <MDBInputGroup textBefore='@'>
                  <input
                    type='text'
                    className='form-control my-0'
                    id='validationCustomUsername'
                    placeholder='Username'
                    required
                  />
                </MDBInputGroup> */}
              </MDBValidationItem>
              <MDBValidationItem id='phoneNoValid' feedback=''>
              <PhoneInput
              label='Phone Number'
              international
              countryCallingCodeEditable={false}
              name='phn'
                 placeholder="Enter phone number"
                 value={value}
                 onChange={setValue}
                
                 error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
        
                
                 />
                 
              </MDBValidationItem>
              <p id='phnNo' className='text-danger mt-0' style={{ display: "none" }}></p>
           
              <div>
                <MDBTextArea value={formValue.story} name='story' onChange={validateMsg} label='Your Message' id='textAreaExample' rows={5} required />
              </div>
              <p id='sstory' className='mt-0' style={{ display: "none" }}></p>
              {/* <MDBValidationItem feedback="You Must Agree" invalid>
                <MDBCheckbox label='Agree to terms and conditions' name='terms' onChange={onChange1} id='invalidCheck' required />
              </MDBValidationItem> */}
              <div className='col-12'>
                <MDBBtn type='submit' onClick={onSubmit}>Submit form</MDBBtn>
              </div>
            </MDBValidation>
          </MDBCol>

          <MDBCol className=' col-12 col-lg-4'></MDBCol>
        </MDBRow>
      </section>
      <hr />
      <br /><br />
      <Footer />
    </div>
  );
}

export default SuccessStoriesForm