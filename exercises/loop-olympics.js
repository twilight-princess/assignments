// Bronze Medal
// var numberArray = [];
// for (var i = 0; i < 10; i++) {
//   numberArray.push(i);
// }
// console.log(numberArray);

// var evenArray = [];
// for (var i = 0; i < 101; i++) {
//   if (i % 2 == 0) {
//     evenArray.push(i);
//   }
// }
// console.log(evenArray);

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for (var i in fruit) {
  if (i % 2 == 0) {
    console.log(fruit[i]);
  }
}