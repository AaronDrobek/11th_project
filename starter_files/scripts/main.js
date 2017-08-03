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

let value = ["1","2","3","4"]
let hand = []

function handValue(hand) {
//   let card = 0;
// for (var i = 0; i < value.length; i++) {
//         value[i] += card += 1;
// }
  for (var i = 0; i < value.length; i++) {
        // Math.floor(value[i]);

  }

console.log(Math.floor(value[i]));






  return;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
