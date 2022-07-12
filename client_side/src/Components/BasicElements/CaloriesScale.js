import '../BasicElementStyle/CaloriesScale.css';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { getColor, setCircleInterval } from "../Assistants/CaloriesScaleExtFunctions.js";
import Image from "../BasicElements/Image";



const CaloriesScale = ({dailyCaloriesAmount, currentCaloriesAmount, movementNumbers}) => {


    const percentCaloriesAmount = currentCaloriesAmount/dailyCaloriesAmount;
    const [color, setColor] = useState('');

    useEffect(()=> {

        setCircleInterval(dailyCaloriesAmount, currentCaloriesAmount, percentCaloriesAmount, movementNumbers);

        let calNum = document.querySelector('div#caloriesScale-number-div');

        if(calNum === null) {

            calNum = document.querySelector("div#caloriesScale-small-number-div");
        }

        let color = getColor(percentCaloriesAmount);

        calNum.setAttribute("style", `color: ${color}`);

        setColor(color);

    }) // make this every render, not just on the first time!
    // To make this just on the first time : []
    // To make this on the first time + everytime we change state : [stateToChange]


    return(
        <div className={movementNumbers?"caloriesScale-skill-div":"caloriesScale-small-skill-div"}>
            <div className={movementNumbers?"caloriesScale-outer-div":"caloriesScale-small-outer-div"}>
                <div className={movementNumbers?"caloriesScale-inner-div":"caloriesScale-small-inner-div"}>
                    <div id={movementNumbers?"caloriesScale-number-div":"caloriesScale-small-number-div"}>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={"200px"} height={"200px"}>
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor={color}/>
                        <stop offset="100%" stopColor={color}/>
                    </linearGradient>  
                </defs>
                <circle id={movementNumbers? "circle":"circle-small"} cx={movementNumbers?"80":"60"} cy={movementNumbers?"80":"60"} r={movementNumbers?"70":"50"} strokeLinecap="round" />
            </svg>
            <Image id={movementNumbers?"caloriesScale-img":"caloriesScale-small-img"} src={process.env.REACT_APP_BASE_CALORIES_ICON_URL}/>
        </div>
    )
}





const mapStateToProps = (state) => {

    return {

        dailyCaloriesAmount : state.caloriesReducer.dailyCaloriesAmount,
        currentCaloriesAmount : state.caloriesReducer.currentCaloriesAmount
    }
}


export default connect(mapStateToProps, null)(CaloriesScale);