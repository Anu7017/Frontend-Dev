let userName = "Anurag";
let age = 20;
let isAdmin = false;
let skills = ["JS", "HTML", "CSS"];
let profile = { city: "Delhi", active: true };
let emptyValue = null;
let notAssigned;

let report = [
  { label: "userName", value: userName, type: typeof userName },
  { label: "age", value: age, type: typeof age },
  { label: "isAdmin", value: isAdmin, type: typeof isAdmin },
  { label: "skills", value: skills, type: Array.isArray(skills) ? "array" : typeof skills },
  { label: "profile", value: profile, type: typeof profile },
  { label: "emptyValue", value: emptyValue, type: typeof emptyValue },
  { label: "notAssigned", value: notAssigned, type: typeof notAssigned }
];

console.table(report);
