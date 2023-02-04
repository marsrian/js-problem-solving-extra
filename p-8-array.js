/**-------Topics: array details----------*/

const numbers = [17, 9, 45, 34, 28, 21, 23, 67];

const numbersElements = numbers.length;
console.log(numbersElements) // Ans: 8


// change 4th position:
numbers[3] = 50; 
console.log(numbers); // Ans: [17,  9, 45, 50, 28, 21, 23, 67]

// Array 2 elements addition:
const sum2Elements = numbers[4] + numbers[5];
console.log(sum2Elements);

// Remove last element:
const removeLastElement = numbers.pop();
console.log(removeLastElement);
