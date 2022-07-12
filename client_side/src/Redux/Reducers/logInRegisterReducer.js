import {

    LOG_IN,
    REGISTER

} from '../reduxConstants';


const initStatelogInRegister = {


}


export const logInRegisterReducer = (state=initStatelogInRegister, action={}) => {

    switch(action.type){

        case LOG_IN: 

            return {
                    ...state,
                    currDisplayedProtein: action.payload.currDisplayedProtein,
                    currDisplayedIron: action.payload.currDisplayedIron,
                    currDisplayedVitaminC: action.payload.currDisplayedVitaminC,
                    isExistData: action.payload.isExistData,
                    displayedDate : action.payload.displayedDate
                }

        default: 

            return {...state}
    }
}