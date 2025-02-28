//                           VARIABLES FOR STIRNGS



// Q1// var usename ;
// var myName = " Person kumar"

//Q3A// var message ;
//Q3B//message = "Hello World"
//Q3C//alert (message)

//Q4 
 // var StudentName="Person kumar";
// var studentRollno ="342790"
// var CNICNO = 44401

// alert(StudentName)
// alert( studentRollno)
// alert(CNICNO)

//Q5
// var eat=" PIZZAR \n PIZZ \n PIZ \n ZAR"
// alert(eat)

//Q6
// var noofchildern = prompt("Enter on of childern")
// var partnername = prompt("Enter on of partnername")
// var geographiclocation =prompt("Enter on geographic location")
// var jobTitle = prompt("Enter your Job/Bussiness")


// alert(noofchildern)
// alert(partnername)
// alert(geographiclocation)
// alert(jobTitle)


// Q7
// Declare a variable called email and assign your email address to it
//var email = "personkumar857@gmail.com";

// Show the message in an alert box using string concatenation
//alert("Your email address is: " + email);

// var email = prompt("Enter you email");
// alert(email)

//Q8
// var book ;
// var book = "A smarter way to learn JavaScript"
// alert(book)

// OR
// var book = prompt("A smarter way to learn JavaScript")
//  alert(book)

// Q9
// Declare variables
// var name = "my name is Person kumar";
// document.write(name)

// var age = " 23";
// document.write(age )

// var university = " I study in orasoft institute";
// document.write(university)

// var course = "  Bscs";
// document.write(course)


// document.write("My name is " + "Person kumar" + "<br>");
// document.write("I am " + age + " 22" + "<br>");
// document.write("I study in " + "orasoft institute" + "<br>");
// document.write("I take " + bscs + " classes" + "<br>");

// Q10
// document.write(" <h2> Yey ! I can write HTML contact throught Javascript </h2>")


 // VARIABLES FOR NUMBER PDF # 3

 //Q#1

//  var age = 23
//  alert(` I am ${age} years old `) ;       

 //Q#2
// var visit = 26;
// alert(`You have visited this site ${visit} times`);

//Q#3
// var birthYear = 1993
// document.write("My birth year is " + birthYear)

// Q#4
// var  VisitorsName = prompt("Your Name")
// var productTitle = prompt(" What would you like to order?")
// var  Quantity = prompt("Item Quantity...")

// document.write (`${VisitorsName} ordered ${Quantity} ${productTitle} on XYZ Cloting store`)




//                     VARIABLE NAMES: LEGAL & ILLEGAL





//Q#1

// var a,b,C

//Q#2

// var $name;
// var name$;
// var _name;
// var name_;
// var name123;

// // ILLEGAL VARIABLES

// var 666name;
// var name-666;
// var first name;
// var @name;
// var true;


//Q#3

// document.write
//    ( `
//     <p> a.   A heading stating “Rules for naming JS Variables . </p>

//     <p> b.   Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable . </p>

//     <p> c.   Variables must begin with a ______, ______ or  _____. For example $name, _name or name . </P>

//     <p> d.   Variable names are case _________ . </P>

//     <p> e.   Variable names should not be JS _________  . </p>

//  `)



//                             MATH EXPRESSIONS



// Q#1

// var num1 = 13;
// var num2 = 9;
// var sum = num1 + num2 ;

// alert(" sum of 13 and 9  is "  +  sum);


// Q#2

// var subtract = num1 - num2;
// alert("Result of subtracting 9 from 13 is "+ subtract);

// var multiply = num1 * num2;
// alert("Result of multiplying 13 and 9 is " + multiply);

// var divide = num1 / num2;
// alert("Result of dividing 13 by 9 is " + divide);

// var remainder = num1 % num2;
// alert("Remainder of dividing 13 by 9 is " + remainder)


// Q#3

// var anyNo;
// document.write("Value after variable decleration is " + anyNo);

// anyNo = 3;
// document.write("<br>Initial value: " + anyNo);

// anyNo++;
// document.write("<br>Value after increment is " + anyNo);

// anyNo += 7;
// document.write("<br>Value after addition is " + anyNo);

// anyNo --;
// document.write("<br>Value after decrement is " + anyNo);

// var remainder2 =  anyNo % 3;
// document.write("<br>The remainder is " + remainder2);


// Q4

// var ticketPrice = 600;
// var ticketQuantity = 5;

// document.write(` <h3> Total cost to buy ${ticketQuantity} tickets to a movie is ${ticketPrice * ticketQuantity} PKR </h3>`);


//Q#5

// var tableNO = 14;    

// document.write(`

