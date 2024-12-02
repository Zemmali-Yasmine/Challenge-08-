//1. Function to filter even numbers from an array:
function EvenNumbers(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}
console.log(EvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]


//2. Filter objects of people over 30 years old:
function PeopleOver30(people) {
    let result = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i].age > 30) {
            result.push(people[i]);
        }
    }
    return result;
}

const peopleArray = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 35, email: "bob@example.com" },
    { name: "Charlie", age: 40, email: "charlie@example.com" },
];
console.log(PeopleOver30(peopleArray));
// Output: [{ name: "Bob", age: 35, email: "bob@example.com" }, { name: "Charlie", age: 40, email: "charlie@example.com" }]



//3.Implement a stack using an array:
class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

const stack = new Stack();
stack.push("Knight");
stack.push("Mage");
console.log(stack.pop()); // Output: Mage
console.log(stack.peek()); // Output: Knight




//4. Implement a queue using an array:
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue("Knight");
queue.enqueue("Mage");
console.log(queue.dequeue()); // Output: Knight
console.log(queue.peek());    // Output: Mage



//5. Function to remove vowels from a string:
function removeVowels(str) {
    let result = '';
    for (let char of str) {
        if (!"aeiouAEIOU".includes(char)) {
            result += char;
        }
    }
    return result;
}

console.log(removeVowels("Hello World")); // Output: "Hll Wrld"




//6. Function to return unique elements from two arrays:
function UniqueElements(arr1, arr2) {
    let combined = arr1.concat(arr2);
    let result = [];
    for (let i = 0; i < combined.length; i++) {
        if (!result.includes(combined[i])) {
            result.push(combined[i]);
        }
    }
    return result;
}
console.log(UniqueElements([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]
