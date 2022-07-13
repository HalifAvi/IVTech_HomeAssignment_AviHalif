import React, { useEffect } from "react";
import Nav from './Nav';
import PopUpAddQuestion from "./PopUpAddQuestion";
import { retriveUsersDataFromAccessToken } from "../Redux/Actions/logInRegisterActions.js";
import { getAllQuestions } from "../Redux/Actions/questionsActions.js";
import { connect } from "react-redux";


const Home = ({retriveUsersDataFromAccessToken, allQuestionsArr, getAllQuestions}) => {

    useEffect(()=>{

        retriveUsersDataFromAccessToken();
        getAllQuestions();
    }, [])

    return(
        <>
            <Nav />
            <PopUpAddQuestion />
            {console.log( allQuestionsArr )}
        </>
    )
}

const mapStateToProps = (state) => {

    return{

        allQuestionsArr : state.questionsReducer.allQuestionsArr
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        retriveUsersDataFromAccessToken : ()=> dispatch(retriveUsersDataFromAccessToken()),
        getAllQuestions : ()=> dispatch(getAllQuestions())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

