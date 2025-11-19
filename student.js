"use strict";

const form = document.getElementById("studentForm");

function validate(id, regex, msg) {
  const el = document.getElementById(id);
  const err = document.getElementById(id + "Err");

  if (regex.test(el.value)) {
    el.className = "success";
    err.textContent = "";
    return true;
  } else {
    el.className = "error";
    err.textContent = msg;
    return false;
  }
}

form.addEventListener("submit", e => {
  e.preventDefault();
  validate("name", /^[A-Za-z ]+$/, "Invalid name");
  validate("email", /^[\w.-]+@[\w.-]+\.\w+$/, "Invalid email");
  validate("phone", /^[0-9]{10}$/, "Phone must be 10 digits");
  validate("password", /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/, "Weak password");
});
