/**-------Topics: array & for loop----------*/

const numbers = [12, 23, 34, 26, 56, 46, 39];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    console.log(element);
}
console.log("mars rian");

// Other Way: for of
const values = [14, 45, 67, 58, 50];
for (let value of values){
    console.log(value);
}