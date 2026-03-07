import {pool} from '../db/pool';

export const getAllUsers = async () => {
    // make the query to get all users from the database
    const query = 'Select * from users';
    //send the query to the database and return the result
    const result = await pool.query(query);
    // return the result as an array of users
    return result.rows;
};

export const login = async (email : string, password : string) => {
    //make the query to get the user with the given email and password from the database
    const query = 'Select * from users where email = $1 and password = $2';
    // the values to be used in the query
    const values = [email, password];
    //send the query and the values to the database and return the result
    const result = await pool.query(query, values);
    //return the result as a user object
    return result.rows[0];
}

