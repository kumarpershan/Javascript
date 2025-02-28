//              PDF  8---11      USER INPUT AND CONDITIONAL STATEMENTS:

// Question : 01

// var user_name = prompt(`Enter your name`);
// alert("Hi " + user_name);
// alert(" How are you  " +  user_name)


// Qestion : 02

// var num = prompt(`Enter a number to print it's multiplication table`);
// document.write(`<h2>Multilication Table of ${num}</h2>
//     ${num} x 1 = ${num * 1} <br>
//     ${num} x 2 = ${num * 2} <br>
//     ${num} x 3 = ${num * 3} <br>
//     ${num} x 4 = ${num * 4} <br>
//     ${num} x 5 = ${num * 5} <br>
//     ${num} x 6 = ${num * 6} <br>
//     ${num} x 7 = ${num * 7} <br>
//     ${num} x 8 = ${num * 8} <br>
//     ${num} x 9 = ${num * 9} <br>
//     ${num} x 10 = ${num *10} <br>`);

    // Question : 03

//    var name = prompt(`Enter your city name`);
//    if (name === "karachi") {
//     alert(`Welcome to the city of Light`);
//    }
//     else {
//         alert(`Sorry TryAgain!`);
//     }

// Question : 04

// var gender = prompt(`Please enter your gender (male/female)`);

// if (gender === "male") {
//     alert(`Good Morning! Sir`);
// }

// else if (gender === "female") {
//     alert(`Good Morning! Madam`);
// }

// Question : 05

// var color = prompt(`Please enter traffic signal color red/yellow/green`);

// if (color === "red") {
//     alert(`Vehciles must stop!`);
// }

// else if (color === "yellow") {
//     alert(`Vehicles should get ready to move!`);
// }

// else {
//     alert(`Vehicles can move now!`);
// }

// else {
//     alert("Invalid Value");
// }

// Question : 06

// var maxAge = +prompt(`Max Age`);
// var currentAge = +prompt(`Current Age`);

// if (currentAge > maxAge) {
//     alert(`You are older than the maxming age!`);
// }

// else if (currentAge < maxAge) {
//     alert(`You are younger than the maxming age!`);
// }

// Question : 07

// var fuel = +prompt(`Please enter remanaining fuel in liters`);

// if (fuel < 5) {
//     alert(`Please refill your fuel tank!`);
// }

// else {
//     alert(`You have enough fuel to continue driving!`);
// }


//QUESTION # 8

// a.

// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }

// b.

// var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }

// c.

//  var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//  alert("condition 2 is true");
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is true");
// }

// d .

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }

// e .

// if (true){
//     alert("True");
//    }
// if (false){
//     alert("False");
// }

// f .

// if("car" < "cat"){
//     alert("car is smaller than cat");
//    }

// QUESTION # 9

// var eng = +(prompt("How many marks did you obtain in the English"));
// var urdu = +(prompt("How many marks did you obtain in the Urdu"));
// var math = +(prompt("How many marks did you obtain in the Math"));
// var bio = +(prompt("How many marks did you obtain in the Bio"));
// var comp = +(prompt("How many marks did you obtain in the Computer"));
// var chem = +(prompt("How many marks did you obtain in the Chemistry"));


// var obtained_marks =  eng + urdu + math + bio + comp + chem ;
// var total_marks = 500;
// var percentage = obtained_marks / total_marks * 100;
// var grade;
// var remark;

// if (percentage > 80) {
//     grade = "A+", remark = "Excellent";
// }
// else if (percentage >= 70) {
//     grade = "A", remark = "Good";
// }
// else if (percentage >= 60) {
//     grade = "B", remark = "Not Bad";
// }
// else if (percentage >= 50) {
//     grade = "C", remark = "You need to improve";
// }
// else if (percentage >= 40) {
//     grade = "D", remark = "Poor";
// }
// else {
//     grade = "Fail", remark = "Sorry ";
// }

// document.write(
//     ` <table border="2px">

//         <tr>
//             <th>Subject</th>
//             <th>Obtained Marks</th>
//             <th>Subject Marks</th>
//             <th>Total Obtained Marks</th>
//             <th>Total Marks</th>
//             <th>Grade</th>
//             <th>Percentage</th>
//             <th>Remarks</th>
//         </tr>

//         <tr>
//             <td>English</td>
//             <td>${eng}</td>
//             <td>100</td>
//             <td rowspan="6">${obtained_marks}</td>
//             <td rowspan="6">${total_marks}</td>
//             <td rowspan="6">${grade}</td>
//             <td rowspan="6">${percentage.toFixed(2)}</td>
//              <td rowspan="6">${remark}</td>
//         </tr>

