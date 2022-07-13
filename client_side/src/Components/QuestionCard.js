import React from "react";
import Card from 'react-bootstrap/Card';
import TagName from "./TagName";



const QuestionCard = ({question}) => {

    return(
        <>
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
            </Card.Body>
            </Card>
        </>
  );
}


export default QuestionCard;


       