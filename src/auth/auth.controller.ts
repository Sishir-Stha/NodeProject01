import { Request, Response } from "express";
import * as userService from   '../user/user.service';
import { successResponse, errorResponse } from '../util/responseFormat';
import HttpStatus from 'http-status-codes'; 


export const login = async (req: Request, res: Response) => {
    try{
        const { email, password } = req.body;
        const user = await userService.login(email, password);
        if(!user){
            return errorResponse(HttpStatus.UNAUTHORIZED )
        }
        return successResponse(HttpStatus.OK)(
            res,
            'Login successful'  
        )(user);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ message: "Internal server error" });
    }
}

export const allUsers = async (req: Request, res: Response) => {
    try {
        const result = await userService.getAllUsers();
        return successResponse(HttpStatus.OK)(
            res,
            'User Data Fetched'
        )(result);
    }catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}
