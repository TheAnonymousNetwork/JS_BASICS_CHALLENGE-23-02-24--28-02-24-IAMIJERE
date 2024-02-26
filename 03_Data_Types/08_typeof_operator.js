//08_typeof_operator

/*
    The typeof operator in JS is used to determine the data type of a variable or expression, because it returns a string indicating the data type. 
*/


// Lets look at how the typeof operates with different data types in JS


//Number: 
//Represents numeric data types, including both integers and floating-point numbers.
//SAMPLE
    console.log(typeof(64));     // "number"
    console.log(typeof(7.5));   // "number"





//String: 
//Represents textual data enclosed within single quotes (') or double quotes (").
    console.log(typeof('hello'));    // "string"





//Boolean: 
//Represents a logical entity, either true or false.
    console.log(typeof true);   // "boolean"





//Undefined: 
//Indicates that a variable has been declared but has not been assigned a value.
    let x_t;
    console.log(typeof(x_t));      // "undefined"






//Null: 
//Represents the intentional absence of any object value.
    console.log(typeof(null));   // "object" (this is considered a mistake in the language design)





//Object: 
//Represents a collection of key-value pairs, or instances of user-defined classes.
    console.log(typeof({}));     // "object"







//Function: 
//Represents a JavaScript function.
    console.log(typeof(function(){}));   // "function"
    








//Symbol: 
//Represents a unique identifier.
    console.log(typeof(Symbol('s')));  // "symbol"





//Final Note
/*
    The typeof cannot reliably distinguish between different types of objects (e.g., arrays, functions), as they all return "object".
*/
