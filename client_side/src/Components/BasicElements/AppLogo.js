import Title from "../BasicElements/Title";


const AppLogo = (props) => {

    return(

        <div> 
            <Title id={`${props.id}-p1`} titleName={process.env.REACT_APP_LOGO_NAME_P1} pattern={"pattern-diagonal-lines-sm text-pattern"}/>
            <Title id={`${props.id}-p2`} titleName={process.env.REACT_APP_LOGO_NAME_P2} />
        </div>
    )
}

export default AppLogo;