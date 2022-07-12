import React from "react";
import { Link } from "react-router-dom";
import Title from "../BasicElements/Title";
import Video from "../BasicElements/Video";
import AppLogo from "../BasicElements/AppLogo";
import Image from "../BasicElements/Image";
import '../PagesStyle/SigninSignupIntro.css';





const SigninSignupIntro = ({pageToDisplay}) => {

    return(

        <div>

            <Video poster={process.env.REACT_APP_BASE_POSTER_SIGNIN_URL} src={process.env.REACT_APP_BASE_VIDEO_SIGN_INTRO_URL} id={"signin-back-video"} autoPlay muted loop />

            <div id={"signinSignUpIntro-left-side-div"}>

                <div id={"signinSignUpIntro-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div>

                <Link to={pageToDisplay === process.env.REACT_APP_SIGN_UP_NAME ?
                     
                            process.env.REACT_APP_BASE_SIGN_UP_FORM_PATH
                            :
                            process.env.REACT_APP_BASE_SIGN_IN_FORM_PATH
                        }>
                    <div id={"signinSignUpIntro-title-div"}>
                        <Title id={"signinSignUpIntro-title"} 
                                titleName={ pageToDisplay === process.env.REACT_APP_SIGN_UP_NAME ? process.env.REACT_APP_SIGNUP_TITLE : process.env.REACT_APP_SIGNIN_TITLE} />
                    </div>
                </Link>

                <div id={"signinSignUpIntro-snd-title-div"}>
                    <Title id={"signinSignUpIntro-snd-title"} typing={"typewriter"} 
                            titleName={pageToDisplay === process.env.REACT_APP_SIGN_UP_NAME ? process.env.REACT_APP_SIGNUP_SND_TITLE : process.env.REACT_APP_SIGNIN_SND_TITLE} />
                </div>

                <Link to={process.env.REACT_APP_BASE_HOME_PATH}>
                    <Image id={"signinSignUpIntro-back-icon"} classN={"pattern-dots-lg slategray h-5"} src={process.env.REACT_APP_BASE_BACK_ICON_URL}/>
                </Link>

                <Link to={process.env.REACT_APP_BASE_HOME_PATH}>
                    <Image id={"signinSignUpIntro-home-icon"} classN={"pattern-zigzag-sm slategray h-5"} src={process.env.REACT_APP_BASE_HOME_ICON_URL}/>
                </Link>

            </div>
        </div>
    )
}     


export default SigninSignupIntro;