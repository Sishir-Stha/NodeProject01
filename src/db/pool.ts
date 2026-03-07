import pg from 'pg';        // importing the postgreSQL driver
import dotenv from 'dotenv';  // importing dotenv to load environment variables from a .env file
 // importing the pool to establish connection with the database

dotenv.config();  // here config() loads the credentials from the .env file into process.env variable to be used

const password = encodeURIComponent(process.env.DB_PASSWORD!);
/*
here process.env.DB_PASSWORD! is used to get password from .env and make sure it is not empty using !
! it is a not null assertion this tells typescript this thing have value and is not null
encodeURIComponent is used to encode the password in case it contains special characters 
that could interfere with the connection string format.
like :
actual password : my@pass#123   -- this way url breaks
after encoding : my%40pass%23123 -- this way url doesnt break
*/
const PostgreSql_URL = `postgresql://${process.env.DB_USER}:${password}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

/*
This line builds the connection string for PostgreSQL using 
the credentials from the environment variables.
The format of the connection string is:
postgresql://username:password@host:port/database
*/

export const pool = new pg.Pool({
  connectionString: PostgreSql_URL,
});

/*
Here we create a new connection pool using pg.Pool and pass the connection string.
What is a Pool?

A connection pool:
Keeps multiple database connections open
Reuses them instead of opening/closing each time

so instead of:
Opening a new DB connection for every query 
this reuse existing connections from the pool 
*/

pool.on('connect', () => {
  console.log('Connection established with database server');
});

// if successfull then this runs 

pool.on('error', (err) => {
  console.error('Error occured while connecting to database:', err);
});

// if not then this run 
