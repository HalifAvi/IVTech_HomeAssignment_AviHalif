import '../BasicElementStyle/ButtonStyle.css';

const Button = (props) => {

    return(

        <>
            <button id={props.id} onClick={props.onClickEvent || null}>{props.buttonName}</button>
        </>
    )
}

export default Button;