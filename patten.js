"use strict";

function getLimit() {
  const fromArg = (typeof process !== "undefined" && process.argv && process.argv[2]) ? Number(process.argv[2]) : NaN;
  if (!Number.isFinite(fromArg) || Number.isNaN(fromArg)) {
    if (typeof prompt === "function") {
      const p = Number(prompt("Enter pyramid height (default 5):"));
      if (Number.isFinite(p)) return p;
    }
    return 5;
  }
  return fromArg;
}

function generateLet(limit = 5) {
  console.log("\nPyramid using let:");
  for (let i = 1; i <= limit; i++) {
    console.log("* ".repeat(i).trim());
  }
}

function generateVar(limit = 5) {
  console.log("\nPyramid using var:");
  for (var i = 1; i <= limit; i++) {
    console.log("* ".repeat(i).trim());
  }
  // show that 'i' still exists after loop (function-scoped)
  console.log("after loop, var i =", i);
}

function closureLetDemo(limit = 5) {
  console.log("\nClosure demo with let (each fn captures its own i):");
  const fns = [];
  for (let i = 1; i <= limit; i++) {
    fns.push(() => console.log("captured i =", i));
  }
  fns.forEach(fn => fn());
}

function closureVarDemo(limit = 5) {
  console.log("\nClosure demo with var (all fns capture same i -> final value):");
  const fns = [];
  for (var i = 1; i <= limit; i++) {
    fns.push(() => console.log("captured i =", i));
  }
  fns.forEach(fn => fn());
  console.log("after loop, var i =", i);
}

function debugStep(limit = 5) {
  console.log("\nDebug step-by-step (shows loop variable each iteration):");
  for (let i = 1; i <= limit; i++) {
    const line = "* ".repeat(i).trim();
    console.log(`iteration ${i} | line="${line}" | i (inside)=${i}`);
  }
  console.log("debug complete");
}

/* Run with user-controlled limit (default 5) */
const limit = getLimit();
generateLet(limit);
generateVar(limit);
closureLetDemo(limit);
closureVarDemo(limit);
debugStep(limit);
