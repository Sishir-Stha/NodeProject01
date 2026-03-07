import { Router } from "express";
import userRoute from "./user/user.route";

export const router = Router(); 
/*
Route() makes new instance of router
then const router is a variable that hold the insstance of the router
then we export the router so that we can use it in other files
*/

router.use("/users", userRoute);

/*
router.use() is a method that is used to mount the middleware function at the specified path.
the path is decided by the second parameter of the router.use() method 
like in this case we are mounting the userRoute at the path /users
*/