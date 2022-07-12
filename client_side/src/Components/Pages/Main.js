
import React, { useEffect } from "react";
import Video from "../BasicElements/Video";
import AppLogo from "../BasicElements/AppLogo";
import Title from "../BasicElements/Title";
import PersonalDetailsCard from "../BasicElements/PersonalDetailsCard";
import '../PagesStyle/Main.css';
import {getCurrentDate} from "../Assistants/MainExtFunctions.js";
import NavBar from "../BasicElements/NavBar";
import { connect } from "react-redux";
import {setChoosenRecepiesArrayIdx, setToSpecialRecipesArray} from "../../Redux/Actions/recipesActions.js";


const Main = ({setChoosenRecepiesArrayIdx, setToSpecialRecipesArray}) => {

    // Each time you arrive to 'Main' : back to the default recipes array
    useEffect(()=>{

        setChoosenRecepiesArrayIdx(0);
        setToSpecialRecipesArray();
    })

    return(

        <div>  

            <Video src={process.env.REACT_APP_BASE_VIDEO_MAIN_URL} id={"signin-back-video"} autoPlay muted loop />
        
            <div id={"main-left-side-div"}>
        
                <div id={"main-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div>

                <Title id={"date-currentDate-title"} titleName={getCurrentDate()} />

                <PersonalDetailsCard />
        
                <div id={"main-snd-title-div"}>
                    <Title id={"main-snd-title"} typing={"typewriter"} 
                            titleName={process.env.REACT_APP_MAIN_SND_TITLE} />
                </div> 
   
            </div>

            <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR} positionOnNavBar={0}/>
    </div>
    )
}


const mapDispatchToProps = (dispatch) => {

    return{

        setChoosenRecepiesArrayIdx : (idxArr)=> dispatch(setChoosenRecepiesArrayIdx(idxArr)),
        setToSpecialRecipesArray : ()=> dispatch(setToSpecialRecipesArray())
    }
}



export default connect(null, mapDispatchToProps)(Main);






