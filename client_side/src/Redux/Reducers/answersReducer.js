import {

    GET_ALL_ANSWERS,
    ADD_ANSWER,
    VOTE

} from '../reduxConstants';


const initStateAnswersReducer = {

    allAnswers : []
}


export const answersReducer = (state=initStateAnswersReducer, action={}) => {

    switch(action.type){

        case ADD_ANSWER :

            return {...state}

        case GET_ALL_ANSWERS :

            return {...state, allAnswers: action.payload}

        case VOTE :

            return {...state}

        default: 

            return {...state}
    }
}


