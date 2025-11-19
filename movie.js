"use strict";

const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const seatsEl = document.getElementById("seats");

document.getElementById("book").onclick = () => {
  const name = nameEl.value;
  const email = emailEl.value;
  const seats = Number(seatsEl.value);

  if (!/^[A-Za-z ]+$/.test(name)) return console.log("Invalid name");
  if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(email)) return console.log("Invalid email");
  if (!(seats >= 1 && seats <= 10)) return console.log("Seats must be 1-10");

  const ticket = { name, email, seats };

  console.log("Booking Successful:");
  console.log(ticket);
};
