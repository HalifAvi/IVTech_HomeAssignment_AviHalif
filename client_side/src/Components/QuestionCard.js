import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import TagName from "./TagName";
import ScoreLabel from "./ScoreLabel";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllAnswersOfSpecificQuestion } from "../Redux/Actions/answersActions.js";



const QuestionCard = ({question, getAllAnswersOfSpecificQuestion, allAnswersArr}) => {

    const allAnswerOfThisQuestion = allAnswersArr.find(element => element.questionId == question.id);

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
                <Card.Header className={"fs-3 fw-bold"}>{question.title}</Card.Header>
                <Card.Body>
                    <p>
                        {question.question}
                    </p>
                    {
                        (question.tags.split(',')).map((tagName, idx) => {

                            return <TagName key={idx} tagName={tagName}/>
                        })
                    }
                    <div>
                        <p>
                            {`asked ${(question.createdAt).substring(0, (question.createdAt).indexOf("T"))} by ${question.nickname}`}
                        </p>
                    </div>
                    <ScoreLabel score={question.votes} labelName={"votesScore"}/>
                    <ScoreLabel score={allAnswerOfThisQuestion !== undefined ? allAnswerOfThisQuestion.allAnswerArr.length : 0} labelName={"answersScore"}/>
                </Card.Body>
                </Card>
            </div>
    );
}

const mapStateToProps = (state) => {

    return{

        allAnswersArr : state.answersReducer.allAnswersArr
    }
}

const mapDispatcToProps = (dispatch) => {

    return{

        getAllAnswersOfSpecificQuestion : (questionId)=> dispatch(getAllAnswersOfSpecificQuestion(questionId))
    }
}

export default connect(mapStateToProps, mapDispatcToProps)(QuestionCard);


       