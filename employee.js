// Parent Class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is working in the ${this.department} department.`;
    }
}

// Child Class (inherits Employee)
class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    // Overriding work() → Polymorphism
    work() {
        return `${this.name} is managing the ${this.department} team.`;
    }
}

// ---------- Create Objects ------------
const e1 = new Employee("Rahul", "Sales");
const m1 = new Manager("Saksham", "Tech");

// ---------- Runtime Polymorphism Demo ----------
const workers = [e1, m1];

workers.forEach(worker => {
    console.log(worker.work()); 
});
