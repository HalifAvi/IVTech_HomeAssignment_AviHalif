import React from "react";
import { connect } from "react-redux";
import { voteToAnswer } from "../Redux/Actions/answersActions.js";
import "./ComponentsStyle/VotingIcon.css";


const VotingIcon = ({paramsToChange, currentAnswerId, voteToAnswer}) => {

    const {score, setScore} = paramsToChange;
 
    const handleVoting = async (voteToAnswer, operator, currentAnswerId) => {

        let updatedVote = operator=="+" ? score + 1 : score - 1;

        await voteToAnswer(currentAnswerId, updatedVote);

        setScore(updatedVote);
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
 
        voteToAnswer : (currentAnswerId, updatedVote)=> dispatch(voteToAnswer(currentAnswerId, updatedVote))
    }
}


export default connect(null, mapDispatchToProps)(VotingIcon);




