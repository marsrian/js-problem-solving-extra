/**----------   --Problem:05-------------- */
/**--------Topics: Positive Number-------- */

function positiveNumbers(numbers){
    let positiveValue = [];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element >= 0){
            positiveValue.push(element);
        }
        else if(element < 0){
            break;
        }
    }
    return positiveValue;
}

const input = [12, 27, 34, 43, -21, -56, 39, 20, -20, 30];
const positive = positiveNumbers(input);
console.log(positive);
