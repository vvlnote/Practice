let n = 1;
let total = 0;

while (n < 1000) {
  if ((n % 3 == 0)|| (n % 5 == 0)) {
    total += n
  }
  n += 1;
}

console.log(total);