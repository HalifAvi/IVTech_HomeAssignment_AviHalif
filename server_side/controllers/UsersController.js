import Users from "../models/Users.js";

// Hasing the password - before sending to db
import bcrypt from 'bcrypt';

// To create an access token - to define the expiration time
// We will send this token in the cookie to the front end
// And we can wrap any component with that token - and the user'll have access to this page according 
// to expiry time we defined in this token
import jwt from 'jsonwebtoken';



export const register = async (req, res) => {

    const {
            email, 
            password,
            fullname,
            nickname

        } = req.body;


    // Hasing the password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try{

        // Create new row in 'login' table
        const answer = await Users.create({

            email: email,
            password: hashPassword,
            fullname: fullname,
            nickname: nickname
        })

        res.json({msg: 'Registered Successfully!'})
    }
    catch(error){

        console.log(error)

        // We defined our 'email' as unique in db
        res.status(404).json({msg: 'Email Already Exists'})
    }
}



export const logIn = async (req, res) => {

    try{

        // 1: Find if there is same email in db
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        })

        // 2: Check the password is equal to the db's password
        const match = await bcrypt.compare(req.body.password, user[0].password)

        if(!match) return res.status(400).json({msg: "Sorry, Email Or Password Is Incorrect!"});
        
        // Retrive the data from db response
        const userId = user[0].id;
        const email = user[0].email;
        const nickname = user[0].nickname;
        const fullname = user[0].fullname;
                
        // 3: Create an accessToken 
                
        // 4: Add this accessToken to the http cookies
                
        // 5: Send back this accessToken
                
        // Each time we'll get a different access token cause we'll have different userId and email with our ACCESS_TOKEN_SECRET
        // that we only know so we can verify according to it
        // We will send this token in the cookie to the front end
        // And we can wrap 'Home' component with that token - and the user'll have access to this page according 
        // to expiry time we defined in this token
        const accessToken = jwt.sign({userId, email, fullname, nickname},
        process.env.ACCESS_TOKEN_SECRET, {
                
            expiresIn: '3600s'
                
        })
                
        // Set the cookie in the http response ((we imported it in 'server.js'))
        // we get here the all encrypted data
        res.cookie('accessToken', accessToken, {
            
            httpOnly: true,
            maxAge: 3600 * 1000 // 3600 seconds = 1hour
        }); 
                
        // We send back the access token 
        res.json({accessToken});
        
    }

    catch(error){

        console.log(error);
        res.status(404).json({msg:'Sorry, Email Address Could Not Be Found!'})
    }
}
