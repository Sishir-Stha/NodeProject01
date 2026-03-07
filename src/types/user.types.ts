/*
 * this types are used to define the type of the user object that is returned from the database
* and also to define the type of the user object that is used in the frontend or send by the frontend to the backend
*/

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}