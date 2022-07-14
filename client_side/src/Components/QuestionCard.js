import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import ScoreLabel from "./ScoreLabel";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AuthorAndDate from "./AuthorAndDate";
import Title from "./Title";
import QuestionTags from "./QuestionTags";
import QuestionOrAnswerDetails from "./QuestionOrAnswerDetails";
import "../Components/ComponentsStyle/QuestionCard.css";
import { getAllAnswersOfSpecificQuestion } from "../Redux/Actions/answersActions.js";


const QuestionCard = ({question, getAllAnswersOfSpecificQuestion, currentVotes, currentNumOfAnswers}) => {

    useEffect(()=>{

        const getAnswers = async() => {

            try {

                await getAllAnswersOfSpecificQuestion(question.id);
            
            } catch(e){

                console.log(e)
            }
        }

        getAnswers();

    }, [])


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
                    <ScoreLabel score={currentVotes} labelName={"votesScore"}/>
                    <ScoreLabel score={currentNumOfAnswers} labelName={"answersScore"}/>
                </Card.Body>
                </Card>
            </div>
    );
}

const mapStateToProps = (state) => {

    return{

        currentVotes : state.answersReducer.currentVotes,
        currentNumOfAnswers : state.answersReducer.currentNumOfAnswers
    }
}

const mapDispatcToProps = (dispatch) => {

    return{

        getAllAnswersOfSpecificQuestion : (questionId)=> dispatch(getAllAnswersOfSpecificQuestion(questionId))
    }
}

export default connect(mapStateToProps, mapDispatcToProps)(QuestionCard);


       