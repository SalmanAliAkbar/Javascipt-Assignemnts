// Question No 01:

// const futureStudentNames = [];

// Question No 03:

// let stringArray = ['apple', 'banana', 'orange', 'grape'];
// console.log(stringArray[0]); 
// console.log(stringArray[1]); 
// console.log(stringArray[2]); 
// console.log(stringArray[3]); 

// Question No 04:

// let numbersArray = [1, 2, 3, 4, 5];

// console.log(numbersArray[0]); 
// console.log(numbersArray[1]); 
// console.log(numbersArray[2]);
// console.log(numbersArray[3]); 
// console.log(numbersArray[4]);

// Question No 05:

// let booleanArray = [true, false, true, true, false];

// console.log(booleanArray[0]);
// console.log(booleanArray[1]);
// console.log(booleanArray[2]); 
// console.log(booleanArray[3]); 
// console.log(booleanArray[4]);

// Question No 06:

// let mixedArray = ['apple', 42, true, 'banana', false, 3.14];
// console.log(mixedArray[0]); 
// console.log(mixedArray[1]); 
// console.log(mixedArray[2]); 
// console.log(mixedArray[3]);
// console.log(mixedArray[4]);
// console.log(mixedArray[5]);

// Question No 07:

// var quaification  = [];
// quaification.push("SSC","HSC","BSC","BS","B.COM","MS","M.PHIL","PHD")
// document.write(quaification);

// Question No 08:

// var studentNames = ["Salman", "Qasim", "Naveed"]
// var score = [320, 230, 480]
// var totalmarks = 500;
// var percentage1 = score[0] / totalmarks * 100;
// var percentage2 = score[1] / totalmarks * 100;
// var percentage3 = score[2] / totalmarks * 100;

// document.write("Score of " + studentNames[0] + " is " + score[0] + " Percentage: " + percentage1 + "%")
// document.write("<br>" + "Score of " + studentNames[1] + " is " + score[1] + " Percentage: " + percentage2 + "%")
// document.write("<br>" + "Score of " + studentNames[2] + " is " + score[2] + " Percentage: " + percentage3 + "%")

// Question No 09:

// let colorArray = ['red', 'blue', 'green', 'yellow'];

// Display the original array
// document.write('<h2>Original Array:</h2>');
// document.write('<p>' + colorArray.join(', ') + '</p>');

// a. Add color to the beginning
// let colorToAddBeginning = prompt('Enter a color to add to the beginning:');
// colorArray.unshift(colorToAddBeginning);

// Display the updated array
// document.write('<h2>Updated Array (After adding to the beginning):</h2>');
// document.write('<p>' + colorArray.join(', ') + '</p>');

// b. Add color to the end
// let colorToAddEnd = prompt('Enter a color to add to the end:');
// colorArray.push(colorToAddEnd);

// Display the updated array
// document.write('<h2>Updated Array (After adding to the end):</h2>');
// document.write('<p>' + colorArray.join(', ') + '</p>');

// c. Add two more colors to the beginning
// colorArray.unshift('purple', 'orange');

// Display the updated array
// document.write('<h2>Updated Array (After adding two more colors to the beginning):</h2>');
// document.write('<p>' + colorArray.join(', ') + '</p>');

// d. Delete the first color
// colorArray.shift();

// Display the updated array
// document.write('<h2>Updated Array (After deleting the first color):</h2>');
// document.write('<p>' + colorArray.join(', ') + '</p>');

// e. Delete the last color
// colorArray.pop();

// Display the updated array
// document.write('<h2>Updated Array (After deleting the last color):</h2>');
// document.write('<p>' + colorArray.join(', ') + '</p>');

// f. Add a color at a specific index
// let indexToAdd = prompt('Enter the index where you want to add a color:');
// let colorToAddIndex = prompt('Enter the color you want to add:');
// colorArray.splice(indexToAdd, 0, colorToAddIndex);

// Display the updated array
// document.write('<h2>Updated Array (After adding a color at a specific index):</h2>');
// document.write('<p>' + colorArray.join(', ') + '</p>');

// g. Delete colors at a specific index
// let indexToDelete = prompt('Enter the index where you want to delete color(s):');
// let numberOfColorsToDelete = prompt('Enter the number of colors you want to delete:');
// colorArray.splice(indexToDelete, numberOfColorsToDelete);

// Display the updated array
// document.write('<h2>Updated Array (After deleting color(s) at a specific index):</h2>');
// document.write('<p>' + colorArray.join(', ') + '</p>');

// Question No 10:

// let studentScores = [320, 230, 480, 120];

// Display the original array
// document.write('<h2>Scores Of Students:</h2>');
// document.write('<h2>Order Scores Of Students:</h2>');
// document.write('<p>' + studentScores.join(', ') + '</p>');

// Sort the array in ascending order
// studentScores.sort(function (a, b) {
//     return a - b;
// });

// Display the sorted array
// document.write('<h2>Order Scores Of Studnets:</h2>');
// document.write('<p>' + studentScores.join(', ') + '</p>');

// Question No 11:

// let cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];

// document.write('<h2>Cities List:</h2>');
// document.write('<p>' + cities.join(', ') + '</p>');
// let selectedCitieslist = cities.slice(2, 4);
// document.write('<h2>Selected Citieslist:</h2>');
// document.write('<p>' + selectedCitieslist.join(', ') + '</p>');

// Question No 12:

// var arr = ["This", " is", " my", " cat"];

// Create a single string using the join method
// var resultString = arr.join("");

// Display the result
// document.write("Array: " + arr)
// document.write("<br>" + "String: " + resultString);

// Question No 13:

// Create an empty array to simulate a queue
// var fifoQueue = [];

// Adding values to the queue (FIFO)
// fifoQueue.push("Keyboard", "Mouse", "Printer", "Monitor");

// // Display the values
// document.write("Devices " + fifoQueue)

// // Accessing values in the order in which they were stored (FIFO)
// var firstValue = fifoQueue.shift();
// var secondValue = fifoQueue.shift();
// var thirdValue = fifoQueue.shift();
// var fourthValue = fifoQueue.shift();

// // Display the values
// document.write("<br>" + firstValue);  // Output: "Value 1"
// document.write("<br>" + secondValue); // Output: "Value 2"
// document.write("<br>" + thirdValue);  // Output: "Value 3"
// document.write("<br>" + fourthValue);  // Output: "Value 1"

// Question No 14:

// // / Create an empty array to simulate a queue
// var fifoQueue = [];

// // Adding values to the queue (LIFO)
// fifoQueue.push("Keyboard", "Mouse", "Printer", "Monitor");

// // Display the values
// document.write("Devices " + fifoQueue)

// // Accessing values in the order in which they were stored (LIFO)
// var firstValue = fifoQueue.pop();
// var secondValue = fifoQueue.pop();
// var thirdValue = fifoQueue.pop();
// var fourthValue = fifoQueue.pop();

// // Display the values
// document.write("<br>" + firstValue);  // Output: "Value 1"
// document.write("<br>" + secondValue); // Output: "Value 2"
// document.write("<br>" + thirdValue);  // Output: "Value 3"
// document.write("<br>" + fourthValue);  // Output: "Value 1"