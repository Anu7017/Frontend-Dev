let salary = 30000;
let increment = 10;

let projection = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * (increment / 100);
    projection.push({ Year: year, Salary: salary.toFixed(2) });
}

console.table(projection);
