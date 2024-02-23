//03_Variable_Naming_Rules 

//FACT 
/*
    Every JavaScript variables must be identified with unique names.
    These unique names are called identifiers.
    Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

*/


//rules for naming variables JS
/*
    - variable names can contain letters, digits, underscores, and dollar signs.
    - variable names must begin with a letter.
    - variable names can also begin with $ and _ (but we will not use it in this tutorial).
    - variable names are case sensitive (y and Y are different variables).
    - Reserved words (like JavaScript keywords) cannot be used as names.
*/
// Note: See references online for reserved keywords




//    - variable names can contain letters, digits, underscores, and dollar signs.
//This will throw a SyntaxError: Numeric separators are not allowed at the end of numeric literals
//var 1 = 'int';
//You can't start a variable name with a digit

var str = 'String';
var _underscore = '_Underscore';
console.log(1);
var $ = 'dollar';




//Note: JavaScript identifiers are case-sensitive.