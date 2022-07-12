import '../BasicElementStyle/VideoStyle.css';

const Video = (props) => {

    return(

        <>
            <video src={props.src} id={props.id} autoPlay muted loop />
        </>
    )
}

export default Video;