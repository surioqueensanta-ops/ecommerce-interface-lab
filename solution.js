function checkVariable(input) {
    const type = typeof input;
    
    switch (type) {
        case "string":
            return "string";
        case "number":
            return "number";
        case "boolean":
            return "boolean";
        case "bigint":
            return "bigint";
        case "undefined":
            return "undefined";
        case "object":
            return "object";
        default:
            return "object";
    }
}

//Problem 1
console.log("=== Problem 1: Strict Type Checker ===");
console.log(checkVariable("Hello"));        
console.log(checkVariable(42));         
console.log(checkVariable(true));          
console.log(checkVariable(BigInt(100)));   
console.log(checkVariable(undefined));    
console.log(checkVariable({}));            
console.log(checkVariable(null));           
console.log("-----------------------------------\n");

function generateIDs(count) {
    const ids = [];
    
    for (let i = 0; i < count; i++) {
        if (i === 5) {
            continue; 
        }
        ids.push(`ID-${i}`);
    }
    
    return ids;
}

//Problem 2
console.log("=== Problem 2: Secure ID Generator ===");
console.log(generateIDs(7));   
console.log(generateIDs(10));  
console.log(generateIDs(3));   
console.log("-----------------------------------\n");

function calculateTotal(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== "number") {
            throw new TypeError("Invalid input: All arguments must be numbers");
        }
    }
    
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    return sum;
}

//Problem 3
console.log("=== Problem 3: The Functional Sum ===");
console.log(calculateTotal(1, 2, 3, 4, 5));        
console.log(calculateTotal(10, 20, 30));           
console.log(calculateTotal(5, 10, 15, 20));      

console.log("-----------------------------------\n");

function getTopScorers(playerList) {
    const topScorers = playerList
        .filter(player => player.score > 8)
        .map(player => player.name)
        .join(", ");
    
    return topScorers;
}

//Problem 4
console.log("=== Problem 4: Leaderboard Filter ===");

const players = [
    { name: "Alice", score: 10 },
    { name: "Bob", score: 5 },
    { name: "Charlie", score: 12 },
    { name: "Diana", score: 7 },
    { name: "Eve", score: 9 },
    { name: "Frank", score: 3 },
    { name: "Grace", score: 15 },
    { name: "Henry", score: 6 },
    { name: "Ivy", score: 11 },
    { name: "Jack", score: 4 }
];

console.log(getTopScorers(players));  
console.log("-----------------------------------\n");

class Item {

    #discount = 0.1; 
    
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    get finalPrice() {
        return this.price - (this.price * this.#discount);
    }
}

//Problem 5
console.log("=== Problem 5: The Private Inventory ===");
const item1 = new Item("T-Shirt", 250);
const item2 = new Item("Watch", 779);
const item3 = new Item("Mouse", 229);

console.log(`${item1.name}: Original Price = ₱${item1.price}, Final Price = ₱${item1.finalPrice}`);
console.log(`${item2.name}: Original Price = ₱${item2.price}, Final Price = ₱${item2.finalPrice}`);
console.log(`${item3.name}: Original Price = ₱${item3.price}, Final Price = ₱${item3.finalPrice}`);
console.log("-----------------------------------\n");

function safeDivide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    } catch (error) {
        return error.message;
    } finally {
        console.log("Operation attempted");
    }
}

//Problem 6
console.log("=== Problem 6: Robust Division ===");
console.log(safeDivide(10, 2));  
console.log(safeDivide(15, 3));  
console.log(safeDivide(10, 0));   
console.log(safeDivide(100, 4)); 
console.log("-----------------------------------\n");


console.log("=== LAB 4 COMPLETE ===");
console.log("All functions have been tested successfully!");