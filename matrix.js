function narcissistic(value) {
  var temp = value;
  var power;
  var newValue = [];
  var sum = 0;
  power = value.toString().length;
  if (power == 1) {
    return true + ` ${value} is narcissistic`;
  } else if (value > 1) {
    for (let i = 0; i < power; i++) {
      newValue.push(temp % 10);
      temp = Math.floor(temp / 10);
    }
    for (let j = 0; j < power; j++) {
      sum += newValue[j] ** power;
    }

    if (sum == value) {
      return true + ` ${value} is narcissistic`;
    } else {
      return false + ` ${value} is not narcissistic`;
    }
  }
}
console.log(narcissistic(163));
