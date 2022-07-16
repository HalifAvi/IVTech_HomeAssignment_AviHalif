import React, { useEffect } from "react";
import Nav from './Nav';
import PopUpAddQuestion from "./PopUpAddQuestion";
import { retriveUsersDataFromAccessToken } from "../Redux/Actions/logInRegisterActions.js";
import { getAllQuestions } from "../Redux/Actions/questionsActions.js";
import { getAllAnswersOfAllQuestions } from "../Redux/Actions/answersActions.js";
import { getVotesAndNumOfAnswers } from "../Redux/Actions/questionsActions.js";
import { connect } from "react-redux";
import QuestionsList from "./QuestionsList";


const Home = ({retriveUsersDataFromAccessToken, getAllQuestions, getAllAnswersOfAllQuestions, getVotesAndNumOfAnswers}) => {

    useEffect(()=>{

        const getAnswersInfo = async () => {
            
            await retriveUsersDataFromAccessToken();
            await getAllQuestions();
            await getAllAnswersOfAllQuestions();
            await getVotesAndNumOfAnswers();
        }

        getAnswersInfo();

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
        getAllQuestions : ()=> dispatch(getAllQuestions()),
        getAllAnswersOfAllQuestions : ()=> dispatch(getAllAnswersOfAllQuestions()),
        getVotesAndNumOfAnswers : ()=> dispatch(getVotesAndNumOfAnswers())
    }
}


export default connect(null, mapDispatchToProps)(Home);

