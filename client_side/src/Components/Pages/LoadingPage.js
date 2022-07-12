import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../PagesStyle/LoadingPage.css';

const LoadingPage = (props) => {

    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=> {

        setTimeout(function(){

            navigate(`/${params.nextPage}`);

        }, params.time);  
    
    }, [])

    return(
       <div id={"loading-section"}>
            <div id={"loading-container"}>
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
       </div>
    )
}

export default LoadingPage;