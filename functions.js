//Minimum

function min(a, b) {
  if (a < b) return a;
  else return b;
}

//console.log(min(6, 19));
//console.log(min(2, -9));

//Recursion

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

//console.log(isEven(50));
//console.log(isEven(75));
//console.log(isEven(-1));
//console.log(isEven(-2));

//Bean Counting

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

//console.log(countBs("Bean"));
//console.log(countChar("Netherlands", "e"));

/*from this line I am going through functions chapter again after two years
will do exercises again when I come to the end of the chapter*/

/*defining a function. The following code defines square to refer to a function
 that produces the square of a given number*/

const square = function (x) {
  return x * x;
};

//console.log(square(12));

const makeNoise = function () {
  //console.log("Pling!");
};

//makeNoise ();

/*const power = function (base, exponent) {
  let result = 1;
  for (count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}*/
//console.log(power(2, 10));

//recursive functions

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

//console.log(power(2, 3));

//built-in toLowerCase() --> user-defined function Method 1

/*let string ="Zdravo, Danilo." ;
let result ="" ;

function lowerCase() {
  for (i = 0; i < string.length; i++) {
    let charCode = string[i].charCodeAt(0);

  if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(charCode + 32);
      } else result += string[i];
  } return result;
} */
//console.log(lowerCase());

//toLowerCase() Method 2

/*let string = "Zdravo, Danilo.";

function myLowerCase (str) {
  return str // 'return str' na vrhu radi kako treba
  .split("")
  .map(char => {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      return char.toLowerCase();
       } else {
      return char;
    }
  }) 
  .join("");
  //'return str' ovde na kraju vraca string bez smanjenih slova, zasto?
}


console.log(myLowerCase(string));

//toLowerCase() with ternary operator

let string = "Zdravo, Danilo.";

function myLowerCase (str) {
  return str
  .split("")
  .map(char => char === char.toUpperCase() && char !== char.toLowerCase() 
     ? char.toLowerCase() 
     : char)
  .join("");
} 


console.log(myLowerCase(string));*/

//custom toLowerCase ---> using object and for loop

/*let string = "Zdravo, Danilo.";

function myLowerCase (str) {
 obj =
 {
   "Z": "z",
   "D": "d",
 }
let result ="";
  
  for (let i = 0; i < str.length; i++ ) {
  let char = str[i];
    
    if (obj[char]) {
      result += obj[char];
    } else {
      result += char;
    }
  
  }
  return result
}*/

//console.log(myLowerCase(string))

//custom ---> toLowerCase() using .map()

/*let string = "Zdravo, Danilo.";

function myLowerCase (str) {
 obj =
 {
   "Z": "z",
   "D": "d",
 }
let arr =[];
let result ="";
  
  for (let i = 0; i < str.length; i++ ) {
    arr[i] = string[i];}
  
  let newArray = arr.map(char => {
      if (obj[char]) {
        return obj[char];
      } else {
        return char;
      }
    })

  for (i = 0; i < newArray.length; i++) {
    result += newArray[i];
  }
  return result;
}*/

//console.log(myLowerCase(string))

//using Math.min()
function minValue(a, b) {
  return Math.min(a, b);
} //console.log(minValue(5, 10))

//function ---> odd & even numbers

/*function checkNumber(num) {
  if (typeof num !== "number"){
    return "input valid number";
} else if (num % 2 === 0) {
  return "Even number!";
} else {
  return "Odd number!";
}
}*/

//console.log(checkNumber(6));

function checkNumber(num) {
  return typeof num !== "number"
    ? "Input valid number!"
    : num % 2 === 0
    ? "Even number!"
    : "Odd number!";
}

//console.log(checkNumber(88));

//function ---> returns a string backwards

function backwards(string) {
  result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

//console.log(backwards("mentor"));

//function ---> returns prime numbers

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//console.log(isPrime(3));

// function ---> check if a string is a palindrome

function isPalindrome(string) {
  string = string.toLowerCase().replace(/ /g, "");
  for (i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
     return "Not a palindrome!";
    } 
  }
  return "It's a palindrome!";
}

//console.log(isPalindrome("Nurses run"));

// Regular expression in javascript ---> replace() and replace() chaining

let str = "bam bam bam bam";
let newStr = str.replace(/b/g, "T")

//console.log(newStr);

/*function isChanged(str) {
  return str.replace(/ /g, "_").replace(/a/g, "@");
}

//console.log(isChanged("Paja patak"));

function isChanged(str) {
  return str.replace(/e/g, "3").replace(/i/g, "1").replace(/ /g, "-");
}*/

//console.log(isChanged("jedan tri"));

// /\w+/g regex expression that returns seperate words

/*function numOfSentences (str) {
  return str.match(/\w+/g)
}

console.log(numOfSentences("one two three"));*/