import React from "react";
import "./ComponentsStyle/Nav.css";
import { stringToSearch } from "../Redux/Actions/questionsActions.js";
import { connect } from "react-redux";


const Nav = ({stringToSearch}) => {

    return(
        <>
            <nav className="navbar bg-light mt-0 p-0">
                <div className="container-fluid">
                    <img id={"logo-img-navbar"} src={`${process.env.REACT_APP_LOGO_IMG_URL}`} alt={"checked_Logo"}/>
                    <form className="d-flex p-2 h-25" role="search">
                        <input onChange={(e)=>stringToSearch(e.target.value)} className="form-control me-5" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Ask question</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {

    return{

        stringToSearch : (string)=> dispatch(stringToSearch(string))
    }
}

export default connect(null, mapDispatchToProps)(Nav);

