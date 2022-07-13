import React from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";



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

        questionsArrToDisplay : state.questionsReducer.questionsArrToDisplay
    }
}

export default connect(mapStateToProps, null)(QuestionsList);


       