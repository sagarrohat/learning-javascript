/**
 * There are 8 data types in JavaScript
 * 
 * 1. undefined
 * 2. null
 * 3. object
 * 4. boolean
 * 5. number
 * 6. bigint
 * 7. string
 * 8. symbol
 * 
 * 
 * 
 * 
 * "any string" is called a string literal.
 * A string literal, or string, is a series of zero or more characters enclosed
 * in single or double quotes.
 * 
 * 
 * When JavaScript variables are declared, they have an initial value of undefined.
 * If you do a mathematical operation on an undefined variable your result will be NaN
 * which means "Not a Number"
 *  */ 

 var undefinedVar;
 console.log(undefinedVar + 1);
 
 /**
  * If you concatenate a string with an undefined variable, 
  * you will get a string of undefined
  * */
 console.log(undefinedVar + "Hello");