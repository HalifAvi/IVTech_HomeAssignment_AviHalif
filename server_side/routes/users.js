import express from 'express';
const router = express.Router();

import {

    logIn,
    register

 } from '../controllers/UsersController.js';

import {VerifyToken} from '../middleware/VerifyToken.js';




router.post('/login', logIn);
router.post('/register', register);


// To protect our 'Home' component with token
// You will get an error or next if everything is good
// in 'VerifyToken' so if you'll get next so continue
// with the code here :
router.get('/token', VerifyToken, (req, res)=>{

    // WE can do it more secure
    // and change the token each time you verify the token and put it in the http cookies
    // (the same rows we wrote in the login - from row 63 in Users.js into controllers folder) 
    res.status(200).json({msg: 'accessToken'})

});

export default router;
