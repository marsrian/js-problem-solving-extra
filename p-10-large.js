/**-------Topics: Larger Array Element----------*/

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

const input = [34, 45, 67, 85, 39, 87, 67, 96, 100, 29];
const largest = large(input);
console.log(largest)