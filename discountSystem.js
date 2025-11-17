let total = 7500;

let discount =
  total >= 10000 ? 0.25 :
  total >= 5000  ? 0.15 :
  total >= 2000  ? 0.05 : 0;

let finalAmount = total - (total * discount);

console.log("Total:", total);
console.log("Discount:", (discount * 100) + "%");
console.log("Final Amount:", finalAmount.toFixed(2));
