import {

    GET_ALL_ANSWERS,
    ADD_ANSWER,
    VOTE

} from '../reduxConstants';
import axios from 'axios';


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



export const getAllAnswersOfAllQuestions = () => async (dispatch) => {

    try{

        let response = await axios.get(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ALL_ANSWERS_URL}`,

            {
                withCredentials: true,
                headers: {

                    'Access-Control-Allow-Origin' : '*',
                    'Content-Type' : 'application/json'
                }
        })

        dispatch({
    
            type: GET_ALL_ANSWERS,
            payload: response.data
        })
    }
    catch(e){

        console.log(e);
    }
}

