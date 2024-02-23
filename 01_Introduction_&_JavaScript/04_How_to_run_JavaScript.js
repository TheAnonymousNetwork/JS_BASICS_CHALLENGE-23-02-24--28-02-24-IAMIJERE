//How to run JavaScript

/*
    You can run your JavaScript code in several ways, depending on your needs and the environment in which you're working. Here are some common methods for running JavaScript:
*/


/*
    1. Browser Console: 
    Most web browsers come with a built-in JavaScript console, which allows you to run JavaScript code directly within the browser. You can access the console by right-clicking on a webpage, selecting "Inspect" or "Inspect Element," and then navigating to the "Console" tab. From there, you can type or paste JavaScript code and press Enter to execute it.
*/




/*
    2. HTML Script Tags: 
    You can also run JavaScript code within an HTML document by embedding it between <script> tags. For example: -SEE HTML FILE

    <html>
            <head>
                <title>My JavaScript Page</title>
            </head>
        <body>
            <script>
                // JavaScript code goes here
                    console.log("Hello, world!");
                </script>
        </body>
    </html>

    When the browser loads this HTML document, it will execute the JavaScript code contained within the <script> tags.
*/



/*
    3. External JavaScript Files: 
    Instead of embedding JavaScript directly into an HTML document, you can also store your JavaScript code in external files with a .js extension. For example, you can create a file named script.js containing your JavaScript code: 
*/
// - HTML FILE
console.log("Hello, world from external scr!");
/*
    you can link to this external file in your HTML document using the <script> tag:
    <html>
        <head>
            <title>My JavaScript Page</title>
            <script src="script.js"></script>
        </head>
        <body>
            <!-- HTML content here -->
        </body>
    </html>

    When the browser loads the HTML document, it will also load and execute the JavaScript code from the external file.
*/



/*
    4. Node.js Environment: 
    If you're working on the server-side or need to run JavaScript outside of a browser environment, you can use Node.js. Node.js is a runtime environment that allows you to run JavaScript code on the server. After installing Node.js on your computer, you can create JavaScript files and run them using the Node.js command-line interface.

    For example, suppose you have a JavaScript file named script.js containing the following code:

    // script.js
    console.log("Hello, world!");

    You can run this file using Node.js by opening a terminal or command prompt, navigating to the directory containing script.js, and then typing:

    node script.js

    This will execute the JavaScript code and output "Hello, world!" to the terminal.

    These are just a few of the common methods for running JavaScript code. The method you choose will depend on your specific needs and the environment in which you're working.
*/