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
    /* * the values to be used in the query
       * the values sending is purely position do email : $1 and password is $2 if i change there
         position then email = password and passsword = email so remeber that 
     */
    const values = [email, password];
    //send the query and the values to the database and return the result
    const result = await pool.query(query, values);
    /*
        *  here the result format will look like this 
                {
            rows: [ {...}, {...}, ... ],
            rowCount: 1,
            command: 'SELECT',
                }

        * but we just need rows so if we just want rows then just send 
            return result.row[]
        *  this return the array of row but if we do the [0] then it will only sending the first 
            row that is good for login since it will only have one row
        *  return the result as a user object
    */
    return result.rows[0];
}

