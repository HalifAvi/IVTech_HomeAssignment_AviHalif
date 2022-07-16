import React from "react";
import Card from 'react-bootstrap/Card';
import ScoreLabel from "./ScoreLabel";
import { Link } from "react-router-dom";
import AuthorAndDate from "./AuthorAndDate";
import Title from "./Title";
import QuestionTags from "./QuestionTags";
import QuestionOrAnswerDetails from "./QuestionOrAnswerDetails";
import "../Components/ComponentsStyle/QuestionCard.css";


const QuestionCard = ({question, answers, votes}) => {

    return(
            <div>
                <Card className={"mb-5 w-75"}>
                <Link id={"questionTitle"} to={'/displayAnswers/' + question.id}>
                    <Card.Header className={"fs-1 fw-bold"}><Title title={question.title}/></Card.Header>
                </Link>
                <Card.Body>
                    <QuestionOrAnswerDetails description={question.question}/>
                    <QuestionTags tags={question.tags}/>
                    <AuthorAndDate element={question} />
                    <ScoreLabel score={votes} labelName={"votesScore"}/>
                    <ScoreLabel score={answers} labelName={"answersScore"}/>
                </Card.Body>
                </Card>
            </div>
    );
}


export default QuestionCard;


       