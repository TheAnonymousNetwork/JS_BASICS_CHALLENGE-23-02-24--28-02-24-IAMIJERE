//04_Variable_Scopes

//What is a scope
/*
    In programming, variable scope refers to the context or area of code where a variable is accessible. It defines where in the code a variable can be used and accessed.
*/

//In PROGRAMMING generally, there are two main types of variable scope:
/*
    - Global Scope
    - Local Scope
*/

//NOTE:
/*
    Variables declared with var keyword have function scope, meaning they are scoped to the function in which they are declared. However, variables declared with let and const keywords have block scope, meaning they are scoped to the block (enclosed within {}) in which they are declared.
*/

//But JS variables have 3 types of scope:
/*    
    - Block scope
    - Function scope: See also Local Scope
    - Global scope
*/




//EXAMPLES


//BLOCK SCOPE
/*
    In JS, the let and const keywords provide Block Scope in JavaScript.
    And variables declared inside a { } block cannot be accessed from outside the block:
*/
    {
        let my_int = 32;
    }
/* 
  my_int can NOT be used outside { } since variables declared 
  inside a { } can be accessed only from inside the block.

  Though variables declared with the var keyword can NOT have block scope.
*/
    {
        var new_int = 64;
    }
  // new_int can be used outside { }





//LOCAL SCOPE
/*
    In local scope, variables declared inside a JS function, are regarded as LOCAL to the function
*/
    // Code written outside this function cannot use my_name
    function my_fn() 
    {
        let my_name = "IAMIJERE";
        // Code written inside here can use my_name
    }
    // Code written outside this function cannot use my_name
    //NOTE: Local variables have Function Scope, since they can only be accessed from within the function.



//GLOBAL SCOPE
/*
    Here, variables declared outside a function have Global Scope, since they can be accessed from anywhere in a JavaScript program.
    When declared outside a function, variables declared with var, let and const are quite similar because they all have Global Scope:
*/
//   var my_int = 64;       // Global scope
//    let my_int = 32;       // Global scope
//    const my_int = 16;     // Global scope - 

//Final Note: 
/*
    Scope determines the accessibility of variables, objects, and functions from different parts of the code.
*/



