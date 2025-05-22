function generateSeries(a) {
  const count = (a % 2 === 0) ? a - 1 : a;
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }
  console.log(result.join(", "));
}

const input = parseInt(process.argv[2]);

  generateSeries(input);
