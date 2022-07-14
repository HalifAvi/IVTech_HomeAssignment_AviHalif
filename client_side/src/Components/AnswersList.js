import React from "react";
import AuthorAndDate from "./AuthorAndDate";
import QuestionOrAnswerDetails from "./QuestionOrAnswerDetails";


const AnswersList = ({answersArray}) => {

    return(
            <div>
                {
                    answersArray.map((answer, idx)=>{

                        return (
                            
                            <div key={idx}>
                                <QuestionOrAnswerDetails description={answer.answer}/>
                                <AuthorAndDate element={answer} />
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default AnswersList;

