import Card from 'react-bootstrap/Card';
import AuthorAndDate from "./AuthorAndDate";
import VotingIcon from "./VotingIcon";
import React, { useState } from "react";
import { connect } from "react-redux";
import QuestionOrAnswerDetails from "./QuestionOrAnswerDetails";
import "./ComponentsStyle/AnswerCard.css";



const AnswerCard = ({answer, questionId}) => {

    const [score, setScore] = useState(answer.score);

    return(
            <div className={"answerSection"}>
                <VotingIcon questionId={questionId} currentAnswerId={answer.id} paramsToChange={{score, setScore}}/>
                <Card className={"mb-5 ml=75 w-75"}>
                <Card.Body>
                    <QuestionOrAnswerDetails description={answer.answer}/>
                    <AuthorAndDate element={answer} />
                </Card.Body>
                </Card>
            </div>
    );
}

const mapStateToProps = (state) => {

    return{

        scoresOfCurrentAnswers : state.answersReducer.scoresOfCurrentAnswers
    }
}


export default connect(mapStateToProps, null)(AnswerCard);


       