
import { connect } from 'react-redux';
import React from "react";
import '../PagesStyle/Settings.css';
import NavBar from "../BasicElements/NavBar";


const Settings = (props) => {

    return(

        <div id={"aaa"}> 

<h1>{"Settings"}</h1>


            <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+500} positionOnNavBar={5}/>
        </div>
    )
}



const mapStateToProps = (state) => {

    return{

    }
}



export default connect(mapStateToProps, null)(Settings);





