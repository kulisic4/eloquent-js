//Looping a Triangle

//1. While loop
let triangle = "#";

while (triangle.length <= 7) {
    //console.log(triangle);
    triangle += "#"
}

//2. For loop
for (let line = "#"; line.length < 8; line += "#")
//console.log(line);


//FizzBuzz

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    //console.log(output || n);
  }

//Chessboard

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
//console.log(board);
//I am back! ;) - 13.09.2025.

/*After two years of taking a break from programming, I am continuing to practice Eloquent JS
exercises from the book. I have already finished some of them in the previous lines two years ago,
but I have to do them again because I need to refresh my knowledge.*/

//Looping a Triangle (13.09.2025.)

let triangle2 = "#";

while (triangle2 <= "#######") {
    //console.log(triangle2);
    triangle2 = triangle2 + "#";
}

//fizbuzz (13.09.2025.)

for (let number = 1; number <= 100; number = number + 1) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log ("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log ("Buzz");
    } else {
        console.log(number); //shows numbers that are not divisible neither with 3 or 5
    }
}