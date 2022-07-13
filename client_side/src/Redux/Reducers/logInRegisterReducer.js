import {

    LOG_IN,
    REGISTER,
    RETRIVE_USERS_DATA

} from '../reduxConstants';


const initStatelogInRegister = {

    accessToken: '',
    email : '',
    fullname: '',
    nickname: '',
    userId: 0
}


export const logInRegisterReducer = (state=initStatelogInRegister, action={}) => {

    switch(action.type){

        case REGISTER:

            return {...state}

        case LOG_IN: 

            return {...state, accessToken: action.payload}

        case RETRIVE_USERS_DATA:

            const {email, fullname, nickname, userId} = action.payload

            return {...state, email: email, fullname: fullname, nickname: nickname, userId: userId}

        default: 

            return {...state}
    }
}