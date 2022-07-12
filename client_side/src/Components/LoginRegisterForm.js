import React, { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { doLogIn, doRegistration } from "../Redux/Actions/logInRegisterActions.js";
import "./ComponentsStyle/LoginRegisterForm.css";


const LoginRegisterForm = ({title, doLogIn, doRegistration}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickName, setNickName] = useState('');
    const [fullName, setFullName] = useState('');


    const navigate = useNavigate();

    const handleAction = async (title) => {

        title === "REGISTRATION" ? doRegistration(email, password, nickName, fullName, navigate) : doLogIn(email, password, navigate)
    }

    return(
        <>
            <div>
                <div>
                    <img src={`${process.env.REACT_APP_LOGO_IMG_URL}`} alt={"checked_Logo"} id={"logo-img-intro"}/>
                    <h1>IVOverflow</h1>
                    <h3>{title} FORM</h3>
                </div>
                <Box component='form' sx={{m:1}} noValidate autoComplete="off">
                    <TextField onChange={(e)=>setEmail(e.target.value)} sx={{m:1}} id='email' label='Enter the email' />
                    <TextField onChange={(e)=>setPassword(e.target.value)} sx={{m:1}} id='password' label='Enter the password' />
                    {title === "REGISTRATION" ?
                        <div>
                            <TextField onChange={(e)=>setNickName(e.target.value)} sx={{m:1}} id='nickName' label='Enter your nickName' />
                            <TextField onChange={(e)=>setFullName(e.target.value)} sx={{m:1}} id='fullName' label='Enter your Full Name' />
                        </div>
                    :
                        null
                    }
                </Box>
                <Button onClick={()=>handleAction(title)} variant="contained">{title}</Button>
            </div>
            <div>
                {title === "REGISTRATION" ? <Link to="/login">Login</Link> : <Link to="/register">Register</Link>}
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {

    return {

        doLogIn : (email, password, navigate) => dispatch(doLogIn(email, password, navigate)),
        doRegistration : (email, password, nickName, fullName, navigate) => dispatch(doRegistration(email, password, nickName, fullName, navigate))
    }
}

export default connect(null, mapDispatchToProps)(LoginRegisterForm);