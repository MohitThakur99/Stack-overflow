import React from 'react'

import { Routes, Route } from "react-router-dom"

import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from './Pages/AskQuestion/AskQuestion';
import DisplayQuestion from './Pages/Questions/DisplayQuestion';
import Tags from './Pages/Tags/Tags';
import Users from './Pages/Users/Users';
import UserProfile from './Pages/UserProfile/UserProfile';
import VerifyOtp from './Pages/VerifyOtp/VerifyOtp';
import SendOtpOnEmail from './Pages/SendOtpOnEmail/SendOtpOnEmail';
import VerifyOtpEmail from './Pages/VerifyOtpEmail/VerifyOtpEmail';
import Location from './Pages/Location/Location';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Auth' element={<Auth />} />
        <Route path='/Questions' element={<Questions />} />
        <Route path='/AskQuestion' element={<AskQuestion />} />
        <Route path='/Questions/:id' element={<DisplayQuestion />} />
        <Route path='/Tags' element={<Tags />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/Users/:id' element={<UserProfile />} />
        <Route path='/VerifyOtp' element={<VerifyOtp />} />
        <Route path='/SendOtpOnEmail' element={<SendOtpOnEmail />} />
        <Route path='/VerifyOtpEmail' element={<VerifyOtpEmail />} />
        <Route path='/Location' element={<Location />} />
    </Routes>
  )
}

export default AllRoutes;
