import {

    GET_ALL_ANSWERS_OF_SPECIFIC_QUESTION,
    GET_VOTES_NUM_OF_ANSWERS,
    ADD_ANSWER,
    VOTE

} from '../reduxConstants';
import { getTotalVotesToQuestion } from "../../AssistantFunctins/AnswersReducerFun.js";
import axios from 'axios';



export const getAllAnswersOfSpecificQuestion = (questionID) => async (dispatch) => {

    try{

        let response = await axios.get(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ALL_ANSWERS_OF_QUE_URL}/${questionID}`,

            {
                withCredentials: true,
                headers: {

                    'Access-Control-Allow-Origin' : '*',
                    'Content-Type' : 'application/json'
                }
        })

        dispatch({
    
            type: GET_ALL_ANSWERS_OF_SPECIFIC_QUESTION,
            payload: response.data
        })
    }
    catch(e){

        console.log(e);
    }
}

export const getCurrentVotesAndAnswers = () => async (dispatch, getStatus) => {

    let {allAnswersOfSpecificQuestion} = getStatus().answersReducer;

    const votes = getTotalVotesToQuestion(allAnswersOfSpecificQuestion);
    const numAnsOfCurrQue = allAnswersOfSpecificQuestion.length;

    dispatch ({

        type: GET_VOTES_NUM_OF_ANSWERS,
        payload: { numAnsOfCurrQue, votes }
    })
}


export const addNewAnswer = (description, questionId) => async (dispatch, getStatus) => {

    let {userId, nickname} = getStatus().logInRegisterReducer;

    try{

        await axios.post(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ADD_ANSWER_URL}`,{

            questionId : questionId,
            userId: userId, 
            nickname: nickname,
            userAnswer: description,
        },{

            withCredentials: true,
            headers: {

                'Access-Control-Allow-Origin' : '*',
                'Content-Type' : 'application/json'
            }
        })

        dispatch({
    
            type: ADD_ANSWER
        })
    }
    catch(e){

        console.log(e);
    }
}


export const voteToAnswer = (answerID, updatedVote) => async (dispatch) => {

    try{

        await axios.put(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_VOTE_ANSWER_URL}`,
            {

                answerID : answerID,
                updatedVote : updatedVote
            },
            {
            withCredentials: true,
            headers: {

                'Access-Control-Allow-Origin' : '*',
                'Content-Type' : 'application/json'
            }
        })

        dispatch({
    
            type: VOTE
        })
    }
    catch(e){

        console.log(e);
    }
}

