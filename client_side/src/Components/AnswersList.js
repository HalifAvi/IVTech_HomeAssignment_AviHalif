import React from "react";
import AnswerCard from "../Components/AnswerCard"; 


const AnswersList = ({questionId, allAnswersOfSpecificQuestion}) => {
    
    return(
            <div>
                {
                    allAnswersOfSpecificQuestion.map((answer, idx)=>{

                        return <AnswerCard key={idx} answer={answer} questionId={questionId}/>
                    })
                }
            </div>
    )
}


export default AnswersList;

