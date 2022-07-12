import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

const Nav = () => {

    return(
        <>
            <Stack spacing={2} direction="row">
                <Button component={Link} to={'/home'}>Home</Button>
                <Button component={Link} to={'/register'}>Register</Button>
                <Button component={Link} to={'/login'}>Login</Button>
                <Button>Log out</Button>
            </Stack>
        </>
    )
}

export default Nav;