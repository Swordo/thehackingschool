function prime(num) {
  if (num == 2 || num == 3) {
    return num + " is prime";
  } else if (num <= 1) {
    return num + " in not prime number";
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return num + " is not prime";
    }
  }
}

console.log(prime(1));
