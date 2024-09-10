function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

const num = 5;
const result = factorial(num);
console.log("factorial of", num , "is", result);