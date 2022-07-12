
import { connect } from 'react-redux';
import React, { useEffect, useState } from "react";
import '../PagesStyle/GeneralRecepies.css';
import NavBar from "../BasicElements/NavBar";
import CaloriesScale from "../BasicElements/CaloriesScale";
import AppLogo from '../BasicElements/AppLogo';
import SliderCards from '../BasicElements/SliderCards';
import Title from '../BasicElements/Title';
import FilterSection from '../BasicElements/FiltersSection';
import {setChoosenRecepiesArrayIdx, setToSpecialRecipesArray} from "../../Redux/Actions/recipesActions.js";




const GeneralRecepies = ({choosenDisplayedRecepies}) => {

    const [paintAgainCaloriesBar, setPaintAgainCaloriesBar] = useState(true);

        // Each time you arrive to 'GeneralRecepies' : back to the default recipes array
        useEffect(()=>{

            setChoosenRecepiesArrayIdx(0);
            setToSpecialRecipesArray();
    
        })

    return(
            <div className={"generalRecepies-div pattern-dots-sm slategray h-5"}>

                <div id={"main-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div> 

                <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+100} positionOnNavBar={1}/> 

                <Title id={"generalRecipes-page-title"} titleName={process.env.REACT_APP_BASE_TITLE_GENERAL_RECIPES}/>

                <FilterSection />
            
                {/* Sending this in the props just for set the state and make to CaloriesScale render again */}
                <SliderCards paramToChange={{setPaintAgainCaloriesBar, paintAgainCaloriesBar}}/>

                <div className={"generalRecepies-caloriesScale-div"}>
                    <CaloriesScale movementNumbers={false}/> 
                </div>    

                {<Title id={"generalRecipes-page-filter-name"} titleName={getTheFilterName(choosenDisplayedRecepies)}/>}
            </div>
        )
    }

    const mapStateToProps = (state) => {

        return{

            choosenDisplayedRecepies : state.recipesReducer.choosenDisplayedRecepies
        }
    }

    const mapDispatchToProps = (dispatch) => {

        return{
    
            setChoosenRecepiesArrayIdx : (idxArr)=> dispatch(setChoosenRecepiesArrayIdx(idxArr)),
            setToSpecialRecipesArray : ()=> dispatch(setToSpecialRecipesArray())
        }
    }



export default connect(mapStateToProps, mapDispatchToProps)(GeneralRecepies);



const getTheFilterName = (choosenDisplayedRecepiesIdx) => {


    switch(choosenDisplayedRecepiesIdx.toString()){

        case '0' : 

            return "NO-FILTER";

        case '1' : 

            return "MEXICAN FOOD";

        case '2' :

            return "ITALIAN FOOD";

        case '3' :

            return "FRENCH FOOD";

        case '4' :

            return "CHINESE FOOD";
        
        case '5' :

            return "BREAKFASTS";

        case '6' : 

            return "SOUPS";

        case '7' :

            return "SALADS";

        case '8' :

            return "DESSERTS";
    }
}




           


            


    


