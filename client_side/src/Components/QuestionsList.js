import React from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import { getAllAnswersOfSpecificQuestion } from "../Redux/Actions/answersActions.js";



const QuestionsList = ({questionsArrToDisplay}) => {

    return(
        <div className="d-flex flex-row justify-content-center">
            <div className={"col-md-6 justify-content-center w-50 ms-5"}>
                {
                    questionsArrToDisplay.map((question, idx)=>{

                        return <QuestionCard key={idx} question={question}/>
                    })
                }  
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return{

        allAnswersOfSpecificQuestion : state.answersReducer.allAnswersOfSpecificQuestion,
        questionsArrToDisplay : state.questionsReducer.questionsArrToDisplay
    }
}

const mapDispatcToProps = (dispatch) => {

    return{

        getAllAnswersOfSpecificQuestion : (questionId)=> dispatch(getAllAnswersOfSpecificQuestion(questionId))
    }
}

export default connect(mapStateToProps, mapDispatcToProps)(QuestionsList);


       