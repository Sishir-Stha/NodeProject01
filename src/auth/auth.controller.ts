import { Request, Response } from "express";
import * as userService from   '../user/user.service';
import { successResponse, errorResponse } from '../util/responseFormat';
import HttpStatus from 'http-status-codes'; 


export const login = async (req: Request, res: Response) => {
    try{
        const { email, password } = req.body;
        const user = await userService.login(email, password);
        return successResponse(HttpStatus.OK)(
            res,
            'Login successful'
        )(user);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}
