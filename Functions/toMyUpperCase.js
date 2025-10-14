function toMyUpperCase(str) {
    obj = {
        d: "D",
        h: "H",
    };
let result = "";
    for (let char of str) {
        result += obj[char] ?? char;
    }
    return result;
}

console.log(toMyUpperCase("hej, danilo"));