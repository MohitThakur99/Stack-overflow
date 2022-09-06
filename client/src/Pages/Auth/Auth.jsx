import React, { useState } from 'react'
import "./Auth.css"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import icon from "../../assets/stack-overflow-brands.svg"
import AboutAuth from './AboutAuth'
import { signup, login, sendOtp } from '../../actions/auth'

const Auth = () => {

  const [otpSendPage, setOtpSendPage] = useState(false)

  const [isSignup, setIsSignUp] = useState(false);

  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSwitch = () => {
    setIsSignUp(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email && !password) {
      alert('Enter email and password')
    }
    if(isSignup){
      if(!name) {
        alert('Enter a name to continue')
      }
      dispatch(signup({ name, phoneNumber, email, password}, navigate))
    } else {
      dispatch(login({ email, password}, navigate))
    }
  }

  const handleOtp = () => {
    setOtpSendPage((state) => !state)
  }

  const handeleSendOtpSubmit = (e) => {
    e.preventDefault()
    if(!phoneNumber) {
      alert('Enter phoneNumber')
    }
    dispatch(sendOtp({ phoneNumber }, navigate))
  } 

  const handleSendOtpOnEmail = (e) => {
    e.preventDefault()
    navigate('/SendOtpOnEmail')
  }

  return (
    <section className='auth-section'>
      { isSignup && <AboutAuth />}
      <div className='auth-container-2'>
        { !isSignup && <img src={icon} style={{width: "13px"}} alt="stack overflow" className='login-logo' /> }        
        { !otpSendPage && (
          <form onSubmit={handleSubmit}>
            { isSignup && (
              <label htmlFor='name'>
                <h4>Display Name</h4>
                <input type="text" id='name' name='name' onChange={(e) => {setName(e.target.value)}} />
              </label>)
            }
            {
              isSignup && (
                <label htmlFor='phoneNumber'>
                  <h4>Enter phone number</h4>
                  <input type="text" id='phoneNumber' name='phoneNumber' onChange={(e) => {setPhoneNumber(e.target.value)}} />
              </label>
              )
            }
            <label htmlFor="email">
              <h4>Email</h4>
              <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}} />
            </label>
            <label htmlFor="password">
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <h4>Password</h4>
                { !isSignup && (
                  <button type='button' className='handle-switch-btn' onClick={handleOtp}>Login via OTP</button>
                )}
              </div>
              <input type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value)}} />
              { isSignup && (
                  <p style={{color: "#666767", fontSize: "13px"}}>
                   Passqwords must contain at least eight<br />
                   characters, including atleast 1 letter and 1 <br />
                   number
                  </p>)
              }
            </label>
            { isSignup && (
              <label htmlFor='check'>
                <input type="checkbox" id='check' />
                <p style={{fontSize: "13px"}}>Opt-in to recieve occasional <br /> 
                  product updates,user search invitations <br />
                  company announcements and digests.
                </p>
              </label>)
            }
            { !otpSendPage && (
              <button type='submit' className='auth-btn'>{ isSignup ? "Sign up" : "Log in"}</button>
            )}
            {
              isSignup && (
              <p style={{color: "#666767", fontSize: "13px"}}>
                  By clicking "Sign up", you agree to our 
                  <span style={{color: "#007ac6"}}>terms of <br />service</span>, 
                  <span style={{color: "#007ac6"}}>privacy policy</span> and 
                  <span style={{color: "#007ac6"}}>cookie policy</span>
                </p>
              )
            }
          </form>
        )}
        { otpSendPage && (
          <form onSubmit={handeleSendOtpSubmit}>
            <label htmlFor='phoneNumber'>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <h4>Phone number</h4>
              </div>
              <input type="text" name="phoneNumber" id="phoneNumber" placeholder='Enter 1892818678' onChange={(e) => {setPhoneNumber(e.target.value)}}/>
            </label> 
              <button type='submit' className='auth-btn'>Send OTP</button>
          </form> 
        )}
        { !otpSendPage && (
          <p>
            { isSignup ? "already have an account?" : "Don't have an account?"}
            <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Log in" : "Sign up"}</button>
          </p>
        )}
        { otpSendPage && (
            <div>
              <button type='button' className='handle-switch-btn' onClick={handleOtp}>Back to LogIn</button>
              <button type='button' className='handle-switch-btn' onClick={handleSendOtpOnEmail}>Send OTP on Email</button>
            </div>
        )}
      </div>
    </section>
  )
}

export default Auth