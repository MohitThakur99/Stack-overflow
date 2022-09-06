import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import icon from "../../assets/stack-overflow-brands.svg"
import "./SendOtpOnEmail.css"
import { sendOtpEmail } from '../../actions/auth'

const SendOtpOnEmail = () => {

    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email){
            alert('Enter an email')
        }
        dispatch(sendOtpEmail({ email }, navigate))
    }

    const backtologin = () => {
      navigate('/Auth')
    }
    
    return (
    <section className='auth-section'>
      <div className='auth-container-2'>
        <img src={icon} style={{width: "13px"}} alt="stack overflow" className='login-logo' />  
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <h4>Email</h4>
              </div>
              <input type="email" name="email" id="email" placeholder='abc@gmail.com' onChange={(e) => {setEmail(e.target.value)}} />
            </label>
            <button type='submit' className='auth-btn'>Send OTP</button><br/>
            <button type='button' className='handle-switch-btn' onClick={backtologin}>Back to LogIn</button>
          </form>
      </div>
    </section>
  )
}

export default SendOtpOnEmail