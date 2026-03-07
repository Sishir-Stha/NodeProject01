    import { Response } from "express";

    export const successResponse = (statusCode : number) => (res:Response , message : string) => (data : object ) =>{
        return res.status(statusCode).json({        
            /* here the res.status sets the status code internally but dont send it yes 
            * res.status() is a method so we can chait it with json()
            * .json() is a method that sends a JSON response to the client
            * then we make the json format and then send it to client
            */
        success : true,
        message: message,
        data : data
        })
    } 

    export const errorResponse = (statusCode : number)=> (res: Response , message : string ) =>{
        return res.status(statusCode).json({
            success : false,
            message : message
        })
    }
        