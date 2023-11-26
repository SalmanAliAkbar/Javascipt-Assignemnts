// Chapter No 05:

// Question No 01:

//  Addition:

// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// document.write("The sum of  " + num1 + " and " + num2 + " is " + sum );

// Question No 02:

// Subtraction:

// var num1 = 5;
// var num2 = 3;
// var sub = num1 - num2;
// document.write("<br>The sub of  " + num1 + " and " + num2 + " is " + sub);

// Multiplication:

// var num1 = 5;
// var num2 = 3;
// var mul = num1 * num2;
// document.write("<br>The mul of  " + num1 + " and " + num2 + " is " + mul);

// // Division:

// var num1 = 15;
// var num2 = 3;
// var div = num1 / num2;
// document.write("<br>The div of  " + num1 + " and " + num2 + " is " + div);

// // Modulus:

// var num1 = 15;
// var num2 = 3;
// var mod = num1 % num2;
// document.write("<br>The mod of  " + num1 + " and " + num2 + " is " + mod);

// Question No 04:

// var ticketPrice = 600;
// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;
// document.write("The cost of buying " + numberOfTickets + " movie tickets is: " + totalCost + " PKR");

// Question No 05:
// var number = 4;
// var timesMultiplied = 1;
// var output = number * timesMultiplied;
// document.write("Table of " + number + "<br>");
// document.write(number + " * " + timesMultiplied + " = " + output + "<br>");

// timesMultiplied++;
// output = number * timesMultiplied;
// document.write(number + " * " + timesMultiplied + " = " + output + "<br>");

// timesMultiplied++;
// output = number * timesMultiplied;
// document.write(number + " * " + timesMultiplied + " = " + output + "<br>");

// timesMultiplied++;
// output = number * timesMultiplied;
// document.write(number + " * " + timesMultiplied + " = " + output + "<br>");

// timesMultiplied++;
// output = number * timesMultiplied;
// document.write(number + " * " + timesMultiplied + " = " + output + "<br>");

// timesMultiplied++;
// output = number * timesMultiplied;
// document.write(number + " * " + timesMultiplied + " = " + output + "<br>");

// timesMultiplied++;
// output = number * timesMultiplied;
// document.write(number + " * " + timesMultiplied + " = " + output + "<br>");

// timesMultiplied++;
// output = number * timesMultiplied;
// document.write(number + " * " + timesMultiplied + " = " + output + "<br>");

// timesMultiplied++;
// output = number * timesMultiplied;
// document.write(number + " * " + timesMultiplied + " = " + output + "<br>");

// timesMultiplied++;
// output = number * timesMultiplied;
// document.write(number + " * " + timesMultiplied + " = " + output + "<br>");

// Question No 06:

// var celsiusTemperature = 25;
// var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
// document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");
// var fahrenheitTemperature2 = 70;
// var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
// document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");

// Question No 08:

// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Marks Obtained: " + marksObtained + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");

// Question No 09:

// var usDollars = 10;
// var saudiRiyals = 25;
// var exchangeRateUSD = 104.80;
// var exchangeRateSAR = 28;
// var totalRupees = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);
// document.write("Total Currency in PKR: " + totalRupees);

// Question No 10:

// var initialValue = 7;
// var result = ((initialValue + 5) * 10) / 2;
// document.write("Result: " + result);

// Question N0 11:

// var currentYear =2016;
// var birthYear = 1992;
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;
// document.write("They are either " + age1 + " or " + age2 + " years old.");

// Question No 12:

// var radius=20;
// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * Math.pow(radius, 2);
// document.write("The circumference is " + circumference.toFixed(2));
// document.write("The area is " + area.toFixed(2));

// Chapter No 06-09:

// Question No 01:

// var a = 10;
// document.write("The value of a is: " + a + "<br>");
// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

// var a=11;
// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now The value of a is: " + a + "<br>");
// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now The value of a is: " + a + "<br>");
// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now The value of a is: " + a + "<br>");

// Question No 02:

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is: " + a + "<br>");
// document.write("b is: " + b + "<br>");
// document.write("result is: " + result + "<br>");

// Question No 03:

// var userName = prompt("Please enter your name:");
// if
//  (userName !== null && userName !== "") {
//     document.write("Hello, " + userName + "! Welcome to our website.");
// }
// else {
//     document.write("Hello, anonymous user! Welcome to our website.");
// }

// Question No 05:

// var userInput = prompt("Enter a number for the multiplication table:");
// var number = userInput ? parseInt(userInput) : 5;
// document.write("<h2>Multiplication Table for " + number + ":</h2>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// Question No 06:

// Prompt the user for subject names and marks
// var subject1 = prompt("Enter the name of the first subject:");
// var marksSubject1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

// var subject2 = prompt("Enter the name of the second subject:");
// var marksSubject2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));

// var subject3 = prompt("Enter the name of the third subject:");
// var marksSubject3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// Total marks for each subject
// var totalMarks = 100;

