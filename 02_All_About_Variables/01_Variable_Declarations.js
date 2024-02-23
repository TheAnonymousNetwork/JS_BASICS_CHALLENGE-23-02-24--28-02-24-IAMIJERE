//Variable Declarations
/*
    Variables in js are like Containers used for Storing Data
    And Variables can be declared in 4 ways:
    - Automatically
    - Using var
    - Using let
    - Using const

    Also note that it's a good programming practice to declare 
    all variables at the beginning of a script.
*/



// - Automatically
/*
    In this example, person_x, person_y, and person_z are undeclared variables.
    They will be automatically declared when first used:
*/
    person_x = 'person_x';
    person_y = 'person_y';
    person_z = person_x +" and "+ person_x;
    console.log(person_x);
    console.log(person_y);
    console.log(person_z);
    // see index.html - open file in chrome and click ctrl+shift+i to view console






// - Using var
/*
    The var keyword was used in all JavaScript code from 1995 to 2015.
    The let and const keywords were added to JavaScript in 2015.
    The var keyword should only be used in code written for older browsers.
*/
//Example using var
    var person_a = 5;
    var person_b = 6;
    var person_c = (person_a + person_b);
    console.log(person_a);
    console.log(person_b);
    console.log(person_c);




//- Using let
let person_l;
/*
    - The let keyword was introduced in ES6 (2015)
    - Variables declared with let have Block Scope:
    - Variables declared with let must be Declared before use
    - Variables declared with let cannot be Redeclared in the same scope

    Note: I'll try to explain these points
*/

// Block Scope
    //Variables declared inside a { } block cannot be accessed from outside the block:
    {
    let person_p = 2;
    }
    // person_p can NOT be used outside the {} or block
    //TRIAL
    //console.log(person_p);
    //This will through an error


//Declaration before use
    //console.log(person_d);
    //Here I attempt using variable person_d before it's declared
    let person_d = 303;
    //This should throw an error - Cannot access 'person_d' before initialization


//Cannot be Redeclared in the same scope
    {
    let person_r = 2;
    //let person_r = 3;
    //console.log(person_r);
    //This will throw an error -  Identifier 'person_r' has already been declared
    }
    // Note this is possible with var








// - Using const
const person_t = 'example';
/*
    - The const keyword was introduced in ES6 (2015)
    - Variables defined with const cannot be Redeclared
    - Variables defined with const cannot be Reassigned
    - Variables defined with const have Block Scope
*/
    // Cannot be Redeclared - See let example 
    // Cannot be Reassigned - See let example 
    // Block Scope - See let example

//Must be Assigned
/*
    JavaScript const variables must be assigned 
    a value when they are declared
*/
    const person_u = 'example';
    //person_u = 'new example';
    //console.log(person_u);
    //This will throw an error - TypeError: Assignment to constant variable.



