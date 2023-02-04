/**-------Topics: Larger Array Element----------*/

const input = [34, 45, 67, 85, 39, 87, 67, 96, 100, 29];

for(let i = 0; i < input.length; i++){
    const element = input[i];
    if(element > 80){
        console.log(element);
    }
}

// Function way:
function large(numbers) {
    let largestStore = [];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > 80){
            largestStore.push(element);
        }
    }
    return largestStore
}

const input2 = [34, 45, 67, 85, 39, 87, 67, 96, 100, 29];
const largest = large(input2);
console.log(largest)