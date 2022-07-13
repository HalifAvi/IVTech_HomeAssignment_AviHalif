import React, { useEffect } from "react";
import Nav from './Nav';
import PopUpAddQuestion from "./PopUpAddQuestion";
import { retriveUsersDataFromAccessToken } from "../Redux/Actions/logInRegisterActions.js";
import { getAllQuestions } from "../Redux/Actions/questionsActions.js";
import { connect } from "react-redux";
import QuestionsList from "./QuestionsList";


const Home = ({retriveUsersDataFromAccessToken, getAllQuestions}) => {

    useEffect(()=>{

        retriveUsersDataFromAccessToken();
        getAllQuestions();
    }, [])

    return(
        <>
            <Nav />
            <PopUpAddQuestion />
            <QuestionsList />
        </>
    )
}


const mapDispatchToProps = (dispatch) => {

    return{

        retriveUsersDataFromAccessToken : ()=> dispatch(retriveUsersDataFromAccessToken()),
        getAllQuestions : ()=> dispatch(getAllQuestions())
    }
}


export default connect(null, mapDispatchToProps)(Home);

