// Coding From Scratch Final Project

function idCard() {
// Pull Info
var  firstName = document.getElementById("firstName").value;
var  lastName = document.getElementById("lastName").value;
var address = document.getElementById("address").value;
var age = document.getElementById("age").value;
var phoneNumber = document.getElementById("phoneNumber").value;
// Post Info 
document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
document.getElementById("postAddress").innerHTML = address;
document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
document.getElementById("postAge").innerHTML = "Age: " + age;
}
// Empty Array
// var  numberArray = []
// numberArray.push (age, phoneNumber)
// console.log(numberArray);

//  for (var i = age, numberArray; i < numberArray; i++) {
//         if ( i <= 100) {
//             document.getElementById("postAge").innerHTML = "Age: " + age;
//         } else {
//             document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
//         }
//     } 
