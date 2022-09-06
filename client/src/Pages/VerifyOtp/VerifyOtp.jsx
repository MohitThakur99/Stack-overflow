import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./VerifyOtp.css"
import icon from "../../assets/stack-overflow-brands.svg"
import { verifyotp } from '../../actions/auth'

const VerifyOtp = () => {

    const [phoneNumber, setPhoneNumber] = useState('')
    const [otp,setOtpValue] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmitOtp = (e) => {
        e.preventDefault();
        if(!phoneNumber || !otp){
          alert('Enter details to continue')
        } else {
          dispatch(verifyotp({ phoneNumber, otp }, navigate));
        }
    }

  return (
    <section className='auth-section'>
      <div className='auth-container-2'>
        <img src={icon} style={{width: "13px"}} alt="stack overflow" className='login-logo' />  

          <form onSubmit={handleSubmitOtp}>
            <label htmlFor="phoneNumber">
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <h4>Re-enter Mobile no</h4>
              </div>
              <input type="text" name="phoneNumber" id="phoneNumber" onChange={(e) => {setPhoneNumber(e.target.value)}} />
            </label>
            <label htmlFor="otp">
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <h4>Enter OTP</h4>
              </div>
              <input type="text" name="otp" id="otp" onChange={(e) => {setOtpValue(e.target.value)}} />
            </label>
            <button type='submit' className='auth-btn'>Verify Otp</button>
          </form>
      </div>
    </section>
  )
}

export default VerifyOtp