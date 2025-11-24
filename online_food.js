// Menu with items and prices
const menu = {
    pizza: 200,
    burger: 120,
    pasta: 150,
    momo: 80,
    fries: 60
};

function calculateBill(orderItems) {
    // ✔ Validate order
    const prices = orderItems.map(item => {
        if (!menu[item]) {
            throw new Error(`❌ Invalid Item Ordered: ${item}`);
        }
        return menu[item];  // return price
    });

    // ✔ Calculate total using reduce
    const total = prices.reduce((acc, curr) => acc + curr, 0);

    return total;
}

// ---------------- Test the function -----------------
try {
    const order = ["pizza", "burger", "fries"];  // valid order
    const bill = calculateBill(order);
    console.log(`✔ Total Bill: ₹${bill}`);
} 
catch (error) {
    console.log("Error:", error.message);
}

try {
    const wrongOrder = ["pizza", "pasta", "chicken"]; // chicken is invalid
    const bill = calculateBill(wrongOrder);
    console.log(`Bill: ₹${bill}`);
} 
catch (error) {
    console.log("Error:", error.message);
}
