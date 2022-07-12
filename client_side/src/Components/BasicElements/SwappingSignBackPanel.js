import '../BasicElementStyle/SwappingSignBackPanel.css';
import Button from './Button';
import Title from './Title';
import {moveToSignIn, moveToSignUp} from "../Assistants/SwappingSignBackPanelExtFunctions.js";
import { connect } from 'react-redux';
import { setMessageAfterSign } from "../../Redux/Actions/signInUpActions.js";



const SwappingSignBackPanel = ({formToDisplay, messageAfterSign, setMessageAfterSign}) => {

    return(

        <>
        {
            formToDisplay === process.env.REACT_APP_SIGN_IN_NAME ?

            <div className={"SwappingSignBackPanel-container"}>

                <div className={'swappingSignBackPanel-box signin'}>
                    <Title id={"signinSignupForm-title"} titleName={process.env.REACT_APP_BASE_SIGNIN_SENTENCE}/> 
                    <Button id={"signinSignupForm-swipe-signin-btt"} buttonName={process.env.REACT_APP_SIGN_IN_BUTTON} onClickEvent={()=>moveToSignIn(()=>setMessageAfterSign())}/>
                    <Title id={"swappingSignBackPanel-signMessage-title"} titleName={messageAfterSign}/> 
                </div>
                <div className={'swappingSignBackPanel-box signup'}>
                    <Title id={"signinSignupForm-title"} titleName={process.env.REACT_APP_BASE_SIGNUP_SENTENCE}/> 
                    <Button id={"signinSignupForm-swipe-signup-btt"} buttonName={process.env.REACT_APP_SIGN_UP_BUTTON} onClickEvent={()=>moveToSignUp(()=>setMessageAfterSign())}/>
                    <Title id={"swappingSignBackPanel-signMessage-title"} titleName={messageAfterSign}/> 
                </div>
                
            </div>   

            :

            <div className={"SwappingSignBackPanel-container"}>

                <div className={'swappingSignBackPanel-box signup'}>
                    <Title id={"signinSignupForm-title"} titleName={process.env.REACT_APP_BASE_SIGNUP_SENTENCE}/> 
                    <Button id={"signinSignupForm-swipe-signup-btt"} buttonName={process.env.REACT_APP_SIGN_UP_BUTTON} onClickEvent={()=>moveToSignIn(()=>setMessageAfterSign())}/>
                    <Title id={"swappingSignBackPanel-signMessage-title"} titleName={messageAfterSign}/> 
                </div>
                <div className={'swappingSignBackPanel-box signin'}>
                    <Title id={"signinSignupForm-title"} titleName={process.env.REACT_APP_BASE_SIGNIN_SENTENCE}/> 
                    <Button id={"signinSignupForm-swipe-signin-btt"} buttonName={process.env.REACT_APP_SIGN_IN_BUTTON} onClickEvent={()=>moveToSignUp(()=>setMessageAfterSign())}/>
                    <Title id={"swappingSignBackPanel-signMessage-title"} titleName={messageAfterSign}/> 
                </div>

            </div>   
        }

    </>
    )
}


const mapStateToProps = (state) => {

    return{

        messageAfterSign : state.signInUpReducer.messageAfterSign
    }
}

const mapDispatchToProps = (dispatch) => {

    return{

        setMessageAfterSign : (messageToSet) => dispatch( setMessageAfterSign(messageToSet) )        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SwappingSignBackPanel);