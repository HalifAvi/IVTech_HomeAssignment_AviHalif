import React from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";



const QuestionsList = ({questionsArrToDisplay}) => {

    return(
        <>
            {
                questionsArrToDisplay.map((question, idx)=>{

                    return <QuestionCard key={idx} question={question}/>
                })
            }   
            {console.log("listttttt")}
        </>
    )
}

const mapStateToProps = (state) => {

    return{

        questionsArrToDisplay : state.questionsReducer.questionsArrToDisplay
    }
}

export default connect(mapStateToProps, null)(QuestionsList);


       