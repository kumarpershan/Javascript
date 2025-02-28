//          PDF  26 TO  34   //    MATH	  AND	DATE  METHODS

// QUESTION # 1  : Write a program that takes a positive integer from user &  display the following in your browser.
//     a. number
//       b. round off value of the number
//         c. floor value of the number
//            d. ceil value of the number

// ANSWER 

// var num = 45;

// document.write(`number : ${num} <br> round off value : ${Math.round(num)} <br> floor value : 
// ${Math.floor(num)} <br> ceil value : ${Math.ceil(num)}`)



//  QUESTION # 2 : Write a program that takes a negative integer from user & display the following in your browser.
//         a. number
//            b. round off value of the number
//               c. floor value of the number
//                  d. ceil value of the number

// ANSWER 

// var num = -32;

// document.write(`number : ${num} <br> round off value : ${Math.round(num)} <br> floor value : 
// ${Math.floor(num)} <br> ceil value : ${Math.ceil(num)}`)



//  QUESTION # 3 : Write a program that takes a positive floating point number from user & display the following in your browser.
//   a. number
//      b. round off value of the number
//         c. floor value of the number
//            d. ceil value of the number

//   ANSWER 


// var num = 3.45214;

// document.write(`number : ${num} <br> round off value : ${Math.round(num)} <br> floor value : 
// ${Math.floor(num)} <br> ceil value : ${Math.ceil(num)}`)


//  QUESTION # 4 : Write a program that takes a negative floating point number from user & display the following in your browser.
//     a. number
//       b. round off value of the number
//         c. floor value of the number
//              d. ceil value of the number

// ANSWER 
 
// var num = -2.673;

// document.write(`number : ${num} <br> round off value : ${Math.round(num)} <br> floor value : 
// ${Math.floor(num)} <br> ceil value : ${Math.ceil(num)}`)


//  QUESTION # 5  : Write a program that displays the absolute value of a number. 
//       E.g. absolute value of -4 is 4 & absolute value of 5 is 5 

// ANSWER 

// var num = -4;
// document.write(`The absolute value of ${num} is ${Math.abs(num)}`)


// QUESTION # 6 : Write a program that simulates a dice using random() method  of JS Math class. Display the value of dice in your browser.

// ANSWER 
// document.write(`<h2> Random dice value of : ${Math.floor(Math.random(1)*11)} <br> Random dice value of : ${Math.floor(Math.random(1)*11)}</h2>`)


//  QUESTION # 7 : Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.

// ANSWER 


// var heads = prompt("Player 1");
// var tails = prompt("Player 2");
// var toss = Math.random()*2;

// if(toss == 0){
//     alert(`${heads} is Toss win`)
  
// }
// else{
//     alert(`${tails} is Toss win`)
   
// }

// QUESTION # 8 : Write a program that shows a random number between 1 and 100 in your browser.

// ANSWER 


// document.write(`random number between 1 to 100 : ${Math.floor(Math.random(1)*101)}`);


// Question # 9 : Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
//    a. 50
//      b. 50kgs
//       c. 50.2kgs
//         d. 50.2kilograms

// ANSWER

// var weight = parseFloat(prompt("Enter any weight"));

// document.write(`The weight of user is ${weight} kilograms`)


// Question # 10 : Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 
//    and 10. If the user input equals the secret number, congratulate the user . 

// ANSWER 

// var secret = 3;

// var user = +prompt("Enter any Number from 1to10");

// if(secret == user){
//     alert("Congratulate")
// }else{
//     alert("Try Again")
// }


// Question # 11 : Write a program that displays current date and time in your browser.

// ANSWER

// var date = new Date();
// document.write(date);


// Question # 12 : Write a program that alerts the current month in words. For example December.

// ANSWER 

//  var month = new Date();
//  var monthsName = ["January","February ","March","April","May","June","July","August","September","October","November","December"];
//  document.write(`<h1> Current month :${monthsName[month.getMonth()]} </h1>`)


// Question # 13 : Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun

// ANSWER 

// var day = new Date();
// var daysName = ["sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"];
// document.write(`<h1> Today is : ${daysName[day.getDay()].slice(0,3)}</h1>`)


// Question # 14 : Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today .

// ANSWER 


// var today = new Date().getDay();

// if (today === 0 || today === 6) {
//     document.write("It's Fun day");
// } else {
//     document.write("It's not Fun day");
// }


// Question # 15 Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”

// ANSWER 

// var day = new Date().getMonth();

// if(day < 15){
//     alert("First fifteen days of the month")
// }
// else{
// alert("Last day of the month")
// }



// Question # 16 : Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared 
//  beforehand. Use any variable you like to represent the Date object.

// ANSWER

// var current = new Date()
// var milisecond = current.getTime();
// var minute = (1000 * 60 )/ milisecond;

// document.write(`Current Date : ${current} <br> Elapsed miliseconds since January 1, 1970 : ${milisecond} <br> Elapsed minutes since January 1, 1970 : ${minute}`);

// Question # 17 : Write a program that tests whether it's before noon and alert “Its AM” else “its PM”

// ANSWER 

// var currentHours = new Date().getHours();
// if(currentHours < 12){
//     alert("It;s AM")
// }
// else{
//     alert("It's PM")
// }


// Question # 18 : Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate

// ANSWER 

// var laterDate = new Date(2025,11,31);
// document.write(`<h1>Later Date : ${laterDate}</h1>`);


// Question # 19 : Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
//    Note: 1st Ramadan was on June 18, 2015

// ANSWER 

// var ramdan2015 = new Date(2015,5,18);
// var currentRamdan = new Date(2024,2,11);
// var final = currentRamdan - ramdan2015;
// var final2 =  final / (1000 * 60 * 60 * 24);
// document.write(`<h2> ${Math.floor(final2)} days have passed since 1st Ramdan,2015 </h2> `);


// Question # 20 : Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// ANSWER 

// var December = new Date(2015,11,5,22,50,16);
// var January = new Date(2015,0,1,0,0,0);
// var seconds = December - January;
// var final = seconds / 1000;
// document.write(` <h3> On refrence date set ${December} , <br> ${final} seconds had passed since beginning of 2015 </h3>`)


// QUESTION # 21 : Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the 
//  date object in your browser.

// ANSWER 





// QUESTION # 22 : Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// ANSWER 





// QUESTION # 23 : Write a program to ask the user about his age. Calculate and show his birth year in your browser .

// ANSWER 




// QUESTION # 24 : Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal 
//    places. Display the following fields:
//   a. Customer Name
//   b. Current Month
//   c. Number of units
//   d. Charges per unit
//   e. Net Amount Payable (within Due Date)
//   f. Late Payment Surcharge
//   g. Gross Amount Payable (after Due Date)
//  Where,
//   Net Amount Payable (within Due Date) = Number of units * Charges per unit
//  &
//   Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// ANSWER 

