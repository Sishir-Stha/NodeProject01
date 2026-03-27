
//-------import { BaseAttribute } from '.';
/* here this wrap the interfaces with a fixed value such as i need to make a index.ts value in the
  types folder then fetch it here is i make base attribute interface in the index then that 
  attribute value will be fetched in all the interface here
*/


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