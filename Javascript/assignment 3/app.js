//            ARRAYS
//      PDF  14 to 17

// QUESTION # 1 :  Declare an empty array using JS literal notation to store student names in future.

// var  studentNames = [];


// QUESTION # 2 :  Declare an empty array using JS object notation to store student names in future.

// var studentName = {}


// QUESTION # 3 : Declare and initialize a strings array.

// var string =["student"]

// console.log(string)

// document.write(string +"<br><br>")


// QUESTION # 4 :  Declare and initialize a numbers array.

//  var number =[1234567];

// console.log(number)

//  document.write(number)


//  QUESTION # 5 :  Declare and initialize a boolean array.

// var boolean_array = [ "True   false" ]

// console.log(boolean_array)
// document.write(boolean_array)


// QUESTION # 6 :  Declare and initialize a mixed array.

// var mixed_array = ["Pershan " , 22 , true  ,  false];
// console.log(mixed_array)
// document.write(mixed_array)


// QUESTION # 7 : Declare and Initialize an array and store available mobile networks in Pakistan.

// var mobile_networks = ["Jazz", "Zong", "Ufone", "Telenor"];
// console.log(mobile_networks)
// document.write(mobile_networks)


// QUESTION # 8 :  Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:


// var Education_Qualifications = [ "SSC ", "HSC", "BCS ", "BS "," BCOM  ", "MS " , "M. Phil  " ,"PhD  "  ]
// document.write(`<h2>Education_Qualifications</h2>` );

// console.log("1) " + Education_Qualifications[0])
// console.log("2) " + Education_Qualifications[1])
// console.log("3) " + Education_Qualifications[2])
// console.log("4) " + Education_Qualifications[3])
// console.log("5) " + Education_Qualifications[4])
// console.log("6) " + Education_Qualifications[5])
// console.log("7) " + Education_Qualifications[6])
// console.log("8) " + Education_Qualifications[7])

// document.write("1) " +  Education_Qualifications[0] + "<br>")
// document.write("2) " + Education_Qualifications[1]  + "<br>")
// document.write("3) " + Education_Qualifications[2]  + "<br>")
// document.write("4) " + Education_Qualifications[3]  + "<br>")
// document.write("5) " + Education_Qualifications[4]  + "<br>")
// document.write("6) " + Education_Qualifications[5]  + "<br>")
// document.write("7) " + Education_Qualifications[6]  + "<br>")
// document.write("8) " + Education_Qualifications[7]  + "<br>")


// QUESTION # 9 :  Declare and initialize an empty array to store top movies of 2015. Add movies one by one in an array. Display the elements & length of array in your browser. (Use array’s length method)

//  Declare and initialize an empty array
// var topMovies2015 = [];

//  Add movies one by one using push()
// topMovies2015.push('Avengers: Age of Ultron <br>');
// topMovies2015.push(' Spectre <br>');
// topMovies2015.push(' Jurassic World <br>');
// topMovies2015.push(' Inside Out  <br>');

// Display the array elements
// document.write("<h2>Top Movies of 2015  : </h2> "  );
// document.write(topMovies2015);

//  Display the length of the array

// document.write("<br><br><br>  length of the Array :" + topMovies2015.length);


// QUESTION # 10 : Declare and Initialize an array with your favorite cars. Show
//                 a. First index of the array
//                 b. Car at first index of the array
//                 c. Last index of the array
//                d. Car at last index of the array

// var favorite_cars =  ["BMW", "AUDI", "FORD", "TESLA"];
// console.log(favorite_cars);

// console.log("First index of the array " + favorite_cars.indexOf("BMW"))
// console.log("Car at first index of the array " + favorite_cars[0])
// console.log("Last index of the array " + favorite_cars.indexOf("TESLA"))
// console.log("Car at Last index of the array " + favorite_cars[3])
// document.write('<h2>Favorite Cars</h2>')
// document.write('BMW , AUDI ,  FORD , TESLA ' + '<br> <br><br>')

// document.write("First index of the array  :" + favorite_cars.indexOf("BMW") + '<br>')
// document.write("Car at first index of the array : " + favorite_cars[0]  + '<br>')
// document.write("Last index of the array : " + favorite_cars.indexOf("TESLA")  + '<br>')
// document.write("Car at Last index of the array : " + favorite_cars[3]  + '<br>')


// QUESTION # 11 : Write a program to store 3 student names in an array. Take another array to store score of these three students. Assume
 // that total marks are 500 for each student, display the scores & percentages of students like:

//  var student_name = ["Pershan", "Ahsan", "Maaz"];
//  var student_score = [450, 400, 250];
 
//  console.log("Score of "+ student_name[0]+" is "+student_score[0]+". "+"Percentage: " + student_score[0] / 500 * 100 + "%" )
//  console.log("Score of "+ student_name[1]+" is "+student_score[1]+". "+"Percentage: " + student_score[1] / 500 * 100 + "%" )
//  console.log("Score of "+ student_name[2]+" is "+student_score[2]+". "+"Percentage: " + student_score[2] / 500 * 100 + "%" )
 
