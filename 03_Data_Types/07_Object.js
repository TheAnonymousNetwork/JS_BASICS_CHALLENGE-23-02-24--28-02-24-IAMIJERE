//07_Object

/*
    Objects are a fundamental concept in JavaScript, because they provide a way to store and organize data in key-value pairs. 
    Let's go through an overview of objects in JS
*/



//What is an OBJECT
/*
    An object is a composite data type that allows you to store collections of data in key-value pairs, where keys are strings (or symbols) and values can be of any data type, including other objects.
*/

//Before moving forward, let me explain the concept of composite
/*
    In computer science and programming, a composite data type is a data type that can hold multiple values or elements. It's called "composite" because it's composed of or made up of smaller parts. Objects in JavaScript are considered composite data types because they can contain multiple key-value pairs, where each key is associated with a value.
*/


//NOW LETS LOOK AT SOME INTERESTING AREAS OF JS

//01 - Syntax
/*
    Objects are defined using curly braces {}. 
    Inside the braces, you specify key-value pairs separated by commas. Each key is followed by a colon : and its corresponding value.
*/
//CODE
    let person_object_01 = {
        name: "Lobari",
        age: 20,
        isStudent: true
    };



// 02 - Accessing Properties
/*
    You can access properties of an object using dot notation (objectName.propertyName) or bracket notation (objectName['propertyName']).
    Dot notation is commonly used when the property name is a valid identifier.
    Bracket notation is necessary when the property name contains special characters, starts with a number, or is dynamically determined.
*/
//CODE
    console.log(person_object_01.name);  // Output: Lobari
    console.log(person_object_01['age']); // Output: 20




//03 - Adding and Modifying Properties
/*
    You can add new properties to an object or modify existing ones by simply assigning a value to a new key or an existing key.
*/
//CODE
person_object_01.city = "Rukpokwu";   // Adding a new property
person_object_01.age = 21;            // Modifying an existing property
console.log(person_object_01.city);  // Output: Rukpokwu
console.log(person_object_01['age']); // Output: 21








// 04 - Nested Objects:
/*
    Objects can contain other objects as property values, allowing for the creation of complex data structures.
*/
//CODE
    let person_object_02 = 
    {
        name: "KC",
        grades: 
            {
                math: 90,
                science: 85
            }
    };
    console.log(person_object_02.grades['math']); //Output: 90








//05 - Methods
/*
     Objects can also contain functions as values. 
     These are referred to as methods of the object.   
*/
//CODE
    let circle = 
    {
        radius: 5,
        area: function() 
            {
                return Math.PI * this.radius ** 2;
            }
    };

    console.log(circle.area()); // Output: 78.53981633974483




// 06 - Iterating Over Properties
/*
    You can loop over the properties of an object using for...in loop
*/
    for (let key in person_object_01) 
    {
        console.log(key + ": " + person_object_01[key]);
    }
    //OUTPUT:
    /*
        07_Object.js:116 age: 21
        07_Object.js:116 isStudent: true
        07_Object.js:116 city: Rukpokwu
    */

//IN SUMMARY
/*
    Objects are incredibly versatile and form the backbone of many JavaScript applications, allowing for the creation of complex data structures and the implementation of object-oriented programming principles.
*/








