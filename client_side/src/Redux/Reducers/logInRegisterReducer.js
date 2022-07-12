import {

    LOG_IN,
    REGISTER

} from '../reduxConstants';


const initStatelogInRegister = {


}


export const logInRegisterReducer = (state=initStatelogInRegister, action={}) => {

    switch(action.type){

        case REGISTER:

            return {...state}

        case LOG_IN: 

            return {...state}

        default: 

            return {...state}
    }
}