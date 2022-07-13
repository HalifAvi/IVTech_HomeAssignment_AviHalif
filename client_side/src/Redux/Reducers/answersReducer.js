import {

    GET_ALL_ANSWERS_OF_SPECIFIC_QUESTION

} from '../reduxConstants';


const initStateAnswersReducer = {

    allAnswersArr : []
}


export const answersReducer = (state=initStateAnswersReducer, action={}) => {

    switch(action.type){

        case GET_ALL_ANSWERS_OF_SPECIFIC_QUESTION : 

            state.allAnswersArr.push(action.payload);

            return {...state, allAnswersArr:[...state.allAnswersArr]}

        default: 

            return {...state}
    }
}