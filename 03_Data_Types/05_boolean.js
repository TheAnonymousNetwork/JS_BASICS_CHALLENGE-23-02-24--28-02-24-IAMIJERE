//05_boolean

// In summary, A JavaScript Boolean represents one of two values: true or false.

/*
    In programming, a Boolean is a data type that represents one of two possible values: true or false. Booleans are used to express logical conditions, control flow statements, and Boolean algebra operations.
*/

//Let's look at some points

//True and False: 
/*
    Booleans have only two possible values: true and false. These values represent the truth or falsehood of a condition.
*/



//Logical Operators: 
/*
    Booleans are commonly used with logical operators such as AND (&&), OR (||), and NOT (!) to evaluate complex conditions and make decisions in code.
*/
//CODE ILLUSTRATION
    var bool_x = 5;
    var bool_y = 10;

    // Logical AND
    console.log(bool_x < 10 && bool_y > 5); // Output: true
    // Logical OR
    console.log(bool_x === 5 || bool_y === 5); // Output: true
    // Logical NOT
    console.log(!(bool_x === bool_y)); // Output: true
// The fact is that the code above runs, and you note the syntax



//Comparison Operators: 
/*
    Booleans are often the result of comparison operations, such as equality (== or ===), inequality (!= or !==), greater than (>), less than (<), etc.
*/
//CODE SAMPLE
    var a = 5;
    var b = 10;

    console.log(a > b); // Output: false
    console.log(a === b); // Output: false
    console.log(a !== b); // Output: true




//Conditional Statements: 
/*
    Booleans are frequently used in conditional statements like if, else if, and else to execute different blocks of code based on the evaluation of a condition.
*/
    var is_bool = true;

    if (is_bool) {
        console.log("Remember to buy bole");
    } else {
        console.log("No need for fish today.");
    }




//FINAL NOTE:
/*
    Booleans are essential for controlling the flow of a program and making decisions based on conditions. 
    They provide a way to express logical concepts and perform conditional logic in code.
*/












//PRO Tip
//The Boolean() Function
/*
    You can use the Boolean() function to find out if an expression (or a variable) is true:
*/
    //SAMPLE
    Boolean(10 > 9) //This will evaluate to true




