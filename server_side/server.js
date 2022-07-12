
// Import the packages

// Use Environment File
import dotenv from 'dotenv';
dotenv.config();
// NodeJs Framework 
import express from 'express';
// Enable CORS with various options
import cors from 'cors';

import cookieParser from 'cookie-parser';

// Import Employee routes
import UsersRoute from "./routes/users.js"; 

// MongoDB connection
import db from './config/db.js';

try{

    await db.authenticate();
    console.log("Database Connected...")
}
catch (e) {

    console.log(e);
}


// Express Server Decleration
const app = express();

// Depends the request body format
app.use(express.urlencoded({extended: true}));
app.use(express.json());

 // Because we want to use http cookie in front and back end
 app.use(cors({credentials : true, origin: process.env.FRONT_END_URL_SERVER}));
 app.use(cookieParser());


app.listen(process.env.PORT||8080, ()=> {

    console.log(`Server is running on port ${process.env.PORT}`);
})


app.use('/api/users', UsersRoute);