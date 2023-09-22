//Looping a Triangle
let triangle = "#";

console.log("Test: test")
while (triangle.length <= 7) {
    console.log(triangle);
    triangle += "#"
}

//FizzBuzz

for (let number = 1; number <= 100; number = number + 1) {
    if (number % 3 == 0) {
        console.log("Fizz");
    }
    if (number % 5 == 0) {
        console.log("Buzz");
    }
    if (number % 3 == 0 || number % 5 == 0) {
        console.log("FizzBuzz");
    }
}