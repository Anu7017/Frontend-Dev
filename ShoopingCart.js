"use strict";

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, qty) {
    this.items.push({ name, price, qty });
  }

  getTotal() {
    return this.items.reduce((t, i) => t + i.price * i.qty, 0);
  }

  applyCoupon(code) {
    const reg = /^(SAVE|DISC)(\d{2})$/;
    const m = code.match(reg);
    if (!m) return this.getTotal();
    const percent = Number(m[2]);
    return this.getTotal() * (1 - percent / 100);
  }
}

const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 1000, 2);

const total = cart.getTotal();
console.log("Total:", total);

const finalTotal = cart.applyCoupon("SAVE20");
console.log("After Coupon:", finalTotal);