// document.write("Score of "+ student_name[0]+" is "+student_score[0]+". "+"Percentage: " + student_score[0] / 500 * 100 + "%"  + '<br>')
// document.write("Score of "+ student_name[1]+" is "+student_score[1]+". "+"Percentage: " + student_score[1] / 500 * 100 + "%"  + '<br>')
// document.write("Score of "+ student_name[2]+" is "+student_score[2]+". "+"Percentage: " + student_score[2] / 500 * 100 + "%"  + '<br>')



//  QUESTION # 12 : Initialize an array with color names. Display the array elements in your browser.
//    a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
//    b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
//    c. Add two more color to the beginning of the array. Display the updated array in your browser.
//    d. Delete the first color in the array. Display the updated array in your browser.
//    e. Delete the last color in the array. Display the updated array in your browser.
//    f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.  Display the updated array in your browser.
//    g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
//    position/index.  Display the updated array in your browser.


// var color_name = ["blue", "aqua", "Red"];
// console.log(color_name);
// document.write(color_name)

// var add_start_of_array = prompt("You wants to add to the beginning of the array");
// color_name.unshift(add_start_of_array)
// console.log(color_name);
// document.write(color_name)

// var add_end_of_array = prompt("You wants to add to the end of the array");
// color_name.push(add_end_of_array)
// console.log(color_name);
// document.write(color_name)

// color_name.unshift("royal");
// color_name.unshift("sapphire");
// console.log(color_name);
// document.write(color_name)

// color_name.shift()
// console.log(color_name);
// document.write(color_name)

// color_name.pop()
// console.log(color_name);
// document.write(color_name)

// var add_index_of_array_number = +(prompt("Which index number you want to show the color\nPlease enter the numeric value"));
// var add_index_of_array_color = (prompt("Please enter the color name"));
// document.write(color_name)

// color_name.splice([add_index_of_array_number],[0], add_index_of_array_color)
// console.log(color_name);
// document.write(color_name)

// var remove_index_of_array_number = +(prompt("Which index number you want to delete the color\nPlease enter the numeric value"));
// var remove_how_many_color = +(prompt("How many colors you wants to delete\nPlease enter the numeric value"));
// document.write(color_name)

// color_name.splice([remove_index_of_array_number] , [remove_how_many_color]);
// console.log(color_name);
// document.write(color_name)



// QUESTION # 13 : Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// var student_score2 = [100, 50 , 10, 150, 30, 200];
// document.write('<h4>Student of Scores :</h4>')
// document.write(student_score2)

// var ordered_score = student_score2.sort(function(a,b) {return a - b})
// console.log(ordered_score);

// document.write('<h4>Ordered Score :</h4>')
// document.write(ordered_score)


//  QUESTION # 14 : Write a program to sort the below mentioned array:
// var fruits = ["mango", "kiwi", "guava", "apple", "orange"];
// fruits.sort()
// console.log(fruits);
// document.write(fruits)


// QUESTION #15 :Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
// var city2 = ["karachi", "lahore", "islamabad", "multan", "quetta", "faisalabad"];

// var selected_city = city2.slice(2, 5);
// console.log(selected_city)
// document.write(selected_city)

// QUESTION # 16 :  Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

// var arr = ["This", "is" ,  "my ",  "cat"]
// console.log(arr);
// document.write(arr)


// var sentence = arr.join() 
// console.log(sentence);


// QUESTION # 17 : // // Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// var fifo = [];

// fifo.push("keyboard");
// fifo.push("mouse");
// fifo.push("printer");
// fifo.push("monitor");
// console.log(fifo)
// document.write(fifo)

// var out = fifo.shift()
// console.log("Out " + out)
// document.write(out)

// var out2 = fifo.shift()
// console.log("Out " + out2)
// document.write(out2)

// var out3 = fifo.shift()
// console.log("Out " + out3)
// document.write(out3)

// var out4 = fifo.shift()
// console.log("Out " + out4)
// document.write(out4)


// QUESTION # 18 :  Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)

// var fifo = [];

// fifo.pop("keyboard");
// fifo.pop("mouse");
// fifo.pop("printer");
// fifo.pop("monitor");
// console.log(fifo)
// document.write(fifo)

// var out = fifo.pop()
// console.log("Out " + out)
// document.write(out)

// var out2 = fifo.pop()
// console.log("Out " + out2)
// document.write(out2)

// var out3 = fifo.pop()
// console.log("Out " + out3)
// document.write(out3)

// var out4 = fifo.pop()
// console.log("Out " + out4)
// document.write(out4)



// QUESTION # 19

// var phone_manufacturers = ["Apple ", "Samsung", "Motorola" ," Nokia ", "Sony", "Haier"]

// document.write(
//    ` <select>
//         <Option>${phone_manufacturers [0]}</Option>
//         <Option>${phone_manufacturers [1]}</Option>
//         <Option>${phone_manufacturers [2]}</Option>
//         <Option>${phone_manufacturers [3]}</Option>
//         <Option>${phone_manufacturers [4]}</Option>
//         <Option>${phone_manufacturers [5]}</Option>

//     </select>`
// )


// QUESTION #20 :Declare and initialize an empty multidimensional array. (Array of arrays)

// var multidimensional_arr = [[],[]];



// QUESTION # 21

// var multi = [
//   [     0,  1,  2,  3  + "<br>"],
//   [     1,  0,  1,  2  + "<br>"],
//   [     2,  1,  0,  1  + "<br>"],
// ];

// document.write(multi);


