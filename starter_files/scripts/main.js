/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
// function assert(hand, value) {
//   let output = handValue(hand);
//   console.assert(output === value, `Expecting ${output} to be ${value}`);
// }

// let expectedOutput =[1, 2, 4, 5, 8, 9];
//
// let numbers = [4, 5, 1, 8, 9, 2];
//
// function bubbleSort(list) {
//   let sortedFlag = true;
//   let resultArray = [];
//
//   while(sortedFlag) {
//     sortedFlag = false;
//     for (var i = 0; i < list.length-1; i++) {
//       if (list[i] > list[i+1]) {
//         sortedFlag = true;
//         let temp = list[i];
//         list[i] = list[i+1];
//         list[i+1] = temp;
//       }
//     }
//   }
//   return resultArray;
// }


// function assert(hand, value)

// let value = ["1","2","3","4","5","6","7"]
// let = [];

function handValue(hand) {
  // console.log("Your hand is: ", hand);
  let sum = 0;

  for (var i = 0; i < hand.length; i++) {
    // console.log("Looking at: ", hand[i]);
    //Add the value of the card
    if (hand[i] === "2") {
      // console.log("You have a 2");
      sum = sum + 2;
    }else if (hand[i] === "3"){
      // console.log("You have a 3");
      sum = sum + 3;
    }else if (hand[i] === "4"){
      // console.log("You have a 4");
      sum = sum + 4;
    }else if (hand[i] === "5"){
      // console.log("You have a 5");
      sum = sum + 5;

    }else if (hand[i] === "6"){
      // console.log("You have a 6");
      sum = sum + 6;
    }else if (hand[i] === "7"){
      // console.log("You have a 7");
      sum = sum + 7;
    }else if (hand[i] === "8"){
      // console.log("You have an 8");
      sum = sum + 8;
    }else if (hand[i] === "9"){
      // console.log("You have a 9");
      sum = sum + 9;
    }else if (hand[i] === "10"){
      // console.log("You have a 10");
      sum = sum + 10;
    }else if (hand[i] === "J"){
      // console.log("You have a jack");
      sum = sum + 10;

    }else if (hand[i] === "Q"){
      // console.log("You have a queen");
      sum = sum + 10;
    }else if (hand[i] === "K"){
      // console.log("You have a king");
      sum = sum + 10;
    }else if (hand[i] === "A"){
      // console.log("You have an ace");
      sum = sum + 11;
    }
    //Check if value is over 21
    if (sum > 21){
      // console.log("The sum is greater than 21");
      sum = sum - 10;
    }else if (sum > 24){
      sum = sum - 10;

      }
      // console.log("The sum is currently: ", sum);
    }

  // console.log(hand);
  console.log(sum);
  // console.log("Returning: ", sum);
  return sum;
}

// return hand;

// console.log(sum));










/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
