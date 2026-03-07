import { validate } from "../util/vaidators";

import { Request, Response, NextFunction } from 'express';
import { User } from '../types/user.types';
import { loginSchema} from './auth.schema';


/**
 * Validate request body before login
 * @param req Request
 * @param res Response
 * @param next NextFunction
 * @returns Promise
 */
export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  return validate<Partial<User>>(req.body, loginSchema)  
/*
    * the partial makes the user type paramter optional from firstname : to firstname?=
    * the req.body is the data given by the user and which we need to verify 
    * Login Schema is the schema which we are validating the data against
    * next make sure that after this is done it goes to next middleware or controller
    * we need the types as it is kind of like dto as we need to pass a type to validate function 
    * to make sure that the data we are validating is of the type we want 
    * and also to make sure that the data is in the correct format 
    * and also to make sure that the data is not missing any required fields
*/
  

    .then(() => next())
    .catch((err) => next(err));
};
