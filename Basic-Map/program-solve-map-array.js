function doubleAll(numbers) {
    // SOLUTION GOES HERE
    var result = []
    // var doubles = numbers.map(function(num) {
    //     return num * 2;
   return numbers.map(function(num) {
      return (num * 2);
   });
}   

module.exports = doubleAll




// var numbers = [1, 4, 9];
// var doubles = numbers.map(function(num) {
//   return num * 2;
// });

// doubles is now [2, 8, 18]
// numbers is still [1, 4, 9]
// function doubleAll(numbers) {
//   var result = []
//   for (var i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2)
//   }
//   return result
// }

// function doubleAll(numbers) {
//   var result = []
//   for (var i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2)
//   }
//   return result
// }

// doubleAll(1)