// Chapter No 17-20:

// Question No 02:

// Declare and initialize a multidimensional array representing the matrix
// const matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];
  
//   // Display the matrix
//   for (let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i].join('\t'));
//   }
  
// Question No 03:

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
  
// Question No 04:

// Prompt the user for the number and table length
// let number = parseInt(prompt("Enter the number for the multiplication table:"));
// let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// // Check if the input is a valid number
// if (isNaN(number) || isNaN(tableLength)) {
//   console.log("Please enter valid numbers.");
// } else {
//   // Print the multiplication table
//   console.log(`Multiplication table for ${number} up to length ${tableLength}:`);
//   for (let i = 1; i <= tableLength; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
//   }
// }

// Question No 05:

// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// console.log("Fruits:");

// // Using a for loop to iterate over the array
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }


// Question No 06:

// a. Counting: 1, 2, 3, ..., 15
// console.log("a. Counting:");
// for (let i = 1; i <= 15; i++) {
//   console.log(i);
// }

// // b. Reverse counting: 10, 9, 8, ..., 1
// console.log("\nb. Reverse counting:");
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// // c. Even: 0, 2, 4, ..., 20
// console.log("\nc. Even:");
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// // d. Odd: 1, 3, 5, ..., 19
// console.log("\nd. Odd:");
// for (let i = 1; i <= 19; i += 2) {
//   console.log(i);
// }

// // e. Series: 2k, 4k, ..., 20k
// console.log("\ne. Series:");
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i + "k");
// }

// Question No 07:

// Given array
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt user for input
// const userInput = prompt("Enter an item to search:");

// // Convert the input to lowercase for case-insensitive comparison
// const userInputLowerCase = userInput.toLowerCase();

// // Check if the item is in the array
// const isItemFound = A.includes(userInputLowerCase);

// // Display the result to the user
// if (isItemFound) {
//   console.log(`Yes, '${userInput}' is found in the list.`);
// } else {
//   console.log(`No, '${userInput}' is not found in the list.`);
// }

// Question No 08:

// Given array
// const A = [24, 53, 78, 91, 12];

// // Find the largest number in the array
// let largestNumber = A[0];
// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largestNumber) {
//     largestNumber = A[i];
//   }
// }

// // Print the array items
// console.log("Array items: " + A.join(','));

// // Print the largest number
// console.log("Largest number: " + largestNumber);

// Question No 09:

// Given array
// const A = [24, 53, 78, 91, 12];

// // Find the smallest number in the array
// let smallestNumber = A[0];
// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallestNumber) {
//     smallestNumber = A[i];
//   }
// }

// // Print the array items
// console.log("Array items: " + A.join(','));

// // Print the smallest number
// console.log("Smallest number: " + smallestNumber);

// Question No 10:

// Print multiples of 5 ranging from 1 to 100
// console.log("Multiples of 5 from 1 to 100:");

// for (let i = 1; i <= 20; i++) {
//   let multipleOf5 = i * 5;
//   console.log(multipleOf5);
// }


// Chapter No 21-25:

// Question No 01:

// Prompt user for first name
// const firstName = prompt("Enter your first name:");

// // Prompt user for last name
// const lastName = prompt("Enter your last name:");

// // Merge first and last names into fullName
// const fullName = `${firstName} ${lastName}`;

// // Greet the user using their full name
// console.log(`Hello, ${fullName}! Welcome.`);

// Question No 03:

