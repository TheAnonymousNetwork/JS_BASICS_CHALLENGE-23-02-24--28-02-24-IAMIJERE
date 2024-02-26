//06_null

//IN SUMMARY
/*
    null is a primitive value or data type, that represents the intentional absence of any object value. 
    It's often used to indicate a variable or object property that has been explicitly set to have no value. 
*/

//Some things to note about null in JavaScript

//Definition
/*
    null is a primitive value that represents the absence of any object value.
*/



//Type
/*
    It has its own data type, also called null.
*/
 


//Usage
/*
    It's often used to initialize variables that are meant to later hold an object or as a placeholder for an object that doesn't exist yet.
    It's returned by functions or operators when they don't have a meaningful value to return.
    Comparing a variable to null is a common way to check if it hasn't been assigned a meaningful value yet.
*/





//typeof Operator
/*
    When you use typeof on null, it returns 'object', which is an artifact of JavaScript's history and considered a mistake in the language design.
*/
    //Code
    var my_null_01 = null;
    console.log(typeof(my_null_01)); //OUTPUTS: OBJECT


//Difference from Undefined
/*
    While null indicates the absence of a value intentionally assigned, undefined is a special value in JavaScript that indicates a variable has been declared but has not yet been assigned a value.
*/
    //Code
    var my_null_02;
    console.log(typeof(my_null_02)); //OUTPUTS: UNDEFINED



//Comparisons
/*
    When compared with ==, null is equal only to null and undefined.
    When compared with ===, null is equal only to itself.
*/
    //CODE
    console.log(null == null);  
    console.log(null == undefined);
    //Both lines above will output true

    console.log(null === null);  //Still give true
    console.log(null === undefined); //This outputs false


//NOTE
/*
    Be careful not to confuse null with undefined. 
    Because, while they are similar in some respects, they have different meanings and use cases.
    
    Avoid using == for comparisons involving null, as it can lead to unexpected behavior due to its loose equality checking.
*/



// In Summary
/*
    null is a specific value in JavaScript used to represent the intentional absence of an object value and is often employed to signify the absence of a meaningful value in variables or object properties.
*/








