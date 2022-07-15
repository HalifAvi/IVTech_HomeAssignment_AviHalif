import {

    GET_ALL_ANSWERS_OF_SPECIFIC_QUESTION,
    GET_VOTES_NUM_OF_ANSWERS,
    ADD_ANSWER,
    VOTE

} from '../reduxConstants';


const initStateAnswersReducer = {

    allAnswersOfSpecificQuestion : [],
    currentVotes : 0, 
    currentNumOfAnswers : 0
}


export const answersReducer = (state=initStateAnswersReducer, action={}) => {

    switch(action.type){

        case GET_ALL_ANSWERS_OF_SPECIFIC_QUESTION : 

            return {...state, allAnswersOfSpecificQuestion: action.payload}

        case ADD_ANSWER :

            return {...state}

        case VOTE :

            return {...state}

        case GET_VOTES_NUM_OF_ANSWERS :

            const {numAnsOfCurrQue, votes} = action.payload;

            return {...state, currentNumOfAnswers: numAnsOfCurrQue, currentVotes : votes}

        default: 

            return {...state}
    }
}



