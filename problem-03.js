/**-------------Problem:03--------------------- */

function paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity){
    const firstBookPage = 100;
    const secondBookPage = 250;
    const thirdBookPage = 300;

    const firstBookTotalPage = firstBookPage * firstBookQuantity;
    console.log(firstBookTotalPage);
    const secondBookTotalPage = secondBookPage * secondBookQuantity;
    console.log(secondBookTotalPage);
    const thirdBookTotalPage = thirdBookPage * thirdBookQuantity;
    console.log(thirdBookTotalPage);

    const totalPages = firstBookTotalPage + secondBookTotalPage + thirdBookTotalPage;
    return totalPages;
}
const total = paperRequirements(2, 5, 3);
console.log(total);
