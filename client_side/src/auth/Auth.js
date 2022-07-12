import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";


// We can decode the email
// if we will import jwt from jetwebtoken
// we can do also verification to the token that we are getting
// import jwt from "jetwebtoken";


import jwt_decode from "jwt-decode";

// cause we send GET request
import axios from "axios";


// COMPONENT TO WRAP OTHER COMPONENT IN OUR FRONT END TO VERITY THE ACCESS BEFORE ENTERING
export const Auth = (props) => {

    // In case we are not authorize to access so use the redirect
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();


    useEffect( ()=>{

        const verify = async() => {

            try{

                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_VERIFY_TOKEN_URL}`,{

                withCredentials: true,
                headers: {

                    'Access-Control-Allow-Origin' : '*',
                    'Content-Type' : 'application/json'
                }
                    
                });

                console.log('auth response', response);
                setRedirect(true);

            } catch(e){

                console.log(e)

                navigate('/login');
            }
        }

        verify();
    
    }, [])

    return (
        
        redirect ? props.children : null
    )
}

