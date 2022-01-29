import { useState } from 'react';
import styled from 'styled-components';
//email JS
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactInfo from './ContactInfo';
//REACT ICONS
import { BiError } from 'react-icons/bi';

const ContactForm = () => {
  const [formValidation, setFormValidation] = useState(false);
  const [nameValidation, setNameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [messageValidation, setMessageValidation] = useState(false);
  //EMAIL JS
  const form = useRef(null);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wm8y8eo',
        'template_8mqb8d4',
        e.target,
        'user_l63HFouUVaxbBVgQdO1Td'
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormValidation(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function validateForm(e) {
    // console.log(form.current[0]); //name
    function validateName() {
      if (form.current[0].value == '') {
        setNameValidation(true);
        return false;
      } else {
        setNameValidation(false);
      }
    }
    function validateEmail() {
      if (
        form.current[1].value
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        setEmailValidation(false);
      } else {
        setEmailValidation(true);
      }
    }
    function validateMessage() {
      if (form.current[3].value == '') {
        setMessageValidation(true);
      } else {
        setMessageValidation(false);
      }
    }
    validateName();
    validateEmail();
    validateMessage();
    // let emailID = form.current[1].value;
    // const re =
    //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // console.log(emailID); //email
    // if (emailID == '') {
    //   setEmailValidation(false);
    // } else {
    //   setEmailValidation(true);
    // }

    // console.log(form.current[3]); //message
  }

  return (
    <StyledFormContainer>
      <StyledContactForm>
        <h1>Let's Chat!</h1>
        <p>
          Please use this form to contact me and I will get back to you ASAP!
        </p>
        <StyledForm ref={form} onSubmit={sendEmail} action='' novalidate>
          <div className='form-group'>
            <label htmlFor='user_name'>
              {nameValidation ? (
                <div className='validation-popup'>
                  <BiError size={15} />
                  <p>New phone who dis?</p>
                </div>
              ) : (
                <>
                  <span>*</span>Name <span className='required'>Required</span>
                </>
              )}
            </label>
            <input
              type='text'
              name='user_name'
              placeholder='Enter Name or Alias'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='user-email'>
              {emailValidation ? (
                <div className='validation-popup'>
                  <BiError size={15} />
                  <p>I won't send you spam</p>
                </div>
              ) : (
                <>
                  <span>*</span>Email <span className='required'>Required</span>
                </>
              )}
            </label>
            <input
              type='email'
              name='user_email'
              placeholder='Enter a valid email address'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='user_subject'>Subject</label>
            <input
              type='text'
              name='user_subject'
              placeholder='Enter brief description'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>
              {messageValidation ? (
                <div className='validation-popup'>
                  <BiError size={15} />
                  <p>Don't be shy ;)</p>
                </div>
              ) : (
                <>
                  <span>*</span>Message{' '}
                  <span className='required'>Required</span>
                </>
              )}
            </label>
            <textarea
              name='message'
              required
              placeholder='There is no characer limit because im lonely...'
              rows='5'
            />
          </div>
          <div className='form-group submit-group'>
            <input onClick={validateForm} type='submit' value='Send' />
          </div>
          {formValidation && <StyledStatus id='status'>Success</StyledStatus>}
        </StyledForm>
      </StyledContactForm>
      <ContactInfo />
    </StyledFormContainer>
  );
};

export default ContactForm;

const StyledFormContainer = styled.div`
  flex: 2;
  display: flex;
  height: 100%;
  padding: 3rem 5rem;
  gap: 5rem;
`;
const StyledContactForm = styled.div`
  /* height: calc(90vh - 10rem); */
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.5;
  h1 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    white-space: nowrap;
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const StyledForm = styled.form`
  height: 100%;

  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0;
    color: white; /* font-size: 1.5rem; */
    label {
      font-weight: 600;
    }

    span {
      /* color: red; */
      margin-right: 0.7rem;
      font-size: 0.95rem;
    }
    .required {
      margin-left: 2rem;
    }
    .validation-popup {
      display: flex;

      gap: 1rem;
      /* margin-top: 0.5rem;
      margin-left: 1rem; */

      border-radius: 8px;
      color: red;
      /* background-color: red; */
      /* span {
        color: white;
        margin-left: 1rem;
        font-weight: 600;
      } */
      p {
        margin: 0;
        font-weight: 500;
        color: red;
        font-size: 1rem;
      }
    }
  }
  .submit-group {
    margin: 0;
    input {
      color: grey;
    }
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.7rem 1rem;
    border-radius: 3px;
    /* font-size: 1.5rem; */
    border: 1px solid #6d6d6d;
    margin-top: 5px; //LINE GAP INPUT AND LABEL
  }
  textarea {
    border-radius: 3px;
    resize: vertical;
  }
  button[type='submit'] {
    width: 100%;
    border: none;
    outline: none;
    padding: 20px;
    border-radius: 8px;
    background-color: black;
  }
`;

const StyledStatus = styled.div`
  border: 3px solid red;
  width: 100%;
  text-align: center;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 8px;
  .success {
    background-color: rgb(211, 250, 153);
  }
  .error {
    background-color: rgb(250, 129, 92);
  }
`;

const StyledContactInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
