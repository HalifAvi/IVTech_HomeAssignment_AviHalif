import React from "react";
import Card from 'react-bootstrap/Card';
import TagName from "./TagName";
import ScoreLabel from "./ScoreLabel";



const QuestionCard = ({question}) => {

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
                    <ScoreLabel score={question.votes} labelName={"answersScore"}/>
                </Card.Body>
                </Card>
            </div>
    );
}


export default QuestionCard;


       