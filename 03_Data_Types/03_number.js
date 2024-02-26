//03_Numbers

/*
    In JavaScript, numbers are a data type used to represent numeric values. 
    Be it integers (whole numbers) or floating-point numbers (decimal numbers).
*/

//Here are some points to note:


///  Integer and Floating-Point Numbers:
/*
    JavaScript supports both integer and floating-point numbers. 
    Integer numbers are whole numbers without any decimal point, while floating-point numbers have a decimal point.
*/
//CODE: 
    var integerNumber = 10;
    var floatNumber = 3.14;




//Arithmetic Operations:
/*    
    JavaScript supports various arithmetic operations on numbers, such as addition (+), subtraction (-), multiplication (*), division (/), and modulus (%). These operations can be performed on both integers and floating-point numbers.
*/
//CODE:
    var result1 = 10 + 5; // Addition
    var result2 = 10 - 5; // Subtraction
    var result3 = 10 * 5; // Multiplication
    var result4 = 10 / 5; // Division
    var result5 = 10 % 3; // Modulus (remainder of division)






//NaN (Not-a-Number): 
/*
    In JavaScript, NaN represents a special value indicating that a value is not a valid number. 
    It is returned when an arithmetic operation or mathematical function fails to produce a meaningful result.
*/
//CODE:
    var result = 10 / "apple"; // Result is NaN





//Infinity and -Infinity: 
/*
    JavaScript also has special values for positive infinity (Infinity) and negative infinity (-Infinity). 
    These values represent numbers that are greater than or less than any other number, respectively.
*/
//CODE: 
    var positiveInfinity = Infinity;
    var negativeInfinity = -Infinity;




//And finally
//Number Methods: 
/*
    JavaScript provides several built-in methods for working with numbers, such as parseInt() and parseFloat() for converting strings to numbers, toFixed() for formatting floating-point numbers, and isNaN() for checking if a value is NaN.
*/
//SAMPLE
    var num = parseFloat("3.14");
    console.log(num.toFixed(2)); // Output: 3.14 
    console.log(isNaN(num)); // Output: false 
