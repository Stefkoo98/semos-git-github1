let numbers = [1, 4, 3, 5, 4, 3];
// Odredi go najgolemiot broj vo nizata

let max = Math.min();
numbers.forEach(currentNumber => {
    if(currentNumber > max) {
        max = currentNumber;
    }
});

console.log(max);