import { connect } from 'react-redux';
import '../PagesStyle/PreviousRecepies.css';
import NavBar from "../BasicElements/NavBar";
import AppLogo from '../BasicElements/AppLogo';
import MyCalendar from '../BasicElements/MyCalendar';
import Title from '../BasicElements/Title';
import { useEffect } from 'react';
import {setSpecificDayUserValuesNutrition} from "../../Redux/Actions/calendarActions.js";
import {setRecommendedConsumption} from "../../Redux/Actions/signInUpActions.js";
import CandleGraph from '../BasicElements/CandleGraph';



const PreviousRecepies = ({
                            setSpecificDayUserValuesNutrition,
                            recommendedConsumptionProtein,
                            recommendedConsumptionIron,
                            recommendedConsumptionVitaminC, 
                            setRecommendedConsumption,
                            currDisplayedProtein,
                            currDisplayedIron,
                            currDisplayedVitaminC,
                            isExistData,
                            displayedDate

                        }) => {

    let date;

    useEffect(()=> {

        date = formatDate(new Date());

        setSpecificDayUserValuesNutrition(formatDate(date), date);

        setRecommendedConsumption();

    },[])

    return(
            <div className={"previousRecepies-div pattern-dots-sm slategray h-5"}>

                <div id={"main-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div> 

                <Title titleName={displayedDate} id={"previousRecepies-date-title"}/>

                <Title titleName={isExistData ? null : "No Data - You Didn't visit Our App" } id={"previousRecepies-snd-page-title"}/>

                <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+400} positionOnNavBar={4}/> 

                <Title id={"previousRecepies-page-title"} titleName={process.env.REACT_APP_BASE_TITLE_PREV_RECIPES}/>

                <MyCalendar />

                <CandleGraph dataToDisplay={{
                                                currDisplayedProtein,
                                                currDisplayedIron,
                                                currDisplayedVitaminC,
                                                recommendedConsumptionVitaminC,
                                                recommendedConsumptionIron,
                                                recommendedConsumptionProtein,
                                                isExistData
                                            }}/>
            </div>
        )
    }


    const mapStateToProps = (state) => {

        return{

            currDisplayedProtein : state.calendarReducer.currDisplayedProtein,
            currDisplayedIron : state.calendarReducer.currDisplayedIron,
            currDisplayedVitaminC : state.calendarReducer.currDisplayedVitaminC,
            recommendedConsumptionProtein : state.signInUpReducer.recommendedConsumptionProtein,
            recommendedConsumptionIron : state.signInUpReducer.recommendedConsumptionIron,
            recommendedConsumptionVitaminC : state.signInUpReducer.recommendedConsumptionVitaminC,
            isExistData : state.calendarReducer.isExistData,
            displayedDate : state.calendarReducer.displayedDate
        }
    }

    const mapDispatchToProps = (dispatch) => {

        return{

            setSpecificDayUserValuesNutrition : (formatDate, date) => dispatch(setSpecificDayUserValuesNutrition(formatDate, date)),
            setRecommendedConsumption : () => dispatch(setRecommendedConsumption())
        }
    }



export default connect(mapStateToProps, mapDispatchToProps)(PreviousRecepies);


function formatDate(date) {
    
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
