import '../PagesStyle/TodayRecipes.css';
import NavBar from "../BasicElements/NavBar";
import { connect } from 'react-redux';
import CaloriesScale from "../BasicElements/CaloriesScale";
import AppLogo from '../BasicElements/AppLogo';
import SliderCards from '../BasicElements/SliderCards';
import Title from '../BasicElements/Title';
import { useState } from 'react';


const TodayRecipes = ({todayRecipes}) => {

    let howManyInDaily = todayRecipes.length;
    const [paintAgainCaloriesBar, setPaintAgainCaloriesBar] = useState(true);

    return(

        <div className={"todayRecipes-div pattern-dots-sm slategray h-5"}>

            <div id={"main-logo-div"}>
                <AppLogo id={"signinSignUpIntro-logo"} />
            </div> 

            <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+400} positionOnNavBar={4}/> 

            {howManyInDaily !==0 ?<Title id={"todayRecipes-page-title"} titleName={process.env.REACT_APP_BASE_TITLE_DAILY_RECIPES}/>:null}
        
            <SliderCards kindOfPage={"today"} paramToChange={{setPaintAgainCaloriesBar, paintAgainCaloriesBar}}/> 

            {howManyInDaily !==0 && howManyInDaily !==1 ? <Title id={"todayRecipes-page-count-title"} titleName={`You Added ${howManyInDaily} Different Kind Of Recipes Today`}/> : null}
            {howManyInDaily ===1 ? <Title id={"todayRecipes-page-count-title"} titleName={process.env.REACT_APP_BASE_TITLE_ONE_RECIPE_TODAY}/> : null} 

            <div className={"todayRecipes-caloriesScale-div"}>   
                <CaloriesScale movementNumbers={false}/> 
            </div>    

        </div>
    )
}



const mapStateToProps = (state) => {

    return{

        todayRecipes: state.recipesReducer.todayRecipes

    }
}


export default connect(mapStateToProps, null)(TodayRecipes);