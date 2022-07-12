import '../BasicElementStyle/RecpieDescriptionCard.css';
import { connect } from "react-redux";
import Title from './Title';
import { useEffect } from 'react';
import Grid from './Grid';
import DoughnutChart from "../BasicElements/DoughnutChart";


const RecpieDescriptionCard = ({instructionsCurrRecpie,
                                ingredientsCurrRecpie,titleCurrRecpie}) => {



    useEffect(()=>{

        (document.querySelector("div.recpieDescriptionCard-instructions")).innerHTML = instructionsCurrRecpie;

    }, )
    

    const handleClick = () => {

        var modal = document.querySelector(".modal");

        modal.setAttribute("closing", "");

        modal.addEventListener(
         
            "animationend",

            () => {

                modal.removeAttribute("closing");
                modal.close();

            },

            { once: true }
        );
    }

    return(

        <dialog className={"modal pattern-dots-sm slategray h-5"}>
            <div className={"recpieDescriptionCard-main-title"}>
                <Title titleName={titleCurrRecpie}/>
            </div>

            <div className={"recpieDescriptionCard-container"}>
                <div className={"recpieDescriptionCard-info1-recpie-div"}>
                    <div className={"recpieDescriptionCard-snd1-title"}>
                        <Title titleName={"INSTRUCTIONS"}/>
                    </div>
                    <div className={"recpieDescriptionCard-instructions"}></div>
                </div>
                <div className={"recpieDescriptionCard-info2-recpie-div pattern-dots-sm slategray h-5"}>
                    <div className={"recpieDescriptionCard-snd2-title"}>
                        <Title titleName={"NUTRITION VALUES"}/>
                    </div>
                    <div>
                        <DoughnutChart className={"recpieDescriptionCard-doughnutChart"}/> 
                    </div>
                </div>
                <div className={"recpieDescriptionCard-info3-recpie-div"}>
                    <div className={"recpieDescriptionCard-snd3-title"}>
                        <Title titleName={"INGREDIENTS"}/>
                    </div>
                    <div className={"recpieDescriptionCard-ingredients"}>
                        <Grid itemsToDisplay={ingredientsCurrRecpie}/>
                    </div>   
                </div>
            <button className={"recpieDescriptionCard-button close-button"} onClick={handleClick}>BACK</button>
            </div>
        </dialog>
    )
}


const mapStateToProps = (state) => {

    return{

        caloriesCurrRecpie : state.recipesReducer.caloriesCurrRecpie,
        proteinCurrRecpie : state.recipesReducer.proteinCurrRecpie,
        ironCurrRecpie : state.recipesReducer.ironCurrRecpie,
        vitaminCCurrRecpie : state.recipesReducer.vitaminCCurrRecpie,
        instructionsCurrRecpie : state.recipesReducer.instructionsCurrRecpie,
        ingredientsCurrRecpie : state.recipesReducer.ingredientsCurrRecpie,
        titleCurrRecpie : state.recipesReducer.titleCurrRecpie,
        imageCurrRecpie : state.recipesReducer.imageCurrRecpie
    }
}


export default connect(mapStateToProps, null)(RecpieDescriptionCard);

