//01_Strings

//What is a STRING
/*
    So generally in programming, a string is a data type used to represent text. 
    It consists of a sequence of characters, which can include letters, digits, symbols, and whitespace. 
    Strings are commonly used to store and manipulate textual data in programmes.
*/
//Bellow are some key characteristics of strings in programming:
/*
    Immutable: In many programming languages, strings are immutable, meaning they cannot be changed once they are created. Operations that appear to modify a string actually create a new string with the modified content.

    Enclosed in Quotes: Strings are typically enclosed in single (' ') or double (" ") quotes, depending on the programming language. Some languages also support other types of string literals, such as backticks (` `), which allow for features like string interpolation.

    Concatenation: Strings can be concatenated, or combined, to create longer strings. 
    This is often done using the concatenation operator(+) or string interpolation (embedding variables or expressions within a string).
    - Note the (+) applies to JS, that of offer languages may vary

    Escaping Characters: Certain characters, such as newline (\n), tab (\t), and quotation marks (' and "), may have special meanings in strings. To include these characters in a string literal, they may need to be escaped using a backslash (\).

    Unicode Support: Modern programming languages typically support Unicode, allowing strings to represent characters from a wide range of languages and scripts. This enables the handling of multilingual text and characters outside the ASCII range.
*/
//Here is a code sample in JS
    var greet = "Hello world!";
    var my_name = "IAMIJERE";

    var msg = greet + ", My name is " + my_name + ".";
    console.log(msg); 
// This will Output: Hello, world! My name is IAMIJERE.
/*
    In the code above, greet and my_name are strings, and the + operator is used to concatenate them together to create the msg string.
*/

//NOTE: 
/*
    Concatenate means to link together or combine items in a series. In the context of strings in programming, concatenation refers to the process of joining two or more strings together to create a single longer string. This can be achieved using specific concatenation operators or functions provided by the programming language.
*/


//Using single or double quotes:
//SAMPLE
    let plece_1 = "Abia";  // Double quotes
    let place_2 = 'Okirika';  // Single quotes


//Note
/*
    Strings created with single or double quotes works the same.
    There is no difference between the two, though you can use quotes inside a string, as long as they don't match the quotes surrounding the string
*/
//SAMPLE
    let sample_1 = "This is sample_1";
    let sample_2 = "This is 'sample_2'";
    let sample_3 = 'This is "Josample_2"';



    
