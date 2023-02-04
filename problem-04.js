/**-------------Problem:04--------------------- */
/**--------Topics: Long Name Friend-------- */

function bestFriend(friends) {
    let largestNameFriend = '';
    for(let i = 0; i < friends.length; i++){
        const element = friends[i];
        if(largestNameFriend.length < element.length){
            largestNameFriend = element;
        }
    } 
    return largestNameFriend;
}

const allFriends = ['Lipon', 'Obaidul', 'Sadikur Rahman', 'Farhan', 'Ruhul'];
const longNameFriend = bestFriend(allFriends);
console.log(longNameFriend); // Ans: Sadikur Rahman