function calculator(a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (operation.toLowerCase()) {
    case "add":
      console.log("Result:", a + b);
      break;
    case "subtract":
      console.log("Result:", a - b);
      break;
    case "multiply":
      console.log("Result:", a * b);
      break;
    case "divide":
        console.log("Result:", a / b);
      break;
    default:
      console.log("Unknown operation. Use add, subtract, multiply, or divide.");
  }
}

// Get inputs from terminal
const [a, b, operation] = process.argv.slice(2);

if (!a || !b || !operation) {
  console.log("Usage: node problem-1.js <a> <b> <operation>");
  console.log("Example: node problem-1.js 10 5 multiply");
} else {
  calculator(a, b, operation);
}
