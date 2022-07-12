import {

    LOG_IN,
    REGISTER

} from '../reduxConstants';

import axios from 'axios';
import {toast} from "react-toastify";




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

        console.log("login response", response);

        // dispatch({
    
        //     type: LOG_IN,
        //     payload: response
        // })

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

        let response = await axios.post(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_REGISTER_URL}`,{
            
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

        console.log("register response", response);

                // dispatch({
    
                //     type: LOG_IN,
                //     payload: response
                // })

                // Navigate to login in case the registration successfuly
                navigate('/login');
    }
    catch(e) {

        console.log(e);
        toast.error(e.response.data.msg);
    }
}