//         <tr>
//             <td>Urdu</td>
//             <td>${urdu}</td>
//             <td>100</td>
//         </tr>

//         <tr>
//             <td>Math</td>
//             <td>${math}</td>
//             <td>100</td>
//         </tr>


//         <tr>
//             <td>Bio</td>
//             <td>${bio}</td>
//             <td>100</td>
//         </tr>

        
//         <tr>
//             <td>Computer</td>
//             <td>${comp}</td>
//             <td>100</td>
//         </tr>

        
//         <tr>
//             <td>Chemistry</td>
//             <td>${chem}</td>
//             <td>100</td>
//         </tr>

//     </table>`
// )

// QUESTION # 10

// var item1 = prompt("What do you like to order item1");
// var item1Price = Number(prompt("Item #1 Price"));
// var item1Quantity = Number(prompt("Item #1 Quantity"));

// var item2 = prompt("What do you like to order item2");
// var item2Price = Number(prompt("Item #2 Price"));
// var item2Quantity = Number(prompt("Item #2 Quantity"));

// var shipping = Number(prompt("Shipping Charges"));
// var total = item1Price * item1Quantity + item2Price * item2Quantity + shipping;
// var discount = total * 10 / 100;

// document.write(
//     `Price of ${item1} is ${item1Price} <br> Quantity of ${item1} is ${item1Quantity}<br> Price of ${item2} is ${item2Price} <br> Quantity of ${item2} is ${item2Quantity} <br><br> Shipping Charges ${shipping} <br> <br>
//     Total cost of your order is ${total}<br>`
// );

// if (total <= 2000) {
//     document.write(`You are not Eligible for Discount`);
// } else {
//     document.write(`Discounted Price is ${total - discount}`);
// }

//  QUESTION # 11

// var randomNo = Math.floor(Math.random() * 10) + 1;
// var user_guess = +(prompt("Guess the secret number between 1 to 10 "));
// console.log(randomNo);

// if (randomNo == user_guess) {
//     document.write(`Computer guess ${randomNo} <br> You guess ${user_guess} <br> Bingo Correct Answer`);
// }
// else if (user_guess + 1 == randomNo) {
//     document.write(`Computer guess ${randomNo} <br> You guess ${user_guess} <br>Close enough to the correct answer`);
// }
// else if (user_guess - 1 == randomNo) {
//     document.write(`Computer guess ${randomNo} <br> You guess ${user_guess} <br>Close enough to the correct answer`);
// }
// else {
//     document.write("Please try again");
// }



// QUESTION # 12

// var divisible = Number(prompt("Please enter any number"));

// if (divisible % 3 == 0) {
//     document.write(`Yahoo: Your value ${divisible} is Divisible by 3`);
// } else {
//     document.write(`Ops: Your value ${divisible} is not Divisible by 3`);
// }


// QUESTION # 13

// var teamA = prompt("Team (A) Name");
// var teamAscore = Number(prompt("Team (A) Scores"));
// var teamB = prompt("Team (B) Name");
// var teamBscore = Number(prompt("Team (B) Scores"));

// if (teamAscore == teamBscore) {
//     alert("Match Tie");
// }
// else if (teamAscore > teamBscore) {
//     alert(`${teamA}'s have won the game`);
// }
// else if (teamAscore < teamBscore) {
//     alert(`${teamB}'s have won the game`);
// }
// else {
//     alert("Invalid Value");
// }



// QUESTION # 14

// var alphabetic_value = prompt("Enter any Alphabetic Value ");
// var numeric_value = +(prompt("Enter any Numeric Value "));
// var bool = prompt("Enter True or False");

// if (typeof (alphabetic_value) === "string") {
//     alert(`${alphabetic_value} is a string`);
// } else if (numeric_value === "number") {
//     alert(`${numeric_value} is a number`);
// } else if (bool === "boolean") {
//     alert(`${bool} is a number`);
// } else {
//     alert("Invalid Value")
// }

// if (typeof (alphabetic_value) === "string") {
//     alert(`${alphabetic_value} is a string`);

//     if (typeof (numeric_value) === "number") {
//         alert(`${numeric_value} is a number`);

//         if (typeof (bool) === "boolean") {
//             alert(`${bool} is a Boolean`);
//         }
//         else {
//             alert("Invalid Value");
//         }
//     } else {
//         alert("Invalid Value");
//     }
// }
// else {
//     alert("Invalid Value");
// }


//  QUESTION # 15

// var user_input = +(prompt("Please enter any number"));

//  if (user_input % 2 == 0) {
//      document.write(`Its a Even number ${user_input}`);
//  } else {
//      document.write(`Its a Odd number ${user_input}`);
// }

// QUESTION # 16

