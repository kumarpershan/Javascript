// ..............  OBJECT ..............

// QUESTION #  1

// var itemsArray = [
//     {
//         name: "juice",
//         price: "50",
//         quantity: "3"

//     },

//     {
//         name: "cookie",
//         price: "30", 
//         quantity: "9"

//     },

//     {
//         name: "shirt",
//         price: "880",
//         quantity: "1"

//     },
//     {
//         name: "pen",
//         price: "100", 
//         quantity: "2"

//     }
// ];

// var totalPriceAllItems = 0;

// for (var i = 0; i < itemsArray.length; i++) {
//     var item = itemsArray[i];
//     var price = parseFloat(item.price);
//     var quantity = parseInt(item.quantity, 10);
//     var totalPrice = price * quantity;

//     console.log("Total price of " + item.name + ": " + totalPrice);

//     totalPriceAllItems += totalPrice;
// }

// console.log("Total price of all items: " + totalPriceAllItems);




//  QUESTION # 2



// // Step 1: Create the object

// var user = {
//     name: "Jane Smith",
//     email: "jane@example.com",
//     password: "mypassword123",
//     age: 28,
//     gender: "female",
//     city: "Los Angeles",
//     country: "USA"
// };

// // Step 2: Check if 'age' and 'country' properties exist
// if (user.hasOwnProperty("age")) {
//     console.log("Property 'age' exists.");
// } else {
//     console.log("Property 'age' does not exist.");
// }

// if (user.hasOwnProperty("country")) {
//     console.log("Property 'country' exists.");
// } else {
//     console.log("Property 'country' does not exist.");
// }

// // Step 3: Check if 'firstName' and 'lastName' properties exist
// if (user.hasOwnProperty("firstName")) {
//     console.log("Property 'firstName' exists.");
// } else {
//     console.log("Property 'firstName' does not exist.");
// }

// if (user.hasOwnProperty("lastName")) {
//     console.log("Property 'lastName' exists.");
// } else {
//     console.log("Property 'lastName' does not exist.");
// }




//   QUESTION # 3





// function User(name, email, password, age, gender, city, country) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     this.age = age;
//     this.gender = gender;
//     this.city = city;
//     this.country = country;
// }

// var user1 = new User("Alice", "alice@example.com", "pass123", 25, "female", "New York", "USA");
// var user2 = new User("Bob", "bob@example.com", "bobsecure", 30, "male", "London", "UK");
// var user3 = new User("Charlie", "charlie@example.com", "charlie321", 28, "male", "Toronto", "Canada");

// console.log(user1);
// console.log(user2);
// console.log(user3);





//  QUESTION  # 4



// function Person(name, gender, address, education, profession) {
//       this.name = name;
//       this.gender = gender;
//       this.address = address;
//       this.education = education;
//       this.profession = profession;
//     }

//     function getGender() {
//       var genderInputs = document.getElementsByName("gender");
//       for (var i = 0; i < genderInputs.length; i++) {
//         if (genderInputs[i].checked) {
//           return genderInputs[i].value;
//         }
//       }
//       return "";
//     }

//     document.getElementById("personForm").onsubmit = function(e) {
//       e.preventDefault();

//       var name = document.getElementById("name").value;
//       var gender = getGender();
//       var address = document.getElementById("address").value;
//       var education = document.getElementById("education").value;
//       var profession = document.getElementById("profession").value;

//       var person = new Person(name, gender, address, education, profession);

//       var records = JSON.parse(localStorage.getItem("population")) || [];
//       records.push(person);
//       localStorage.setItem("population", JSON.stringify(records));

//       this.reset();
//       displayRecords();
//     };

//     function displayRecords() {
//       var tableBody = document.getElementById("recordsTable").getElementsByTagName("tbody")[0];
//       tableBody.innerHTML = "";

//       var records = JSON.parse(localStorage.getItem("population")) || [];
//       for (var i = 0; i < records.length; i++) {
//         var row = "<tr>" +
//                     "<td>" + records[i].name + "</td>" +
//                     "<td>" + records[i].gender + "</td>" +
//                     "<td>" + records[i].address + "</td>" +
//                     "<td>" + records[i].education + "</td>" +
//                     "<td>" + records[i].profession + "</td>" +
//                   "</tr>";
//         tableBody.innerHTML += row;
//       }
//     }


//     window.onload = function() {
//       displayRecords();
//     };



//    ........................     DOM      .........................


// QUESTION # 1

//   var mainContent = document.getElementById("main-content");
//     console.log("main-content:", mainContent);

//     // ii. Display all child elements of “main-content” element
//     var children = mainContent.children;
//     console.log("Children of main-content:");
//     for (var i = 0; i < children.length; i++) {
//       console.log(children[i]);
//     }

//     // iii. Get all elements of class “render” and show their innerHTML
//     var renderElements = document.getElementsByClassName("render");
//     var output = "";
//     for (var j = 0; j < renderElements.length; j++) {
//       output += renderElements[j].innerHTML + "\n";
//     }
//     document.getElementById("renderOutput").textContent = output;

//     // iv. Fill input with id “first-name”
//     document.getElementById("first-name").value = "Pershan Nandlal";

//     // v. Fill inputs for “last-name” and “email”
//     document.getElementById("last-name").value = "Bank";
//     document.getElementById("email").value = "PershanNandlal@example.com";




//   QUESTION # 2
// // i. What is node type of element having id “form-content”?
// var formContent = document.getElementById('form-content');
// console.log('Node type of #form-content:', formContent.nodeType);
// //ii. Show node type of element having id “lastName” and its child node.
// var lastName = document.getElementById('lastName');
// console.log('Node type of #lastName:', lastName.nodeType);
// console.log('Node type of #lastName child:', lastName.firstChild.nodeType);

// // iii. Update child node of element having id “lastName”.
// lastName.firstChild.nodeValue = "Doe";  // Change text from Smith to Doe
// console.log('Updated #lastName text:', lastName.textContent);

// // iv. Get First and last child of id “main-content”.
// var mainContent = document.getElementById('main-content');
// console.log('First child of #main-content:', mainContent.firstChild);
// console.log('Last child of #main-content:', mainContent.lastChild);

// // v. Get next and previous siblings of id “lastName”.
// console.log('Next sibling of #lastName:', lastName.nextSibling);
// console.log('Previous sibling of #lastName:', lastName.previousSibling);

// // vi. Get parent node and node type of element having id “email”
// var email = document.getElementById('email');
// console.log('Parent node of #email:', email.parentNode);
// console.log('Node type of #email:', email.nodeType);     