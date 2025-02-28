//  PDF 18 to 20    :   FOR LOOPS   

// QUESTION # 1 : Write a program to display the message “Hello World” 5 times in your browser using for loop. 

// for (var i = 1 ; i <= 5; i++) {
//     document.write( i  + " Hello World <br>");
//   }


// QUESTION # 2 : Write a program to print numeric counting from 1 to 10.

// for (var i = 1; i <= 10; i++) {
//     document.write(i + " <br>");
// }

// QUESTION # 3  : Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.


// var user = prompt("Enter any print multiplication table number")
// var user1= prompt("Enter length of  Multiplication  table ")
// document.write('<h2> Multiplication  table </h2>')

// for(var i=1; i <= user1; i++){
//     document.write(` ${user} x ${i} = ${user * i} <br>`)
// }


// QUESTION # 4 : You have an array A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”] 
//                Write each element on new line with the help of for loop.


// var element = ['Nokia', 'Samsung ', 'Apple', 'Sony', 'Huawei' , 'Oppo']

// for(var i=0 ; i < element.length ;  i++){
//     document.write( element[i] + '<br>')
// }


//  QUESTION # 5   : Write a program to print items of the following array using for loop:  fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for(var i = 0; i < fruits.length; i++){
//     document.write(fruits[i] + "<br>")
// }
// for(i = 0; i < fruits.length; i++){
//     document.write(`Element at index ${i} is ${fruits[i]} <br>`)
// }



//  QUESTION # 6 : Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user.

// var arraySize = +prompt("Enter the number of items")
// var items = []
// for(var i = 0; i < arraySize; i++){
//     var item = prompt(`Enter value for ${i}`)
//     items.push(item)
// }
// document.write(`No of items: ${arraySize}<br>Items:<br>`)
// for(i = 0; i < arraySize; i++){
//     document.write(items[i] + "<br>")
// }


// Question : 07 : Generate the following series in your browser. See example  output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a:
//   document.write('<h3>COUNTING:</h3>');
// for(let i = 0; i <= 15; i++ ){
//     document.write(i + ",  ")
// }

// b:
// document.write('<h3> REVERSE COUNTING: </h3>');
// for(let i = 10; i > 0; i--){
//     document.write(i + ", ")
// }

// c:
// document.write('<h3> EVEN NUMBERS: </h3>');
// for(let i = 0; i <= 20; i = i + 2){
//     document.write(i + ", ")
// }

// d:
// document.write('<h3> ODD NUMBERS: </h3>');
// for(let i = 1; i <= 19; i = i + 2){
//     document.write(i + ", ")
// }

// e:
// document.write('<h3> SERIES: </h3>');
// for(let i = 2; i <=20; i = i + 2 ){
//     document.write(i + "k" + ", ")
// }


// Question : 08: You have an array
//    A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//    Write a program to enable “search by user input” in an array.
//    After searching, prompt the user whether the given item is 
//    found in the list or not. Example

//let A = ["cake", "apple pie", "cookie", "chips", "patties"]
// let order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
// for(let i = 0; i < A.length; i++){
//     if (order == A[i]) {
//         document.write(`${order} is <b>available</b> at index ${i} in our bakery`)
//         break;
//     }
//     if (i == A.length - 1) {
//         document.write(`We are sorry. ${order} is <b>not available</b> in our bakery`)
//     }
// }

// Question : 09 : Write a program to identify the largest number in the given  array. A = [24, 53, 78, 91, 12]

// var twelve = ['24, 53, 78, 91, 12']; 
// document.write('Array items:'+ twelve +'<br> The larges number is 91')


// Question : 10 :Write a program to identify the smallest number in the given  array. A = [24, 53, 78, 91, 12]

// var thirteen = ['24, 53, 78, 91, 12'];
// document.write('Array items: '+ thirteen + '<br> The samllest number is 12');


// Question : 11 : Write a program to identify the largest & the smallest number in the given array. A = [24, 53, 78, 91, 12]

// var fourteen = [24, 53, 78, 91, 12];
// document.write('Array items:'+ fourteen + '<br> The smallest number is 12 <br> Tha largest number is 91');


// Question : 12 : Write a program to print multiples of 5 ranging 1 to 100

//  for(let i = 5; i <= 100; i = i + 5){
//      document.write(i + ", ");
// }


// QUESTION # 13 : You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// Write a program to generate the following HTML table in your  browser using JS


// var students = [" Sheikh"," Person kumar", " Akbar raza", " faraz", " fruqan"];
// var scores = [58,95 ,73, 89, 90];
// document.write(`
//         <table border="2px">
//             <tr>
//                 <th width="80px"> Students</th>
//                 <th width="80px"> Scores</th>
//             </tr>
//         </table>
//         `)
// for (let i = 0; i < students.length; i++) {
//     document.write(`
//         <table border="2px">
//             <tr>
//                 <td width="80px">${ students[i]}</td>
//                 <td width="80px">${ scores[i]}</td>
//             </tr>
//         </table>
//         `)
// }

// QUESTION #14 : Write a program that prints number from start of the array to desired stop value. Given array:
//      var scores = [12, 45, 3, 22, 34, 50];
//      (Hint: take stop value from user)
//      E.g. if user gives 3 as input value print 12, 45, 3
//      if user gives 34 as input value print 12, 45, 3, 22, 34


// var scores = [12, 45, 3, 22, 34, 50];
// var stop = +prompt("Enter the stop value")
// for (let i = 0; i < stop; i++) {
//     document.write(i + ", ")
// }


// QUESTION #15 : You have an array A = [ [1,2,3] , [4,5,6] , [7,8,9] ] Write each element on new line with the help of nested for  loops


//  A = [ [ 1, 2, 3] , [ 4, 5, 6] , [ 7, 8, 9]]
// for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < A[i].length; j++) {
//            document.write(A[i][j] + " ")
//     }
//     document.write("<br>")
// }


// QUESTION # 16 :Write a program to repeatedly print the value of the variable  num which is input by user. Value should be decreasing by 0.5 
// each time, as long as x Value remains positive


// var variable = +prompt("Enter a number")
// for (let i = variable; i >= 0; i -= 0.5) {
//     document.write(i + " ")
// }

// Question 17 : The even/odd reporter
//       Write a for loop that will iterate from 0 to 20. For each  iteration, it will check if the current number is even or odd, and 
//       report that to the screen (e.g. "2 is even")


// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write(`${i} is Even <br>`)
//     }
//     else{
//         document.write(`${i} is Odd <br>`)
//     }
// }

// Question 18 : Write a program to calculate the product of the odd integers from 1 to 7
// var product = 1;
// for (let i = 1; i <= 7; i += 2) {
//     product = product * i
// }
// document.write(product)

// Question 19 : Write a program that will write out a wedge of stars. The user will enter the initial number of stars, and the program will write 
// out lines of stars where each line has one few star than the 
// previous line. Initial number of stars: 7


// var input = +prompt("Enter a number")
// for (let i = 0; i < input; i++) {
//     for (let j = 0; j < input - i ; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }
        
// Question 20 :  Write a program to create the following patterns in your  browser. Take number of lines as an input.
// a

// var input = +prompt("Enter a number")
// for (let i = 0; i < input; i++) {
//     for (let j = 0; j < input; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }

// b

// var input = +prompt("Enter a number")
// for (let i = 0; i < input; i++) {
//     for (let j = 0; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }

// c

// var input = +prompt("Enter a number")
// for (let i = 0; i < input; i++) {
//     for (let j = 0; j < input - i ; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }

