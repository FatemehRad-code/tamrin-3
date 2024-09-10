function findMax(array) {
    var max = 0, a = array.length, counter;

    for (counter = 0; counter < a; counter++) {
        if (array[counter] > max) {
            max = array[counter]
        }
    }

    return max
}

console.log(findMax([1, 10, 5, 17]));