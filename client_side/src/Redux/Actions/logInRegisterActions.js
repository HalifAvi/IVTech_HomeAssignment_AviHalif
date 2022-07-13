import {

    LOG_IN,
    REGISTER,
    RETRIVE_USERS_DATA

} from '../reduxConstants';

import axios from 'axios';
import {toast} from "react-toastify";
import jwt_decode from 'jwt-decode';




export const doLogIn = (email, password, navigate) => async (dispatch) => {

    try{

        let response = await axios.post(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_LOGIN_URL}`,{
            email: email, 
            password: password
        },{

            withCredentials: true,
            headers: {

                'Access-Control-Allow-Origin' : '*',
                'Content-Type' : 'application/json'
            }
        })

        const accessToken = response.data;

        dispatch({
    
            type: LOG_IN,
            payload: accessToken
        })

        // Navigate to home in case login successfuly
        navigate('/home');

    }
    catch(e){

        console.log(e);
        toast.error(e.response.data.msg);
    }
}



export const doRegistration = (email, password, nickName, fullName, navigate) => async (dispatch) => {

    try{ 

        await axios.post(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_REGISTER_URL}`,{
            
            email: email, 
            password: password,
            nickname : nickName,
            fullname : fullName
        },{

            withCredentials: true,
            headers: {

                'Access-Control-Allow-Origin' : '*',
                'Content-Type' : 'application/json'
            }
        })

        dispatch({
    
            type: REGISTER
        })

        // Navigate to login in case the registration successfuly
        navigate('/login');
    }
    catch(e) {

        console.log(e);
        toast.error(e.response.data.msg);
    }
}


export const retriveUsersDataFromAccessToken = () => async (dispatch, getStatus) => {

    let {accessToken} = getStatus().logInRegisterReducer;

    // Retrive the user's data from accessToken
    let decode = jwt_decode(accessToken.accessToken);

    dispatch ({

        type: RETRIVE_USERS_DATA,
        payload: decode
    })
}



