let fibonacci = function () {
  let current = 1;
  let prev = 0;
  let count = 0; // Number of times the generator has been called.

  return () => {
    // First time, return 0; second time, return 1;
    // After that, return the sum of the previous two (prev and current)
    if (count === 0) {
      count++;
      return prev;
    } else if (count === 1) {
      count++;
      return current;
    } else if (count > 1) {
      // Update prev and current for the next call
      let temp = prev + current;
      prev = current;
      current = temp;
      count++;
      return current;
    } else {
      return -1; // Invalid input (error case)
    }
  };
};

let fibGenerator1 = fibonacci(); // fibonacci() returns a closure
let fibGenerator2 = fibonacci(); // fibonacci() returns a closure

console.log("Generator 1:");
console.log(fibGenerator1()); // prints 0, i.e., F(0)
console.log(fibGenerator1()); // prints 1, i.e., F(1)
console.log(fibGenerator1()); // prints 1, i.e., F(2)
console.log(fibGenerator1()); // prints 2, i.e., F(3)
console.log(fibGenerator1()); // prints 3, i.e., F(4)

console.log("\nGenerator 2:");
console.log(fibGenerator2()); // prints 0, i.e., F(0)
console.log(fibGenerator2()); // prints 1, i.e., F(1)
console.log(fibGenerator2()); // prints 1, i.e., F(2)
console.log(fibGenerator2()); // prints 2, i.e., F(3)
console.log(fibGenerator2()); // prints 3, i.e., F(4)
