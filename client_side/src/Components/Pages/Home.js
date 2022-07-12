import { Link } from "react-router-dom";
import Title from "../BasicElements/Title";
import Button from "../BasicElements/Button";
import AppLogo from "../BasicElements/AppLogo";

import '../PagesStyle/Home.css';
import Video from "../BasicElements/Video";


const Home = (props) => {

    return(
        
        <div>
            <Video poster={process.env.REACT_APP_BASE_POSTER_HOME_URL} src={process.env.REACT_APP_BASE_VIDEO_HOME_URL} id={"home-back-video"} autoPlay muted loop />

            <div id={"home-left-side-div"}>

                <div id={"home-logo-div"}>
                    <AppLogo id={"home-logo"}/>
                </div>

                <div id={"home-snd-title-div"}>
                    <Title id={"home-snd-title"} typing={"typewriter"} titleName={process.env.REACT_APP_HOME_SND_TITLE} />
                </div>

            </div>

            <div id={"home-btt-div"}>

                <Link to={process.env.REACT_APP_BASE_SIGN_IN_INTRO_PATH}>
                    <Button id={"home-signin-btt"} buttonName={process.env.REACT_APP_SIGN_IN_BUTTON}/>
                </Link>
                <Link to={process.env.REACT_APP_BASE_SIGN_UP_INTRO_PATH}>
                    <Button id={"home-signup-btt"} buttonName={process.env.REACT_APP_SIGN_UP_BUTTON}/>
                </Link>
            </div>
        </div>
    )
}

export default Home;