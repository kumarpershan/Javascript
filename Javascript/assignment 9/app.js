//         PDF # 38 to 42   
//        FUNCTIONS, SWITCH ,STATEMENTS, WHILE... DO-WHILE LOOPS


// Question no 1

// function power(a, b) {
//     if (b === 0) {
//         return 1;
//     }

//     var result = 1;
//     const isNegativeExponent = b < 0;

   
//     b = Math.abs(b);

    
//     for (var i = 0; i < b; i++) {
//         result *= a;
//     }

   
//     return isNegativeExponent ? 1 / result : result;
// }


// document.write(power(3, 9) + "<br>"); 
// document.write(power(2, -3) + "<br>"); 
// document.write(power(5, 0) + "<br>");  


// Question no 2

// function leapYear(year){

    //     if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    //     return `${year} is a leap year`
    //     }
    //     else{
    //         return `${year} is a not leap year`
    //     }
    // }
    // var year = prompt("Enter year for check leap year");
    // console.log(leapYear(year))
    


// Question no 3

// function calculate(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {

//     const S = calculate(a, b, c);

    
//     const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

//     return area;
// }


// const a = +(prompt("Enter the length of side a:"));
// const b = +(prompt("Enter the length of side b:"));
// const c = +(prompt("Enter the length of side c:"));

// if (a + b > c && a + c > b && b + c > a) {
//     const area = calculateArea(a, b, c);
    
//     document.write(`The area of the triangle is: ${area.toFixed(2)}`);
    
//     console.log(`The area of the triangle is: ${area.toFixed(2)}`);
// } else {
//     document.write("Invalid triangle! The sum of any two sides must be greater than the third side.");
    
//     console.log("Invalid triangle! The sum of any two sides must be greater than the third side.");
// }


// Question # 4

// function calculateAverage(marks) {
    //     let sum = marks.reduce((total, mark) => total + mark, 0);
    //     return sum / marks.length;
    // }
    
    // function calculatePercentage(marks, totalMarksPerSubject) {
    //     let sum = marks.reduce((total, mark) => total + mark, 0);
    //     return (sum / (totalMarksPerSubject * marks.length)) * 100;
    // }
    
    // function mainFunction() {
    //     let marks = [];
    //     for (let i = 0; i < 3; i++) {
    //         let mark = parseFloat(prompt(`Subject ${i + 1} ke marks enter karein:`));
    //         marks.push(mark);
    //     }
    
    //     let average = calculateAverage(marks);
    //     let percentage = calculatePercentage(marks, 100); 
    
    //     console.log(`Average Marks: ${average}`);
    //     console.log(`Percentage: ${percentage.toFixed(2)}%`);
    // }
    
    // mainFunction();
    


 // Question # 5
 

 // function customIndexOf(str,ind){
 
 //     for(var i =0; i<str.length; i++){
 //         if(str[i] === ind){
 //             return i;
 //         }
 
 //     }
 //     return -1;
 // }
    // document.write(customIndexOf("hello","o"));
 
 // console.log(customIndexOf("hello","o"));


 // Question # 6

 // Question # 6

// function removeVowels(str){

//     var result = " ";
// for(var i = 0; i< str.length; i++){
//     var char = str[i]
//     if(char !== "a" && char !== "e" && char !== "i" && char !== "o" && char !== "u"){
//      result += char;
//     }
// }
// return result;
// }
// var str = "Hello World";
// console.log(removeVowels(str))



// Question # 7

// function countVowelPairs(text) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let i = 0; i < text.length - 1; i++) {
//         let pair = text[i] + text[i + 1];
        
//         switch (true) {
//             case vowels.includes(text[i]) && vowels.includes(text[i + 1]):
//                 count++;
//                 break;
//         }
//     }
    
//     return count;
// }


//  Question # 8


// function convert(km) {
//     return km * 1000;
// }

// function convertToFeet(km) {
//     return km * 3280.84;
// }

// function convertToInches(km) {
//     return km * 39370.08;
// }

// function convertToCentimeters(km) {
//     return km * 100000;
// }

// // Function to display all conversions
// function displayConversions(km) {
//     console.log(`Distance in Kilometers: ${km} km`);
//     console.log(`Distance in Meters: ${convert(km)} m`);
//     console.log(`Distance in Feet: ${convertToFeet(km)} ft`);
//     console.log(`Distance in Inches: ${convertToInches(km)} in`);
//     console.log(`Distance in Centimeters: ${convertToCentimeters(km)} cm`);
// }


// var distanceInKm = 5; 
// displayConversions(distanceInKm);


// Question 9 

// function calculate(hoursWorked) {
//     const standardHours = 40;
//     const overtimeRate = 12;
    
//     if (hoursWorked <= standardHours) {
//         console.log("No overtime pay. Employee worked within standard hours.");
//         return;
//     }

//     var overtimeHours = hoursWorked - standardHours;
//     var overtimePay = overtimeHours * overtimeRate;

//     console.log(`Overtime Hours: ${overtimeHours}`);
//     console.log(`Overtime Pay: Rs. ${overtimePay}`);
// }

// var hoursWorked = 45;
// calculate(hoursWorked);


// Question 10
function calculateNotes(amount) {
    if (amount % 100 !== 0) {
        console.log("Please enter an amount in multiples of 100.");
        return;
    }

    var hundredNotes = Math.floor(amount / 100);
    var remainder = amount % 100;

    var fiftyNotes = Math.floor(remainder / 50);
    remainder %= 50;

    var  tenNotes = Math.floor(remainder / 10);

    console.log(`Amount to Withdraw: ₹${amount}`);
    console.log(`100-rupee notes: ${hundredNotes}`);
    console.log(`50-rupee notes: ${fiftyNotes}`);
    console.log(`10-rupee notes: ${tenNotes}`);
}


var amount = 1260; 
calculateNotes(amount);