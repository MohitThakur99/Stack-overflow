const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('Profile', JSON.stringify({ ...action?.data}))
            return { ...state, data: action?.data }
        case 'LOGOUT':
            localStorage.clear();
            return { ...state, data: null};
        case 'SEND_OTP':
                return { data: action?.data };
        case 'SEND_OTP_EMAIL':
                return { data: action?.data };
        default:
            return state;
    }
}

export default authReducer