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
//I am back ;)