import React, { useState } from "react";
import { connect } from "react-redux";
import AuthorAndDate from "./AuthorAndDate";
import VotingIcon from "./VotingIcon";
import { useEffect } from "react";
import QuestionOrAnswerDetails from "./QuestionOrAnswerDetails";
import { getAllAnswersOfSpecificQuestion } from "../Redux/Actions/answersActions.js";
import "./ComponentsStyle/AnswersList.css";


const AnswersList = ({questionId, getAllAnswersOfSpecificQuestion, AllAnswersOfSpecificQuestion}) => {

    useEffect( ()=>{

        const fetchData = async () => {
            
            await getAllAnswersOfSpecificQuestion(questionId);
        }

        fetchData();

    },[])


    return(
            <div>
                {console.log(AllAnswersOfSpecificQuestion)}
                {
                    AllAnswersOfSpecificQuestion.map((answer, idx)=>{

                        return (
                            
                            <div key={idx} className={"answerSection"}>
                                <VotingIcon questionId={questionId} currentScore={answer.score} currentAnswerId={answer.id}/>
                                <QuestionOrAnswerDetails description={answer.answer}/>
                                <AuthorAndDate element={answer} />
                            </div>
                        )
                    })
                }
            </div>
    )
}

const mapStateToProps = (state) => {

    return{

        AllAnswersOfSpecificQuestion : state.answersReducer.AllAnswersOfSpecificQuestion
    }
}

const mapDispatchToProps = (dispatch) => {

    return{

        getAllAnswersOfSpecificQuestion : (questionId)=> dispatch(getAllAnswersOfSpecificQuestion(questionId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswersList);

