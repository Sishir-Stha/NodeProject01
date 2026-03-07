import  Route  from 'express';
import { loginValidator } from './auth.validator';
import { login } from './auth.controller';

const router = Route();

// here the request body goes to the login validator first to validate the data 
// and then if it is valid it goes to the login controller to handle the login logic
router.use('/login', loginValidator,login);

export default router;  