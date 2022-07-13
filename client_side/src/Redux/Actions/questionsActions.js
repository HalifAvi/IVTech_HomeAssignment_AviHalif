import {

    ADD_QUESTION,
    SET_ALL_QUESTIONS_ARR,
    CHANGE_DISPLAYED_QUESTIONS

} from '../reduxConstants';

import axios from 'axios';


export const getAllQuestions = () => async (dispatch) => {

    try{

        let response = await axios.get(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ALL_QUESTIONS_URL}`,

            {
                withCredentials: true,
                headers: {

                    'Access-Control-Allow-Origin' : '*',
                    'Content-Type' : 'application/json'
                }
        })

        dispatch({
    
            type: SET_ALL_QUESTIONS_ARR,
            payload: response.data
        })
    }
    catch(e){

        console.log(e);
    }
}


export const addNewQuestion = (title, question, tags) => async (dispatch, getStatus) => {

    let {userId, nickname} = getStatus().logInRegisterReducer;

    try{

        let response = await axios.post(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ADD_QUESTION_URL}`,{

            userId: userId, 
            nickname: nickname,
            title: title,
            question: question,
            tags: tags,
        },{

            withCredentials: true,
            headers: {

                'Access-Control-Allow-Origin' : '*',
                'Content-Type' : 'application/json'
            }
        })

        const newQuestion = {

            userId: userId, 
            createdAt: response.data,
            title: title,
            question: question,
            tags: tags
        }

        dispatch({
    
            type: ADD_QUESTION,
            payload: newQuestion
        })
    }
    catch(e){

        console.log(e);
    }
}



export const stringToSearch = (stringToSearch) => async (dispatch, getStatus) => {

    const {allQuestionsArr} = getStatus().questionsReducer;

    const questionsArrToDisplay = allQuestionsArr.filter((question)=> {

        return (question.title).includes(stringToSearch)
    })

    dispatch ({

        type: CHANGE_DISPLAYED_QUESTIONS,
        payload: questionsArrToDisplay
    })
}



