"use strict";

const user = { name: "John", email: "john@mail.com", age: 21 };

const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const ageEl = document.getElementById("age");
const output = document.getElementById("output");

nameEl.value = user.name;
emailEl.value = user.email;
ageEl.value = user.age;

document.getElementById("update").onclick = () => {
  user.name = nameEl.value;
  user.email = emailEl.value;
  user.age = Number(ageEl.value);
  output.textContent = JSON.stringify(user, null, 2);
};