// var temperature = +(prompt("Please enter the Temperature of outside"));
// if (temperature >= 40) {
//     document.write("It is too hot outside.")
// }
// else if (temperature >= 30) {
//     document.write("The Weather today is Normal.")
// }
// else if (temperature >= 20) {
//     document.write("Today's Weather is cool.")
// }
// else if (temperature >= 10) {
//     document.write("OMG! Today's weather is so Cool.")
// }


//  QUESTION # 17

// var firstNO = +(prompt("Please enter First Number"));
// var secondNO = +(prompt("Please enter Second Number"));
// var operator = prompt("Which operation do you want to perform", "+");

// if (operator == "+") {
//     document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO + secondNO} `);
// }
// else if (operator == "-") {
//     document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO - secondNO} `);
// }
// else if (operator == "*") {
//     document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO * secondNO} `);
// }
// else if (operator == "/") {
//     document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO / secondNO} `);
// }
// else if (operator == "%") {
//     document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO % secondNO} `);
// }


//  QUESTION # 18

// var day = prompt("Please enter the day name");

// if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday") {
//     document.write("Its a week day");
// }
// else if (day == "saturday") {
//     document.write("Its Weekend");
// }
// else if (day == "sunday") {
//     document.write("Yay! It's a holiday.");
// }
// else {
//     document.write("Invalid Value");
// }


// QUESTION # 19

// var score = +prompt("What is your score");
// if (score > 50) {
//     document.write("You are passes");
// }
// else {
//     document.write("Try Again!");
// }


// QUESTION # 20

// var num1 = +prompt("Please enter Value 1");
// var num2 = +prompt("Please enter Value 2");

// if (num1 > num2) {
//     document.write(`The greater number of ${num1} and ${num2} is ${num1}`);
// }
// else if (num2 > num1) {
//     document.write(`The greater number of ${num1} and ${num2} is ${num2}`);
// }
// else {
//     document.write(`Both numbers are equal ${num1} and ${num2}`);
// }

//QUESTION # 21

// var languages = prompt("Enter any language")            

// if( languages == "es" ){   
//     alert("Hello World")
// }

// else if( languages == "de" ){ 
//    alert("Hello World")
// }

// else if( languages == "en" ){  
//    document.write("Hello World")
// }
// else {
//     document.write("please try again ")
// }

//QUESTION #22

// var num3 = +prompt("Enter any number");
// if (isNaN(num3)) {
//     document.write("Invalid Value");
// }
// else if (num3 > 0) {
//     document.write(`The number ${num3} is Positive`);
// }
// else if (num3 < 0) {
//     document.write(`The number ${num3} is Negative`);
// }
// else {
//     document.write(`The number is ${num3}, which is neither positive or negative.`);
// }




//QUESTION # 23

// var num6 = +prompt("Please enter a number");
// var noun = prompt("Please enter a noun");
// alert(` ${num6} ${noun}`);



//                           PDF 12 TO 13

//       IF...ELSE & ELSE IF STATEMENTS, TESTING SET OF CONDITIONS & SWITCH STATEMENTS


//QUESTION # 1

// var user_input = +(prompt("Please enter any number"));

// if (user_input % 3 == 0) {
//     document.write(`divisible ${user_input}`);
// } else {
//     document.write(`“Number is not divisible by 3 ${user_input}`);
// }

//QUESTION # 2

// var user_input = +(prompt("Please enter any number"));

// if (user_input % 2 == 0 ) {
//     document.write(`Its a Even number ${user_input}`);
// } else {
//     document.write(`Its a Odd number ${user_input}`);
// }


//QUESTION # 3

// var age = +prompt("How old are you");
// if (age >= 18) {
//     document.write("Old Enough")
// }
// else {
//     document.write("Too young")
// }

//QUESTION # 4

// var greeting = prompt("What your Name");

// if (greeting == "pershan") {
//     document.write("Special Welcome");
// }

//QUESTION # 5

// var divisible = Number(prompt("Please enter any number"));

// switch (divisible % 3) {
//     case 0:
//         document.write(`Correct :  Your value ${divisible} is Divisible by 3`);
//         break;
//     default:
//         document.write(`Incorrect :  Your value ${divisible} is not Divisible by 3`);
// }



// QUESTION # 6

// var character = +prompt("Enter any number")

// if (character >= 65 && character <= 90) {
//     document.write("UPPERCASE LETTER");
// }
// else if (character >= 97 && character <= 122) {
//     document.write("lower case letter");
// }
// else {
//     document.write("Invalid Value");
// }


// QUESTION # 7


// var firstNO = +(prompt("Please enter Firsts Number"));
// var secondNO = +(prompt("Please enter Second Number"));
// var operator = prompt("Which operation do you want to perform", "+" );

