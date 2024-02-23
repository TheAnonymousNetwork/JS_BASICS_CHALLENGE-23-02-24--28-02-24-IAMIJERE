//02_Hoisting
/*
    In simple terms, hoisting in JavaScript means that variable and function declarations are moved to the top of their containing scope during code execution. 
    This allows you to use variables and functions before they are actually declared in your code, but only the declarations are hoisted, not the initializations.
*/


//  Note: only declarations are hoisted, not the initializations. 
    //example:
    console.log(h); // this will throw an error: undefined
    var h = 5;
/*
    Here the console.log statement appears before the variable h is declared and initialized.
    Though it doesn't cause an error because during hoisting, the variable declaration is moved to the top of the scope it's within, and the value is set to undefined by default until initialization later in the code.
*/


/*
    function declarations are also hoisted to the top of their containing scope.
*/
    //example:
    hoist(); // Will dislay: "Hoist the colors"
    function hoist() {
        console.log("Hoist the colors");
    };
    
    /*
        Though the function hoist() is called before it's declared in the code, it executes without any errors. 
        Because the function declaration is hoisted to the top of its containing scope.

        Note; You need to understand hoisting in JavaScript to avoid unexpected behavior in your code. 
        It is generally recommended to declare variables and functions at the beginning of their containing scope to improve code readability and avoid confusion. 
        And hoisting behavior may vary depending on the type of variable declaration (e.g., var, let, const) and whether the code is running in strict mode.

        - More on strict mode later
    */

