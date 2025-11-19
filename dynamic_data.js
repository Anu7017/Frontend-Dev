"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const valid = [];
const invalid = [];

for (let x of apiData) {
    const n = Number(x);
    Number.isNaN(n) ? invalid.push(x) : valid.push(n);

    console.log({
        original: x,
        number: n,
        boolean: Boolean(x),
        string: String(x)
    });
}

console.log("\nValid Numbers:", valid);
console.log("Invalid Numbers:", invalid);
