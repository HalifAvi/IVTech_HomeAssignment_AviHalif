import jwt from 'jsonwebtoken';
import Users from '../models/Users.js';

// Middleware to protect every time we click on "Home" page to check the token
export const VerifyToken = (req, res, next) => {

    // In our case we put the access token in the http cookies
    // (when we close the browser it's gone, it's not like the cookies in the browser)
    // But in case it's in the headers 
    const accessToken = req.cookies.accessToken ||
                        req.headers['x-access-token'] ||
                        req.headers['authorization'];

    // console.log('VerifyToken accessToken:', accessToken);

    // No Access Token
    if(accessToken == null) return res.status(401).json({msg: 'permission denied!'});
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decode)=> {

        // You will get an error or next if everything is good
        // No Verifing
        if(err) return res.status(403).json({msg: 'verify token failed!'});

        // Getting the encrypted data from the token
        // And after we have to check the email
        // exists in our db
        req.email = decode.email;

        try {

            const user = Users.findAll({

                where:{

                    email: decode.email
                }
            });

            next();

        } catch (e) {

            req.status(403).json({msg: 'verify user failed!'});
        }
    })
}