// // Function to find the index of letter 'n' in the word 'Pakistani'
// function findIndexOfN(word) {
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === 'n') {
//       return i;
//     }
//   }
//   // If 'n' is not found, return -1
//   return -1;
// }

// // Define the word
// const word = 'Pakistani';

// // Find the index of letter 'n'
// const nIndex = findIndexOfN(word);

// // Display the result in the console
// console.log(`Index of letter 'n' in the word '${word}': ${nIndex}`);

// Question No 04:

// // Function to find the last index of letter 'l' in a given word
// function findLastIndexOfL(word) {
//   for (let i = word.length - 1; i >= 0; i--) {
//     if (word[i] === 'l') {
//       return i;
//     }
//   }
//   // If 'l' is not found, return -1
//   return -1;
// }

// // Define the word
// const word = 'Hello World';

// // Find the last index of letter 'l'
// const lastIndex = findLastIndexOfL(word);

// // Display the result in the browser
// console.log(`String: ${word}`);
// console.log(`Last index of 'l': ${lastIndex}`);

// Question No 05:

// // Function to find the character at a specific index in a given word
// function findCharacterAtIndex(word, index) {
//   if (index >= 0 && index < word.length) {
//     return word[index];
//   } else {
//     return null; // Index out of bounds
//   }
// }

// // Define the word
// const word = 'Pakistani';

// // Define the index
// const targetIndex = 3;

// // Find the character at the 3rd index
// const charAtIndex = findCharacterAtIndex(word, targetIndex);

// // Display the result in the browser
// console.log(`String: ${word}`);
// console.log(`Character at index ${targetIndex}: ${charAtIndex}`);

// Question No 06:

// // Take user input for the first name
// const firstName = prompt('Enter your first name:');

// // Take user input for the last name
// const lastName = prompt('Enter your last name:');

// // Merge the first and last names into a new variable
// const fullName = firstName + ' ' + lastName;

// // Greet the user using their full name
// alert('Hello, ' + fullName + '! Welcome!');

// Question No 07:

// // Define the original city name
// const cityName = 'Hyderabad';

// // Replace "Hyder" with "Islam"
// const replacedCity = cityName.replace('Hyder', 'Islam');

// // Display the result in the console
// console.log(`City: ${cityName}`);
// console.log(`After replacement: ${replacedCity}`);

// Question No 08:

// Define the original message
// var message = "Ali and Sami are best friends. They play cricket and football together.";

// // Replace all occurrences of "and" with "&"
// var modifiedMessage = message.replace(/and/g, "&");

// // Display the result in the console
// console.log(`Original message: ${message}`);
// console.log(`After replacement: ${modifiedMessage}`);

// Question No 09:

// Convert the string "472" to a number
// const stringNumber = "472";
// const convertedNumber = Number(stringNumber);

// // Display values and types in the console
// console.log(`Value: ${stringNumber}`);
// console.log(`Type: ${typeof stringNumber}`);
// console.log(`Value: ${convertedNumber}`);
// console.log(`Type: ${typeof convertedNumber}`);

// Question No 10:

// Take user input
// const userInput = prompt('Enter a word:');

// // Convert to uppercase
// const uppercaseResult = userInput.toUpperCase();

// // Display the result in the console
// console.log(`User input: ${userInput}`);
// console.log(`Upper case: ${uppercaseResult}`);

// Question No 11:

// // Take user input
// const userInput = prompt('Enter a word:');

// // Convert to title case
// const titleCaseResult = userInput.charAt(0).toUpperCase() + userInput.slice(1);

// // Display the result in the console
// console.log(`User input: ${userInput}`);
// console.log(`Title case: ${titleCaseResult}`);

// Question No 12:

// Define the variable num
// var num = 35.36;

// // Convert num to string and remove the dot
// var numString = num.toString().replace('.', '');

// // Display the result in the console
// console.log(`Number: ${num}`);
// console.log(`Result: ${numString}`);

// Question No 16:

// Define the string
// var university = "University of Karachi";

// // Convert the string to an array using the split method
// var universityArray = university.split('');

// // Display the elements of the array in the console
// for (var i = 0; i < universityArray.length; i++) {
//   console.log(universityArray[i]);
// }

// Question No 17:

// Take user input
// const userInput = prompt('Enter a word:');

// // Get the last character of the input
// const lastCharacter = userInput.charAt(userInput.length - 1);

// // Display the result in the console
// console.log(`User input: ${userInput}`);
// console.log(`Last character of input: ${lastCharacter}`);

// Chapter No 26-30:

// Question No 01:

// // Take a positive floating-point number from the user
// const userInput = prompt('Enter a positive  integer number:');

// // Convert the user input to a number
// const number = Number(userInput);

// // Check if the input is a positive number
// if (!isNaN(number) && number > 0) {
//   // Calculate round-off, floor, and ceil values
//   const roundOffValue = Math.round(number);
//   const floorValue = Math.floor(number);
//   const ceilValue = Math.ceil(number);

//   // Display the results in the console
//   console.log(`Number: ${number}`);
//   console.log(`Round-off value: ${roundOffValue}`);
//   console.log(`Floor value: ${floorValue}`);
//   console.log(`Ceil value: ${ceilValue}`);
// } 

// Question No 02:

// Take a negative floating-point number from the user
// const userInput = prompt('Enter a negative floating-point number:');

// // Convert the user input to a number
// const number = Number(userInput);

// // Check if the input is a negative number
// if (!isNaN(number) && number < 0) {
//   // Calculate round-off, floor, and ceil values
//   const roundOffValue = Math.round(number);
//   const floorValue = Math.floor(number);
//   const ceilValue = Math.ceil(number);

//   // Display the results in the console
//   console.log(`Number: ${number}`);
//   console.log(`Round-off value: ${roundOffValue}`);
//   console.log(`Floor value: ${floorValue}`);
//   console.log(`Ceil value: ${ceilValue}`);
// } 

// Question No 03:

// // Take a number from the user
// const userInput = prompt('Enter a number:');

// // Convert the user input to a number
// const number = Number(userInput);

// // Check if the input is a valid number
// if (!isNaN(number)) {
//   // Calculate the absolute value
//   const absoluteValue = Math.abs(number);

//   // Display the result in the console
//   console.log(`Absolute value of ${number} is ${absoluteValue}`);
// } else {
//   console.log('Invalid input. Please enter a valid number.');
// }

// Question No 04:

