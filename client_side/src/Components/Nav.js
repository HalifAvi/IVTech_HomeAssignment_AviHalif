import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import "./ComponentsStyle/Nav.css";

const Nav = () => {

    return(
        <>
            <nav className="navbar bg-light mt-0 p-0">
                <div className="container-fluid">
                    <img id={"logo-img-navbar"} src={`${process.env.REACT_APP_LOGO_IMG_URL}`} alt={"checked_Logo"}/>
                    <form className="d-flex p-2 h-25" role="search">
                        <input className="form-control me-5" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Ask question</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Nav;


            {/* <Stack spacing={2} direction="row">
                <Button component={Link} to={'/home'}>Home</Button>
                <Button component={Link} to={'/register'}>Register</Button>
                <Button component={Link} to={'/login'}>Login</Button>
                <Button>Log out</Button>
            </Stack> */}