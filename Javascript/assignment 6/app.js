//      PDF  20 TO 25           STRING METHODS

// QUESTION # 1 :Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled
//            fullName. Greet the user using his full name.

// var firstName = prompt("Enter your First Name");
// var  lastName = prompt("Enter your Last Name");
// document.write(firstName, " ", lastName);


// QUESTION # 2 : Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your
//   browser.

// var favorite= prompt("Which phone do you favorite model");
// document.write(` <h1> My  favorite Phone is: ${favorite} </h1> <br>Length of string: ${favorite.length}`);


// QUESTION # 3  : Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

// var city = "pakistani";
// document.write(`String: ${city} <br> Index of 'n': ${city.indexOf("n")}`)


// QUESTION # 4 : Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var word = "Hello World";
// document.write(`String: ${word} <br> Last index of 'l': ${word.lastIndexOf("l")}`);



// QUESTION # 5 : Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var city = "pakistani";
// document.write(`String: ${city} <br>Character at index 3: ${city.charAt(3)}`);



// QUESTION # 6 : Repeat Q1 using string concat() method.

// let firstName = prompt("Enter your First Name");
// let lastName = prompt("Enter your Last Name");
// let fullName = firstName.concat(" " + lastName);

// document.write(fullName);


// QUESTION # 7 : Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var city = "hyderabad";
// var replace = city.replace("hyder", "islambad");

// document.write(`City: ${city} <br>After replacemnet: ${replace}`);



// QUESTION # 8 : Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

// var message = "Ali and Sami are the best friends. They play cricket and football together";
// var replace = message.replaceAll("and", "&");

// document.write(`Message :  ${message} <br>`);
// document.write(`After replacemnet :  ${replace}`);


// QUESTION # 9 : Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var num = 472;
// var num2 = num.toString();

// document.write(`Value: ${num} <br> Type: ${typeof num.toString()} <br> Value: ${num}
// <br> Type: ${typeof num}`);


// QUESTION # 10 : Write a program that take a URL as user input in the following format: (www.facebook.com /www.instragram / www.yahoo.com ).
//    Extract the domain name & show in your browser.

// var user_input = prompt("Enter any URL");
// document.write(`URL: ${user_input} <br> Domain: ${user_input.slice(4)}`);


// //Q11 : Write a program that takes user input. Convert and show the input in capital letters.

// let user_input = prompt("Enter any word");
// let blockLetter = user_input.toUpperCase();

// document.write(`User input: ${user_input} <br> Upper case: ${blockLetter}`);


// QUESTION # 12 : Write a program that takes user input. Convert and show the input in small letters.

// let user_input = prompt("Enter any word");
// let smallLetter = user_input.toLowerCase();

// document.write(`User input: ${user_input} <br> lower case: ${smallLetter}`);


// QUESTION # 13 : Write a program that takes user input. Convert and show the input in title case.

// let user_input = prompt("Enter any word");

// let firstLetter = user_input.slice(0, 1).toUpperCase();
// let restLetter = user_input.slice(1).toLowerCase();

// document.write(firstLetter + restLetter);


//  QUESTION # 14 : Write a program that converts the variable num to string. var num = 35.36 ;
//   Remove the dot to display “3536” display in your browser.

//  var num = 35.36;
// var convert = num.toString().replace(".", "");

//  document.write('<h2>Number</h2> '+ convert);



// //QUESTION # 15 : Write a program to display the value of x in your browser if a=”3” and b=”3”?  x = a + b

// let a = "3";
// let b = "3";
// let x = a + b;

// document.write("a + b is ", x, "<br>");     // //Q15 Answer



//  QUESTION # 16 :  Write a program to display the value of x in your browser if a=”3” and b=”3”?  x = a - b


// let a = "3";
// let b = "3";
// let x = a - b;

// document.write("a - b is ", x, "<br>");    



// QUESTION # 17 : Write a program to take user input and store username in a variable. If the username contains any special symbol among
//    [@ . , !], prompt the user to enter a valid username. For character codes of [@ . , !], refer to ASCII table at the end of this document.
//      Note:
//   ASCII code of ! is 33
//   ASCII code of , is 44
//   ASCII code of . is 46
//   ASCII code of @ is 64

// var userName = prompt("Please enter a username");

// if (userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")) {
//     alert("Valid username");
// }
// else {
//     alert("Please enter a valid username");
// }


// QUESTIN # 18 : You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//    Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
//   Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform
//   about its availability. Example:

// let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// let user_input = prompt("What would you like to order").toLowerCase();

// if (bakery.includes(user_input)) {
//   document.write(`${user_input} is available at index ${bakery.indexOf(user_input)} in our bakery`);
// }
// else {
//   document.write(`Sorry, ${user_input} is not available in our bakery`);
// }


// QUESTION # 19 : Write a program to take two input strings. Using string comparison, tell which string is greater than other or if they both are equal.

// let userInput1 = prompt("Please enter value 1");
// let userInput2 = prompt("Please enter value 2");

// if (userInput1 > userInput2) {
//   document.write(`${userInput1} is greater than ${userInput2}`);
// }
// else if (userInput1 < userInput2) {
//   document.write(`${userInput2} is greater than ${userInput1}`);
// }
// else {
//   document.write(`${userInput2} is equal to ${userInput1}`);
// }


// QUESTION # 20 : Write a program to take password as an input from user. The password must qualify these requirements:
//     a. It should contain alphabets and numbers
//     b. It should not start with a number
//     c. It must at least 6 characters long
//     If the password does not meet above requirements,
//     prompt the user to enter a valid password.
//     For character codes of a-z, A-Z & 0-9, refer to ASCII
//     table at the end of this document.



// var password = prompt("Enter your password:");

// document.write("Entered password: " + password + "<br>");

// // Check password conditions
// if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
//     document.write("Password must contain both alphabets and numbers.<br>");
//     document.write("Please enter a valid password");
// } else if (/^[0-9]/.test(password)) {
//     document.write("Password can not begin with a number.<br>");
//     document.write("Please enter a valid password");
// } else if (password.length < 6) {
//     document.write("Password must be at least 6 characters long.<br>");
//     document.write("Please enter a valid password");
// } else {
//     document.write("Password is valid.");
// }



//     QUESTION # 21 : Write a program to convert the following string to an array using string split method.
//   var university = “University of Karachi”;
//    Display the elements of array in your browser.    

// var university = "University of Karachi";
// var universityArray = university.split(" ");

// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }


// QUESTION # 22 : Write a program to display the last character of a user input.
// var userinput = prompt("Enter any word");
// var lastCharacter = userinput[userinput.length -1]
// alert("Last character of input : " + lastCharacter);





// QUESTION # 23 : You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word
//   “the” in given string.

// var str = "The quick brown fox jumps over the lazy dog".toLowerCase();
// var count = str.split("the").length -1;

// document.write(`Text : The quick brown fox jumps over the lazy dog <br> There are ${count} occurrence(s) of word 'the'`)





// QUESTION # 24 :  Write a program to count number of vowels & consonants in given string
//    var str = “Pakistan”;

