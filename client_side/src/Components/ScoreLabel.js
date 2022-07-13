import React from "react";
import "./ComponentsStyle/ScoreLabel.css";



const ScoreLabel = ({labelName, score}) => {

    return(
        <div id={[labelName]}>
            <h2>{score}</h2>
            <h6>{labelName==="votesScore"? "votes" : "answers"}</h6>
        </div>
    )
}

export default ScoreLabel;


       