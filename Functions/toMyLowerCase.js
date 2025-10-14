let string = "Zdravo, Danilo.";

function myLowerCase(str) {
  let obj = {
    Z: "z",
    D: "d",
  };
  let arr = [];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    arr[i] = string[i];
  }

  let newArray = arr.map((char) => {
    if (obj[char]) {
      return obj[char];
    } else {
      return char;
    }
  });

  for (i = 0; i < newArray.length; i++) {
    result += newArray[i];
  }
  return result;
}

function myLowerCase(str) {
  let obj = {
    Z: "z",
    D: "d",
  };
  let arr = [];

  arr = [...str];

  let newArray = arr.map((char) => obj[char] ?? char);

  return newArray.join("");
}

myLowerCase("HELLO");

function myLowerCase(str) {
  let obj = {
    Z: "z",
    D: "d",
  };
  let result = "";
  for (let char of str) {
    result += obj[char] ?? char;
  }
  return result;
}
