function power(num1, num2) {
  var ans = 1;
  for (let i = 0; i < num2; i++) {
    ans *= num1;
  }
  return ans;
}
console.log(power(2, 3));
