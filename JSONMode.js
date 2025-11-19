"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const lineNo = i + 1;
  console.log(`Parsing line ${lineNo} -> ${rawData[i]}`);
  try {
    const obj = JSON.parse(rawData[i]);

    if (!("user" in obj)) throw new Error("Missing key: user");
    if (!("age" in obj)) throw new Error("Missing key: age");

    const ageNum = Number(obj.age);
    if (Number.isNaN(ageNum)) throw new Error("Invalid age value");

    obj.age = ageNum;
    clean.push(obj);
    console.log(`-> OK (line ${lineNo}):`, obj);
  } catch (err) {
    errors.push({ line: lineNo, raw: rawData[i], error: String(err) });
    console.log(`-> ERROR (line ${lineNo}):`, String(err));
  }
}

const adults = clean.filter(u => u.age >= 18);
const under18 = clean.filter(u => u.age < 18);

console.log("\n=== Final Report ===");
console.log("Clean entries:", clean);
console.log("Adults (18+):", adults);
console.log("Under 18 (filtered out):", under18);
console.log("Errors with line numbers:", errors);
console.log(`Summary: parsed=${clean.length}, errors=${errors.length}`);