// switch (operator) {
//     case "+":
//         document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO + secondNO} `);
//         break;
//     case "-":
//         document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO - secondNO} `);
//         break;
//     case "*":
//         document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO * secondNO} `);
//         break;
//     case "/":
//         document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO / secondNO} `);
//         break;
//     case "%":
//         document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO % secondNO} `);
//         break;
//     default:
//         document.write("Invalid Operator");
// }

//QUESTION # 8

// var time = +prompt("Please enter time value");

// if (time >= 0 && time < 1200) {
//     document.write("Good Morning!");
// }
// else if (time >= 1200 && time < 1700) {
//     document.write("Good Afternoon!");
// }
// else if (time >= 1700 && time < 2100) {
//     document.write("Good Evening!");
// }
// else if (time >= 2100 && time < 2359) {
//     document.write("Good Night!");
// }
// else {
//     document.write("Invalid Value!");
// }



// QUESTION # 9

// var year = +prompt("Enter the Year")

// if (year % 4 === 0) {
//     document.write("its a leap year")
// }
// else{
//     document.write("its not a leap year")
// }


// QUESTION # 10

// var password = prompt("Put your Password");

// if (password == "") {
//     document.write("Please enter your Password");
// }
// else if (password == "smit123") {
//     document.write("Correct Password");
// }
// else {
//     document.write("Incorret Password");
// }

// QUESTION # 11

// var firstName = "Ahsan";
// if (firstName === "Subash") {
//     document.write("Hello Ahsan!");
// }
// else {
//     document.write("You are not Ahsan");
// }



// QUESTION # 12

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// QUESTION # 13

// var integer1 = +prompt("Please enter Integer 1");
// var integer2 = +prompt("Please enter Integer 2");

// if (integer1 > integer2) {
//     document.write(`The larger number of ${integer1} and ${integer2} is ${integer1}`);
// }
// else if (integer2 > integer1) {
//     document.write(`The larger number of ${integer1} and ${integer2} is ${integer2}`);
// }
// else {
//     document.write(`Both Integers are equal ${integer1} and ${integer2}`);
// }

// UESTION # 14

// var num3 = +prompt("Enter any number");

// if (isNaN(num3)) {
//     document.write("Invalid Value");
// }
// else if (num3 > 0) {
//     document.write(`The number ${num3} is Positive`);
// }
// else if (num3 < 0) {
//     document.write(`The number ${num3} is Negative`);
// }
// else {
//     document.write(`The number is ${num3}, which is neither positive or negative.`);
// }


// QUESTION # 15

// var hour = +prompt("Current Hour");

// if (hour >= 6 && hour <= 9) {
//     document.write("Breakfast is served");
// }
// else if (hour >= 11 && hour <= 13) {
//     document.write("Time for lunch");
// }
// else if (hour >= 17 && hour <= 20) {
//     document.write("It's dinner time");
// }
// else {
//     document.write("Sorry, you'll have to wait, or go get a snack.")
// }

// QUESTION # 16 

// var a = "Pershan";
// var b = 50;
// var c = true;
// var d;

// document.write(`${a} is a ${typeof (a)}<br>`);
// document.write(`${b} is a ${typeof (b)}<br>`);
// document.write(`${c} is a ${typeof (c)}<br>`);
// document.write(`${d} is a ${typeof (d)}<br>`);


// QUESTION # 17

// var word = prompt("Please enter any character");

// if (word == "a" || word == "e" || word == "i" || word == "o" || word == "u") {
//     document.write(`"True! ${word} It's a vowel"`);
// }
// else {
//     document.write("False");
// }


// QUESTION # 18


// var no1 = 10;
// var no2 = 7;
// if (no1 != no2) {
//     document.write(`${no1} is not equal to ${no2}`);
// }


//QUESTION # 19

// var month = +prompt("Please enter month number");

// switch (month) {
//     case 1:
//         document.write("January");
//         break;
//     case 2:
//         document.write("February");
//         break;
//     case 3:
//         document.write("March");
//         break;
//     case 4:
//         document.write("April");
//         break;
//     case 5:
//         document.write("May");
//         break;
//     case 6:
//         document.write("June");
//         break;
//     case 7:
//         document.write("July");
//         break;
//     case 8:
//         document.write("August");
//         break;
//     case 9:
//         document.write("September");
//         break;
//     case 10:
//         document.write("October");
//         break;
//     case 11:
//         document.write("November");
//         break;
//     case 12:
//         document.write("December");
//         break;
//     default:
//         document.write("Invalid month number.");
// }


//QUESTION # 20

// var age = +prompt("Enter your age");
// var voteAble = age < 18 ? "Too young" : "Old enough";
// document.write(voteAble);