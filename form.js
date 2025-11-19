"use strict";

class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }

  render(target) {
    const form = document.createElement("form");
    this.fields.forEach(f => {
      form.innerHTML += `
        <label>${f.label}</label><br>
        <input type="${f.type}" id="${f.label}" /><br><br>
      `;
    });
    form.innerHTML += `<button type="button" id="submitBtn">Submit</button>`;
    document.getElementById(target).appendChild(form);

    document.getElementById("submitBtn").onclick = () =>
      console.log(this.getFormData());
  }

  getFormData() {
    const data = {};
    this.fields.forEach(f => {
      const key = f.label;
      data[key] = document.getElementById(key).value;
    });
    return data;
  }
}

const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" }
];

new FormBuilder(fields).render("formContainer");
