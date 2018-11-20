var num = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
var dif = 0;
var sum1 = 0;
var sum2 = 0;
var n = 0;
var m = num.length - 1;
for (let i = 0; i < num.length; i++) {
  for (let j = 0; ; j++) {
    sum1 += num[i][j + n];
    sum2 += num[i][m];
    break;
  }
  n++;
  m--;
}
dif = sum1 - sum2;
console.log(sum1);
console.log(sum2);
console.log(Math.abs(dif));

// for (let i = 0; i < num.length; i++) {
//   let n = 0;
//   sum += num[0 + n];
//   n += 4;
// }
// for (let i = 0; i < num.length; i++) {
//   let n = 2;
//   sum += num[i + n];
//   n += 2;
// }
// dif = sum1 - sum2;
// if (dif > 0) {
//   dif *= 1;
// } else {
//   dif *= -1;
// }

// var num = [12, 57, 45, 56, 67, -12];
// var max = -Infinity;
// var smax;
// function maxNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// function secMax(ar) {
//   for (let i = 0; i < ar.length; i++) {
//     if (ar[i] > max) {
//       smax = max;
//       max = ar[i];
//     }
//   }
//   return smax;
// }
// console.log(secMax(num));
