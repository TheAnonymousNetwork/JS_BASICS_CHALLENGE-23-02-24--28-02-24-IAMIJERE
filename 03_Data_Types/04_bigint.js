//04_Bigint

/*
    BigInt is a relatively new addition to JavaScript, introduced in ECMAScript 2020 (ES11). 
    It's a data type specifically designed to represent integers of arbitrary precision, meaning it can accurately represent very large numbers that exceed the limits of the standard Number data type.
*/

//Key points to note: 
/*
    - Handling Large Numbers: 
    BigInt addresses the limitations of the standard Number data type, which can only represent numbers up to a certain precision (about 15 digits). With BigInt, developers can now work with much larger integers without the risk of losing precision or encountering rounding errors.

    - Arithmetic Operations: 
    BigInt supports basic arithmetic operations, such as addition, subtraction, multiplication, and division, just like the standard Number data type. However, BigInt operations are performed with arbitrary precision, ensuring accurate results even for very large numbers.

    - Compatibility: 
    While BigInt offers significant benefits for working with large integers, it's important to note that not all JavaScript environments fully support it yet. As of my last update, BigInt is supported in most modern web browsers and Node.js environments, but it may not be compatible with older browsers or legacy systems.

    - Syntax: 
    BigInt literals are represented by appending the letter "n" to the end of an integer literal or by using the BigInt() constructor function. 
*/

//CODE SAMPLE
    const bigIntNumber = 1234567890123456789012345678901234567890n;


/*
    - Use Cases: 
    BigInt is particularly useful in scenarios involving cryptography, financial calculations, scientific computing, or any application that requires precise handling of very large integers. It provides a reliable and efficient way to work with numbers of arbitrary precision without sacrificing performance.
*/


//JavaScript integers are only accurate up to 15 digits:
    //Integer Precision
    let x = 999999999999999;
    let y = 9999999999999999;






//How to Create a BigInt
//To create a BigInt, append n to the end of an integer or call BigInt():
    let int_x = 9999999999999999;
    let int_y = 9999999999999999n;





//BigInt as a JavaScript Datatype
//The JavaScript typeof a BigInt is "bigint":
    let big_int_x = BigInt(999999999999999);
    let int_type = typeof big_int_x;
    console.log(int_type);



    //Therefore With BigInt the total number of supported data types in JavaScript is 8:
/*
    1. String
    2. Number
    3. Bigint
    4. Boolean
    5. Undefined
    6. Null
    7. Symbol
    8. Object
*/



//Notes:
// Arithmetic between a BigInt and a Number is not allowed


