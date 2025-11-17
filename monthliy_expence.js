let expenses = [5000, 1200, 8000, 3000, 1500];

let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];
let average = total / expenses.length;

total += total * 0.10;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount After Tax:", total.toFixed(2));
