import express from 'express';
import { router } from './root.routes';
import "../src/db/pool"; // importing the pool to establish connection with the database
import { pool } from '../src/db/pool';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();      // Create a express server --main app to control every thing
app.use(express.json());    // middleware it help app to understand the JSON data coming from request body
app.use('/api/v1', router); // default route for all routes in root.routes.ts file


/*
  * here we are creating variable to be used to start the server and connect to the database
  * Port variable 
  * Host variable
  * Error faced : the .env port is alwas either string or undefined so even if i write int in .env
  * it will be string so we need to convert it to int using parseInt() function 
*/


let PORT = parseInt(process.env.PORT || '4000'); 
// here we are setting the port to 4000 or if there is a port in environment variable we will use that
const HOST = process.env.HOST || 'localhost'; 
// here we are setting the host to localhost or if there is a host in environment variable we will use that

 // normally it should be only () => but we are using async 
 // because we want to use the await to wait for d connection then go on
const startServer = async () => {
  try{
    await pool.connect(); // here we are connecting to the database and waiting untill it happens

    app.listen(PORT, HOST, () => {        // starts the server and listen on port 4000 for incoming requests  
        console.log(`Server is running on ${HOST}:${PORT}`); // log a message to the console when the server is successfully started
  })

} catch(err){
    console.error('Failed to connect to the database:', err);
    process.exit(1); // exit the process with error code 1 if connection fails  
}
}

startServer(); // call the function to start the server
