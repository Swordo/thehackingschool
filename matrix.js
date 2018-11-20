var num = [12, 57, 45, 56, 67, -12];
var max = -Infinity;
var smax;
function maxNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function secMax(ar) {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > max) {
      smax = max;
      max = ar[i];
    }
  }
  return smax;
}
console.log(secMax(num));