// Calculate the total obtained marks and percentage
// var totalObtainedMarks = marksSubject1 + marksSubject2 + marksSubject3;
// var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Display the result in the browser
// document.write("<h2>Result:</h2>");
// document.write("Subject 1: " + subject1 + "<br>");
// document.write("Obtained Marks: " + marksSubject1 + "<br>");
// document.write("<br>");
// document.write("Subject 2: " + subject2 + "<br>");
// document.write("Obtained Marks: " + marksSubject2 + "<br>");
// document.write("<br>");
// document.write("Subject 3: " + subject3 + "<br>");
// document.write("Obtained Marks: " + marksSubject3 + "<br>");
// document.write("<br>");
// document.write("Total Obtained Marks: " + totalObtainedMarks + "<br>");
// document.write("Total Percentage: " + totalPercentage.toFixed(2) + "%<br>");

// Chapter No 09-11:

// Question No 01:

// var cityName = prompt("Enter the name of your city:");
// if (cityName.toLowerCase() === "karachi") {
//     document.write("Welcome to the city of lights, Karachi!");
// } else {
//     document.write("Welcome to our city!");
// }

// Question No 02:

// var gender = prompt("Please enter your gender (male or female):");
// gender = gender.toLowerCase();
// if (gender === "male") {
//     document.write("Good Morning Sir.");
// } else if (gender === "female") {
//     document.write("Good Morning Ma'am.");
// } else {
//     document.write("Hello!");
// }

// Question No 03:

// var color = prompt("Enter the color of the traffic signal (red, yellow, or green):");
// color = color.toLowerCase();
// if (color === "red") {
//     document.write("Must Stop")
// } else if (color === "yellow") {
//     document.write("Ready to move");
// } else if (color === "green") {
//     document.write("Move now");
// } else {
//     document.write("Invalid color. Please enter 'red', 'yellow', or 'green'.");
// }

// Question No 04:

// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));
// if (remainingFuel < 0.25) {
//     document.write("Please refill the fuel in your car.");
// } else {
//     document.write("You have sufficient fuel in your car.");
// }

// Question No 05:

// Part A:

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// Part B:

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// Part C:

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// Part D:

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// Part E:

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// Part F:

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// Question No 06:

//         var subject1Marks = parseFloat(prompt("Enter marks obtained in Subject 1:"));
//         var subject2Marks = parseFloat(prompt("Enter marks obtained in Subject 2:"));
//         var subject3Marks = parseFloat(prompt("Enter marks obtained in Subject 3:"));
//         var totalMarks = parseFloat(prompt("Enter total marks:"));

//         var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;

//         var percentage = (totalObtainedMarks / totalMarks) * 100;

//         var grade, remarks;

//         if (percentage >= 90) {
//             grade = "A+";
//             remarks = "Excellent";
//         } else if (percentage >= 80) {
//             grade = "A";
//             remarks = "Very Good";
//         } else if (percentage >= 70) {
//             grade = "B";
//             remarks = "Good";
//         } else if (percentage >= 60) {
//             grade = "C";
//             remarks = "Satisfactory";
//         } else if (percentage >= 50) {
//             grade = "D";
//             remarks = "Needs Improvement";
//         } else {
//             grade = "F";
//             remarks = "Sorry";
//         }

//         document.write("Total Marks: " + totalMarks + "<br>");
//         document.write("Marks Obtained: " + totalObtainedMarks + "<br>");
//         document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
//         document.write("Grade: " + grade + "<br>");
//         document.write("Remarks: " + remarks);
    
// Question No 07:

// Generate a random secret number between 1 and 10
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess is correct or close to the correct answer
// if (userGuess === secretNumber) {
//     document.write("Bingo! Correct answer.");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     document.write("Close enough to the correct answer.");
// } else {
//     document.write("Sorry, try again!");
// }

// Question No 08:

// var number = parseInt(prompt("Enter a number:"));
// if (number % 3 === 0) {
//     document.write("The number " + number + " is divisible by 3.");
// } else {
//     document.write("The number " + number + " is not divisible by 3.");
// }

// Question No 09:

// var number = parseInt(prompt("Enter a number:"));
// if (number % 2 === 0) {
//     document.write("The number " + number + " is even.");
// } else {
//     document.write("The number " + number + " is odd.");
// }

// Question No 10:

// var temperature = parseInt(prompt("Enter the temperature in degrees Celsius:"));
// if (temperature > 40) {
//     document.write("It is too hot outside.");
// } else if (temperature > 30) {
//     document.write("The Weather today is Normal.");
// } else if (temperature > 20) {
//     document.write("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     document.write("OMG! Today’s weather is so Cool.");
// } else {
//     document.write("It's very cold outside.");
// }

// Question No 11:

//         var firstNumber = parseFloat(prompt("Enter the first number:"));
//         var secondNumber = parseFloat(prompt("Enter the second number:"));
//         var operation = prompt("Enter the operation (+, -, *, /, %):");
//         var result;
//         if (operation === "+") {
//             result = firstNumber + secondNumber;
//         } else if (operation === "-") {
//             result = firstNumber - secondNumber;
//         } else if (operation === "*") {
//             result = firstNumber * secondNumber;
//         } else if (operation === "/") {
//             if (secondNumber === 0) {
//                 document.write("Division by zero is not allowed.");
//             } else {
//                 result = firstNumber / secondNumber;
//             }
//         } else if (operation === "%") {
//             if (secondNumber === 0) {
//                 document.write("Modulus by zero is not allowed.");
//             } else {
//                 result = firstNumber % secondNumber;
//             }
//         } else {
//             document.write("Invalid operation. Please use +, -, *, /, or %.");
//         }

//         if (result !== undefined) {
//             document.write("Result: " + result);
//         }
   




























