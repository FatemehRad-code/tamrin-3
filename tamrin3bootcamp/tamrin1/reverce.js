function reverseString(str) {
    return str.split('').reverse().join('');
}


let inputString = "Hello, World!";
let reversedString = reverseString(inputString);
console.log(reversedString); 