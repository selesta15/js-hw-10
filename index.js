/*
1) Напишите функцию JavaScript, которая принимает массив из списка названий стран в качестве входных данных и возвращает
 самое длинное название страны в качестве выходных данных.
Например вызывая функцию getLongestCountryName(["Россия", "Украина", "Соединённые Штаты Америки"])
Ожидаемые результат: Соединённые Штаты Америки
*/

// const countries = ["Россия", "Украина", "Соединённые Штаты Америки"];
// const getLongestCountryName = countries.reduce((long, items) => {
//     return items.length > long.length ? items : long;
// }, "")
// console.log(getLongestCountryName)


/*
Напишите функцию alphabetOrder(str), которая возвращает переданную строку с буквами в алфавитном порядке.
Например вызывая функцию  alphabetOrder('alphabetical')
Ожидаемый результат: 'aaabcehillpt'
*/
// const string = "alphabetical";
// function alphabetOrder(str) {
//     return str.split('').sort().join('');
// }
// const string2 = alphabetOrder(string);
// console.log(string2)



/*
 Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
Например: const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
На выходе должно быть: [7,4,7,8]
*/
// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// const lengthVgtb = vegetables.map(vgtb => {
//     return vgtb.length
// })
// console.log(lengthVgtb)


/*
Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len,
заполненный целыми числами, где каждое число больше предыдущего на единицу.
Например вызывая функцию generateNumbers(0, 5)
Ожидаемый результат: [0,1,2,3,4]
generateNumbers(-5, 4)  // -> [-5,-4,-3,-2]
*/

// function generateNumbers(start, len) {
//     const arr = [];
//     for(let i = 0; i < len; i++) {
//         arr.push(start + i); 
//     }
//     return arr
// }
// const numbers = generateNumbers(-5, 4)
// console.log(numbers)

/*
Напишите функцию, которая возвращает новый объект без указанных значений.
const without = (object, ...args) => {

    // Напишите здесь свое решение

}
Например дан объект const data = { a: 1, b: 2, c: 3 } и при вызове функции without(data, 'b', 'c')
Ожидаемые результат: { a: 1 }
*/

// const data = { a: 1, b: 2, c: 3 };
// const without = (object, ...args) => {
//     const newObj = {...data};
//     args.forEach(key => delete newObj[key]);
//     return newObj
// }
// const result =  without(data, 'b', 'c');
// console.log(result)





