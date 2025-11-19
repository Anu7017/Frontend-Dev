"use strict";

const steps = [
  document.getElementById("step1"),
  document.getElementById("step2"),
  document.getElementById("step3")
];

let current = 0;

function showStep(i) {
  steps.forEach((s, idx) => s.style.display = idx === i ? "block" : "none");
}

document.getElementById("next1").onclick = () => {
  const n = document.getElementById("name").value.trim();
  if (!/^[A-Za-z ]+$/.test(n)) return alert("Invalid name");
  current = 1; showStep(current);
};

document.getElementById("next2").onclick = () => {
  const e = document.getElementById("email").value.trim();
  if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(e)) return alert("Invalid email");
  current = 2; showStep(current);
};

document.getElementById("finish").onclick = () => {
  const p = document.getElementById("pass").value.trim();
  if (p.length < 4) return alert("Password too short");

  document.getElementById("summary").style.display = "block";
  document.getElementById("summary").textContent =
    `Name: ${name.value}, Email: ${email.value}, Password: ${pass.value}`;

  steps.forEach(s => s.style.display = "none");
};

document.getElementById("back1").onclick = () => { current = 0; showStep(current); };
document.getElementById("back2").onclick = () => { current = 1; showStep(current); };
