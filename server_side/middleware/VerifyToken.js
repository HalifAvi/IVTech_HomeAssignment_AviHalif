import jwt from 'jsonwebtoken';


// Middleware to protect every time we click on "Home" page to check the token
export const VerifyToken = (req, res, next) => {

    // In our case we put the access token in the http cookies
    // (when we close the browser it's gone, it's not like the cookies in the browser)
    // But in case it in the headers 
    const accessToken = req.cookies.accessToken ||
                        req.headers['x-access-token'] ||
                        req.headers['authorization'];

    console.log('VerifyToken accessToken:', accessToken);

    if(accessToken == null) return res.sendStatus(401);
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decode)=> {

        // You will get an error or next if everything is good
        if(err) return res.sendStatus(403);
        // Getting the encrypted data from the token
        // And after we have to check the email and password
        // exist in our db
        let email = decode.email;
        let userId = decode.userId;
        next();
    })
}