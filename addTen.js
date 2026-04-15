let numbers = [1, 2, 3, 4, 5, 10, 20, 30]

function addTen(numbers) {
    return numbers.map((number) => number +10)
}
console.log(addTen(numbers));