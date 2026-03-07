import { Schema } from 'joi';

/*
    * the joi not only validate the data but also it can transform the data to the type we want
    * for example if the age : joi.number() and we pass age as string it will convert it to number and validate it if it is valid or not
    * and we can also set default like if anything is missing we can set default value for it and it will be used if the value is missing in the request body
*/

export const validate = <T>(data: T, schema: Schema) => {

    /*
        * here <T> is a generic type parameter that allows the function to accept any type of data.
        * we did this since we dont know which request body we will get or validate hence we want this 
        * function to process any type so what every we pass T as the data will be of that type 
        * 
        * Next is another paramter is Schema which is the validation schema that we will use to validate the data against it
    */
  const { value, error } = schema.validate(data); 
  // this is the line where we are validating the data and the schema if they match or not  
  if (error) {
    return Promise.reject(error);
  } else {
    return Promise.resolve(value);
  }
};
