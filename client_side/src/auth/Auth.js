import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";


// We can decode the email
// if we will import jwt from jetwebtoken
// we can do also verification to the token that we are getting
// import jwt_decode from "jwt-decode";

// cause we send GET request
import axios from "axios";



// COMPONENT TO WRAP ATHOUR COMPONENT IN OUR FROMT END TO VERITY THE ACCESS BEFORE ENTERING
export const Auth = (props) => {

    // In case we are not authorize to access so use the redirect
    const [redirect, setRedirect] = useState(null);
    const navigate = useNavigate();


    useEffect( ()=>{

        try{

            const response = axios.get("http://localhost:5000/token",{

                withCredentials: true,
                headers: {

                    'Access-Control-Allow-Origin' : '*',
                    'Content-Type' : 'application/json'
                }
            });

            console.log('auth response', response);
            setRedirect(1);
        }
        catch(e){

            // console.log(e)
            navigate('/login');
        }

    }, [])

    return (
        
        redirect ? props.children : null
    )
}

