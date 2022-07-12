import '../BasicElementStyle/PersonalDetailsCard.css';
import React from "react";
import { connect } from "react-redux";
import Image from "../BasicElements/Image";
import Title from "../BasicElements/Title";
import {getLevel} from "../Assistants/PersonalDetailsCardExtFunctions.js";
import CaloriesScale from "../BasicElements/CaloriesScale";




const PersonalDetailsCard = ({firstName, lastName, age, fileName, gender, weight, height, activityLevel}) => { 

    return(
        <div id={"personalDetailsCard-container"} className={"pattern-dots-sm slategray h-5"}>
            <div id={"personalDetailsCard-img-container"}>
                <Image classN={"personalDetailsCard-gender-img"} src={gender===process.env.REACT_APP_BASE_GENDER_FST_OPTION ? process.env.REACT_APP_BASE_MAN_GENDER_IMG_URL : process.env.REACT_APP_BASE_WOMAN_GENDER_IMG_URL}/>
                <Image id={"personalDetailsCard-img"} src={`${process.env.REACT_APP_BASE_USER_IMG_BASE_URL}${fileName}`}/>
                <Title id={"personalDetailsCard-pressOnMe-title"} titleName={process.env.REACT_APP_PERSONAL_DETAILS_CARD_PRESS_ON_ME_TITLE}/>
                <Title id={"personalDetailsCard-nameAndAge-title"} titleName={`${firstName} ${lastName}, ${age}`}/>
            </div>
            <div id={"personalDetailsCard-weight-div"}>
                <Image classN={"personalDetailsCard-icon"} id={"personalDetailsCard-weight-img"} src={process.env.REACT_APP_BASE_WEIGHT_ICON_URL}/>
                <Title id={"personalDetailsCard-weight-title"} titleName={`${weight}Kg`}/>
            </div>
            <div id={"personalDetailsCard-height-div"}>
                <Image classN={"personalDetailsCard-icon"} id={"personalDetailsCard-height-img"} src={process.env.REACT_APP_BASE_HEIGHT_ICON_URL}/>
                <Title id={"personalDetailsCard-height-title"} titleName={`${height}cm`}/>
            </div>
            <div id={"personalDetailsCard-activity-div"}>
                <Image classN={"personalDetailsCard-icon"} id={"personalDetailsCard-activity-img"} src={process.env.REACT_APP_BASE_ACTIVITY_ICON_URL}/>
                <Title id={"personalDetailsCard-activity-title"} titleName={`${getLevel(activityLevel)}/5 LEVEL`}/>
            </div>
            <div id={"personalDetailsCard-caloriesScale-div"}>
                <CaloriesScale movementNumbers={true}/>
            </div>
        </div>  
    )
} 


const mapStateToProps = (state) => {

    return{

        firstName : state.signInUpReducer.firstName,
        lastName : state.signInUpReducer.lastName,
        age : state.signInUpReducer.age,
        fileName : state.signInUpReducer.fileName,
        gender : state.signInUpReducer.gender,
        weight : state.signInUpReducer.weight,
        height : state.signInUpReducer.height,
        activityLevel : state.signInUpReducer.activityLevel,
    }
}


export default connect(mapStateToProps, null)(PersonalDetailsCard);         
 