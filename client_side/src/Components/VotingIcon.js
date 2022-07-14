import React, { useState } from "react";
import { connect } from "react-redux";
import { voteToAnswer } from "../Redux/Actions/answersActions.js";
import { getAllAnswersOfSpecificQuestion } from "../Redux/Actions/answersActions.js";
import "./ComponentsStyle/VotingIcon.css";


const VotingIcon = ({currentScore, currentAnswerId, voteToAnswer, getAllAnswersOfSpecificQuestion, questionId}) => {

    const [score, setScore] = useState(currentScore);
 
    const handleVoting = async (voteToAnswer, operator, currentAnswerId) => {

        let updatedVote = operator=="+" ? score + 1 : score - 1;

        await voteToAnswer(currentAnswerId, updatedVote);

        setScore(updatedVote);

        // await getAllAnswersOfSpecificQuestion(questionId);
    }

    return(
            <div id={"votingSection"}> 
                <img onClick={()=>handleVoting(voteToAnswer, "+", currentAnswerId)} className={"arrowImg"} alt={"up"} src={`${process.env.REACT_APP_UP_IMG_URL}`} />
                <h3>
                    {score}
                </h3>
                <img onClick={()=>handleVoting(voteToAnswer, "-", currentAnswerId)} className={"arrowImg"} alt={"down"} src={`${process.env.REACT_APP_DOWN_IMG_URL}`}/>
            </div>
    )
}

const mapDispatchToProps = (dispatch) => {

    return {
 
        voteToAnswer : (currentAnswerId, updatedVote)=> dispatch(voteToAnswer(currentAnswerId, updatedVote)),
        getAllAnswersOfSpecificQuestion : (currentAnswerId) => dispatch(getAllAnswersOfSpecificQuestion(currentAnswerId))
    }
}


export default connect(null, mapDispatchToProps)(VotingIcon);




