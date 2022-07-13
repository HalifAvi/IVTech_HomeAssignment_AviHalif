import {

    GET_ALL_ANSWERS_OF_SPECIFIC_QUESTION

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

        const allAnswerOfSpecificQue = {

            questionId : questionID,
            allAnswerArr : (response.data).length !== 0 ? response.data : []

        }

        dispatch({
    
            type: GET_ALL_ANSWERS_OF_SPECIFIC_QUESTION,
            payload: allAnswerOfSpecificQue
        })
    }
    catch(e){

        console.log(e);
    }
}


// export const addNewQuestion = (title, question, tags) => async (dispatch, getStatus) => {

//     let {userId, nickname} = getStatus().logInRegisterReducer;

//     try{

//         let response = await axios.post(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ADD_QUESTION_URL}`,{

//             userId: userId, 
//             nickname: nickname,
//             title: title,
//             question: question,
//             tags: tags,
//         },{

//             withCredentials: true,
//             headers: {

//                 'Access-Control-Allow-Origin' : '*',
//                 'Content-Type' : 'application/json'
//             }
//         })

//         const newQuestion = {

//             userId: userId, 
//             createdAt: response.data,
//             title: title,
//             question: question,
//             tags: tags
//         }

//         dispatch({
    
//             type: ADD_QUESTION,
//             payload: newQuestion
//         })
//     }
//     catch(e){

//         console.log(e);
//     }
// }



// export const stringToSearch = (stringToSearch) => async (dispatch, getStatus) => {

//     const {allQuestionsArr} = getStatus().questionsReducer;

//     const questionsArrToDisplay = allQuestionsArr.filter((question)=> {

//         return (question.title).includes(stringToSearch)
//     })

//     dispatch ({

//         type: CHANGE_DISPLAYED_QUESTIONS,
//         payload: questionsArrToDisplay
//     })
// }



