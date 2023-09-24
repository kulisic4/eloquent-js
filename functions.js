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

console.log(countBs("Bean"));
console.log(countChar("Netherlands", "e"));