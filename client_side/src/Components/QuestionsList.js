import React from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";


const QuestionsList = ({questionsArrToDisplay, allVotesAndNumOfAnswersForAllQuestions}) => {

    return(
        <div className="d-flex flex-row justify-content-center">
            <div className={"col-md-6 justify-content-center w-50 ms-5"}>
                {
                    questionsArrToDisplay.map((question, idx)=>{

                        return <QuestionCard key={idx} question={question}
                                answers={allVotesAndNumOfAnswersForAllQuestions[idx] !== undefined ? allVotesAndNumOfAnswersForAllQuestions[idx].answers : 0}
                                votes={allVotesAndNumOfAnswersForAllQuestions[idx] !== undefined ? allVotesAndNumOfAnswersForAllQuestions[idx].votes : 0}/>
                    })
                }  
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return{

        questionsArrToDisplay : state.questionsReducer.questionsArrToDisplay,
        allVotesAndNumOfAnswersForAllQuestions : state.questionsReducer.allVotesAndNumOfAnswersForAllQuestions
    }
}


export default connect(mapStateToProps, null)(QuestionsList);


       