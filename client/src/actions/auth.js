import * as api from "../api"
import { setCurrentUser } from "./currentUser"

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        dispatch({type: 'AUTH', data});
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({type: 'AUTH', data});
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const verifyotp = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.verifyOtp(authData);
        dispatch({ type: 'AUTH', data});
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
        navigate('/');
    } catch (error) {
        console.log("this is an error here in actions");
    }
}

export const sendOtp = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.sendOtp(authData);
        dispatch({ type: 'SEND_OTP', data});
        navigate('/VerifyOtp');
    } catch (error) {
        console.log(error);
    }
}

export const sendOtpEmail = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.sendOtpEmail(authData);
        dispatch({ type: 'SEND_OTP_EMAIL', data});
        navigate('/VerifyOtpEmail');
    } catch (error) {
        console.log(error);
    }
}

export const verifyotpemail = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.verifyOtpEmail(authData);
        dispatch({ type: 'AUTH', data});
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
        navigate('/');
    } catch (error) {
        console.log("this is an error here in actions");
    }
}
