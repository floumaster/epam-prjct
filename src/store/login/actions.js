export const loginActionTypes = {
    SET_LOGIN_INFO: 'LOGIN.SET_LOGIN_INFO',
    SET_REGISTER_INFO: 'LOGIN.SET_REGISTER_INFO',
}

export const loginActions = {
    setLoginInfo: (payLoad) => ({type: loginActionTypes.SET_LOGIN_INFO, payLoad}),
    setRegisterInfo: (payLoad) => ({type: loginActionTypes.SET_REGISTER_INFO, payLoad})
}
