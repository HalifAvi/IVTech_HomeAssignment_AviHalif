import '../BasicElementStyle/NavBar.css';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { activeLink, moveIndicator } from "../Assistants/NavBarExtFunctions.js";



const NavBar = ({positionOnNavBar, numOfPxOnNavBar}) => {

    useEffect(()=>{                    

        // Set the first location to the right icon
        let marker = document.querySelector('div#navBar-marker'); 
        let li_s = document.querySelectorAll('li'); 

        li_s[positionOnNavBar].className = "active";

        marker.style.left = numOfPxOnNavBar +"px";
        marker.style.width = 100 +"px";

        let list = document.querySelectorAll('ul li');

        list.forEach(link => {

            link.addEventListener('mousemove', (e)=> {

                moveIndicator(e.target);
            })
        });


        list.forEach(item =>
            
            item.addEventListener('mouseover', (e)=> {

                activeLink((e.target.parentElement).id);
            })
        );

    }, [])
        

    return(
        <>
            <div className={"navBar-container"}>
                <nav>
                    <ul>
                        <li id={0}><Link to ={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + process.env.REACT_APP_BASE_MAIN_PATH + "/" + process.env.REACT_APP_BASE_NAVBAR_NAV_TIME} id={"navBar-link-logo"}><i className={"fa fa-id-card-o"} aria-hidden="true"></i></Link></li>
                        <li id={1}><Link to ={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + process.env.REACT_APP_BASE_GENERAL_RECEPIES_PATH + "/" + process.env.REACT_APP_BASE_NAVBAR_NAV_TIME} id={"navBar-link-logo"}><i className={"fa fa-cutlery"} aria-hidden="true"></i></Link></li>
                        <li id={2}><Link to ={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + process.env.REACT_APP_BASE_FAV_RECEPIES_PATH + "/" + process.env.REACT_APP_BASE_NAVBAR_NAV_TIME} id={"navBar-link-logo"}><i className={"fa fa-heart-o"} aria-hidden="true"></i></Link></li>
                        <li id={3}><Link to ={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + process.env.REACT_APP_BASE_PREV_RECEPIES_PATH + "/" + process.env.REACT_APP_BASE_NAVBAR_NAV_TIME} id={"navBar-link-logo"}><i className={"fa fa-calendar"} aria-hidden="true"></i></Link></li>
                        <li id={4}><Link to ={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + process.env.REACT_APP_BASE_TODAY_PATH + "/" + process.env.REACT_APP_BASE_NAVBAR_NAV_TIME} id={"navBar-link-logo"}><i className={"fa fa-list-ol"} aria-hidden="true"></i></Link></li>
                        {/* <li id={5}><Link to ={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + process.env.REACT_APP_BASE_SETTINGS_PATH + "/" + process.env.REACT_APP_BASE_NAVBAR_NAV_TIME} id={"navBar-link-logo"}><i className={"fa fa-cogs"} aria-hidden="true"></i></Link></li> */}
                        <li id={5}><Link to ={process.env.REACT_APP_BASE_SIGN_IN_FORM_PATH} id={"navBar-link-logo"}><i className={"fa fa-sign-out"} aria-hidden="true"></i></Link></li>

                        <div id="navBar-marker"></div>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar;
