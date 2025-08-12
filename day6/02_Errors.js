function divide(a, b) {
  if (b === 0) {
    throw new Error("Can't divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.log("Caught error:", err.message);
}
