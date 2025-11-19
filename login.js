"use strict";

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary = this.salary + (this.salary * percent / 100);
  }
}

const employees = [
  new Employee(1, "Amit", "Tech", 40000),
  new Employee(2, "Sara", "HR", 35000),
  new Employee(3, "Kiran", "Finance", 50000),
  new Employee(4, "Nihal", "Tech", 45000),
  new Employee(5, "Riya", "Support", 30000)
];

employees.forEach(e => e.applyBonus(10));

employees.forEach(e => console.log(e.name, e.getAnnualSalary()));

const totalAnnualPayout = employees.reduce((t, e) => t + e.getAnnualSalary(), 0);

console.log("Total Payout:", totalAnnualPayout);