//  <h3> Multiplication table of 14 </h3> <br><br>


//     ${tableNO} x  1 = ${14 * 1} <br>
//     ${tableNO} x  2 = ${14 * 2} <br>
//     ${tableNO} x  3 = ${14 * 3} <br>
//     ${tableNO} x  4 = ${14 * 4} <br>
//     ${tableNO} x  5 = ${14 * 5} <br>
//     ${tableNO} x  6 = ${14 * 6} <br>
//     ${tableNO} x  7 = ${14 * 7} <br>
//     ${tableNO} x  8 = ${14 * 8} <br>
//     ${tableNO} x  9 = ${14 * 9} <br>
//     ${tableNO} x  10 = ${14 * 10} <br>

//     `)


//Q#6

// var celsius = 12;
// var convert_to_fahrenheit = (celsius * 9 / 5) + 32;
// var fahrenheit = 68;
// var convert_to_celsius = (fahrenheit - 32) * 5 / 9;

// document.write(`${celsius}<sup>o</sup>C is ${convert_to_fahrenheit}<sup>o</sup>F <br>`);
// document.write(`${fahrenheit}<sup>o</sup>F is ${convert_to_celsius}<sup>o</sup>C  <br>`);


// Q#7

// var price_item1 = 560;
// var quantity_item1 = 2;
// document.write("Price of item 1 is " + price_item1, "<br>");
// document.write("Quantity of item 1 is " + quantity_item1, "<br>");

// var price_item2 = 200;
// var quantity_item2 = 5;
// document.write("Price of item 2 is " + price_item2, "<br>");
// document.write("Quantity of item 2 is " + quantity_item2, "<br><br>");

// var shipping = 150;
// document.write("Shipping charges " + shipping, "<br><br>");
// document.write(`Total cost of your order is ${price_item1 *quantity_item1 + price_item2 * quantity_item2 + shipping} PKR`);


//Q#8

// var total_marks = 1200;
// document.write("Total marks : " + total_marks, "<br>")

// var obtained_marks = 900;
// document.write("Obtained marks : " + obtained_marks, "<br>")

// var percentage = obtained_marks / total_marks * 100;
// document.write("Percentage : " + percentage + "%", "<br><br>")


 // Q#9
// var dollar_rate = 104;
// var dollar_quantity = 10;

// var riyal_rate = 28;
// var riyal_quantity = 25;

// var total = (dollar_rate * dollar_quantity + riyal_rate * riyal_quantity);
// document.write(" <h2> Total currency in PKR :</h2> " + total, "<br><br>");


// Q#10
// var someNumber = 5;
// var add = 5;
// var multiply2 = 10;
// var divide2 = 2;

// var expression = someNumber + add * multiply2 /divide;
// alert(expression);


// Q#11
// var current_year = 2025;
// document.write("Current Year : " + current_year, "<br>");
// var birth_year = 2000;
// document.write("Birth Year : " + birth_year, "<br><br>");

// var age1 = current_year - birth_year;
// var age2 = age1 - 1;
// document.write("They are either " + age2 + " or " + age1 + " years old", "<br><br>");


//  Q#12
// var radius = 12;
// var pi = 3.142;
// var circumference = 2 * pi * radius;

// document.write("Radius of a circle : " + radius, "<br>");
// document.write("The circumference is : " + circumference + "<br>");
// document.write("The area is : " + pi * radius * radius, "<br><br>");


// Q#13
// var a = 10;
// document.write("The value of a is: " + a, "<br><br>");

// ++a;
// document.write("The value of ++a is: " + a, "<br>");
// document.write("Now the value of a is: " + a, "<br><br>");

// document.write("The value of a++ is: " + a, "<br>");
// a++;
// document.write("Now the value of a is: " + a, "<br><br>");

// --a;
// document.write("The value of --a is: " + a, "<br>");
// document.write("Now the value of a is: " + a, "<br><br>");

// document.write("The value of a-- is: " + a, "<br>");
// a--;
// document.write("Now the value of a is: " + a, "<br><br>");


//Q14

// ????


//  Q#15
// var snack = "LAY'S WAVY";
// var age3 = 25;
// var max_life = 70;
// var amount_of_snack = 1;
// var remaing_life = max_life - age3;
// var days_of_a_year = 365;

// document.write("Favorite Snack : " + snack, "<br>");
// document.write("Current Age : " + age3, "<br>");
// document.write("Estimated Maximum Age : " + max_life, "<br>");
// document.write("Amount of snacks per day : " + amount_of_snack, "<br><br>");

// document.write("You will need " + remaing_life * days_of_a_year + " " + snack + " to last you until the ripe old age of " + max_life)
