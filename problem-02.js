/**-------------Problem:02--------------------- */
/**--------Topics: Centimeter To Meter-------- */

function centimeterToMeter(centimeter){
    // const result = centimeter / 100; //Ans: 2
    
    // other way:
    const result = centimeter * 0.01; // Ans: 2
    return result;
}

const meter = centimeterToMeter(200);
console.log(meter);