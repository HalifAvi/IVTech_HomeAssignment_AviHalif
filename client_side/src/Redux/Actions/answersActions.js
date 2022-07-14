import {

    GET_ALL_ANSWERS_OF_SPECIFIC_QUESTION,
    ADD_ANSWER

} from '../reduxConstants';

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


export const addNewAnswer = (description, questionId) => async (dispatch, getStatus) => {

    let {userId, nickname} = getStatus().logInRegisterReducer;

    try{

        let response = await axios.post(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ADD_ANSWER_URL}`,{

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





