let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

[1, 2, 3, 4, 5].forEach(num => {
console.log(num_each);
});

let doubled = numbers1.map(function(num){
    return num * 2
});
console.log(doubled);

let evens = numbers1.filter(function(num){
    return num % 2 === 0
});
console.log(evens);

let doubled2 = numbers1.map(num => num * 3);
console.log(doubled2);

let numbers_greater = numbers1.filter(num => num > 3);

let double_numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => num * 2);
