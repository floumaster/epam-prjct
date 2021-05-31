import React, {useContext} from 'react';
import Context from '../context'
import {useDispatch} from "react-redux"
import { loginActions } from '../../store/login/actions';
import './Login.scss'

function Login(){
    const dispatch = useDispatch();
    const setLoginInfo = (info) => dispatch(loginActions.setLoginInfo(info));
    const {closePopUp, loginRef, loginLoaderRef, errorRef} = useContext(Context);
    return(
        <div className="popup-login hidden" ref={loginRef}>
            <form className="login-form" onSubmit={(e)=>{
                e.preventDefault();
                const fields = [];
                let formElements = e.target.elements; 
                for (var i=0; i<formElements.length; i++){
                    if (formElements[i].type==="text" || formElements[i].type==="password"){
                        fields.push(formElements[i].value);
                        formElements[i].value = '';
                    }
                }
                const loginInfo = {
                    login: fields[0],
                    password: fields[1]
                }
                setLoginInfo(loginInfo)
            }}>
                <button className="close-btn" onClick={(e)=>{
                    e.preventDefault();
                    closePopUp(loginRef)}}>x</button>
                <h2 className="login-form-title">Login</h2>
                <label className="login-form-label">Username</label>
                <input className="login-form-input" type="input"/>
                <label className="login-form-label" >Password</label>
                <input className="login-form-input" type="password"/>
                <div ref={loginLoaderRef} className="lds-roller transpanent"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <p ref={errorRef} className="error transpanent">Login or password is not correct</p>
                <button className="login-form-submit" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;