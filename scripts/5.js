
// 5.3.1
// let result = +prompt('Введите число', '')
// if (typeof +result !== 'number' || isNaN(result)) {
//   alert('Упс, кажется, вы ошиблись')
// } else if (result % 2 === 0) {
//   console.log('Число четное')
// } else {
//   console.log('число нечетное')
// }

// console.log(result);

//5.3.2
// x = true;

// if ((typeof x !== 'number' && typeof x !== 'boolean') && typeof x == 'string') {
//     console.log('х - текст');
//     } else if ((typeof x !== 'number' && typeof x !== 'string') && typeof x == 'boolean') {
//         console.log('х - логическое выражение');
//     } else if ((typeof x !== 'boolean' && typeof x !== 'boolean') && typeof x == 'number') {
//         console.log('х - число');
//     } else {
//         console.log('Тип x не определён');
//     }

//5.4.3
// let str = "Hello";

// function reverseString (str) {
//     let splitString = str.split("");
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join("");

//     return joinArray;
// }
// console.log(reverseString(str))

//5.4.4
// let randomNumber = Math.floor(Math.random() * 101);
// console.log(randomNumber)

//5.5.5
// let arr = ['one', 2, true];

// console.log(arr.length)

// arr.forEach(function(item, index) {
//     console.log(index + ": " + item);
// });

//5.6.6
// let arr = [0, "0", 0, 1, "1", true, false, "false", true];

// let duplicates = [...arr]
// newArr.forEach((item) => {
//     const i = duplicates.indexOf(item)
//     duplicates = duplicates
//       .slice(0, i)
//       .concat(duplicates.slice(i + 1, duplicates.length))
// })

// let duplicatesLenght = duplicates.length;

// console.log(duplicates);
// if (duplicatesLenght > 1) {
//     console.log(true)
// } else {
//     console.log(false)
// }

//5.6.7
// let arr = [0, "0", 2, 1, "1", true, false, "false", 4, true, null, 2, 3, 'number', 4, 8];
// let arrNumbers = (arr.filter(item => typeof item === "number"));
// let arrNumbersLenght = arrNumbers.length;

// console.log('Числа в массиве: ' + arrNumbers);

// let evenNumbersArray = arrNumbers.filter(function(elem) {
//     if (elem % 2 == 0 && elem != 0) {
//         return true;
//     } else {
//         return false;
//     }
// });

// let evenNumbersLenght = evenNumbersArray.length;
// console.log('Четных чисел: ' + evenNumbersLenght);

// let oddNumbersArray = arrNumbers.filter(function(elem) {
//     if (elem % 2 !== 0 && elem != 0) {
//         return true;
//     } else {
//         return false;
//     }
// });

// let oddNumbersLenght = oddNumbersArray.length;
// console.log('Нечетных чисел: ' + oddNumbersLenght);

// let zeroNumbersArray = arrNumbers.filter(function(elem) {
//     if (elem == 0) {
//         return true;
//     } else {
//         return false;
//     }
// });

// let zeroNumbersLenght = zeroNumbersArray.length;
// console.log('Количество нолей: ' + zeroNumbersLenght);

//5.7.8
let fruits = new Map([

    ["apple", "green"],
  
    ["strawberry", "red"],
  
    ["blueberry",  "blue"],

    ["orange" , "orange"],

    ["lemon", "yellow"],

    ["watermelon", "green-red"],

    ["banana", "yellow"]
  
]);

//только такой метод в голову пришел
for (let fruit of fruits.entries()) {
    console.log(`the color of ${fruit[0]} is ${fruit[1]}`);
}
  