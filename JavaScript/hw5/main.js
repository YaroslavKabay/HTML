// Все стірлочними!!!!!!!!!

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його
// значень.
// let arr = [1,2,3,4];
// let average = (array) => {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum/array.length;
// }
//
// console.log(average(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let arr = [1,2,3,4,5,6,7];
// let calc = (array) => {
//     let min = array [0];
//     let max = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item
//         }
//         if (item > max) {
//             max = item
//         }
//     }
//     console.log(max)
//     return min
// }
// console.log(calc(arr));
// let calc = (...arr) => {
//     let min = arr [0];
//     let max = arr[0];
//     for (const item of arr) {
//         if (item < min) {
//             min = item
//         }
//         if (item > max){
//             max = item
//         }
//
//     }
//     console.log(max)
//     return min;
// }
// console.log(calc(1,2,3,4,5,6,7));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// let fill = (array) => {
//     let newArr = [];
//     for (let i = 0; i < 10; i++) {
//         // newArr.push(Math.round(Math.random()*100));
//         // or
//         newArr[i] = Math.round(Math.random()*100);
//     }
//     return newArr
// }
// let arr = [];
// console.log(fill(arr));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення
// діапазону.
// let fill = (limit) => {
//     let newArr = [];
//     for (let i = 0; i < limit; i++) {
//         // newArr.push(Math.round(Math.random()*100));
//         // or
//         newArr[i] = Math.round(Math.random()*100);
//     }
//     return newArr
// }
//
// console.log(fill(2));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let reverseArr = (array) => {
//     let newArr = [];
    // for(let i = array.length-1, j=0; i >= 0; i--, j++) {
    //     newArr [j] = array [i];
    // }
//     or
//     for(let i = array.length-1;  i >= 0; i--) {
//         newArr.push(array[i])
//     }
//     return newArr
// }
// let arr = [1,2,3,4,5,6]
// console.log(reverseArr(arr));


//     Переробити на стрілочні функції з попереднього дз


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let squareP =  (a,b) => a * b;
// console.log(squareP(3,4));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let squareC = (r) => 3.14 * (r ** 2) ;
// console.log(squareC(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h,та радіутом r
// let squareCyl = (h,r) => 2 * 3.14 * r* ( r + h ) ;
// console.log(squareCyl(1,2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let iterator = (array) => {
//
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//
//     }
// }
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// iterator (products) ;

// - створити функцію яка створює параграф з текстом. Текст задати че
// рез аргумент
// let paragraph = (text) => document.write(`<div> ${text} </div>`);
//
// paragraph('hello');

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
// let list = (a) => {
//     document.write(`<div>`)
//     document.write(`<li> ${a} </li>`);
//     document.write(`<li> ${a} </li>`);
//     document.write(`<li> ${a} </li>`);
//     document.write(`</div>`);
// }
//
//     list ('hello');
//
//     list('by1');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list1 = (size) => {
//    document.write(`<ul>`);
//    for (let i = 0; i < size; i++) {
//       document.write(`<li> hello </li>`)
//    }
//    document.write(`</ul>`);
// }
// list1(2);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
// let array = [1,'lalala', true];
// let fn = (arr) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li> ${arr[i]} </li>`)
//     }
//     document.write(`</ul>`)
//
// }
// fn(array)
//or
// function array (...arg) {
//     for (const argument of arguments) {
//         console.log(argument)
//     }
// }
// array(1,'lalala', true);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let iterator = (array) => {
//
//    for (const item of array) {
//       document.write(`<div> ${item.id} ${item.name} ${item.age} </div>`);
//
//    }
//
// }
// let users = [
//    {
//       id: 1,
//       name: 'sya',
//       age: 22
//
//    },
//    {
//       id: 2,
//       name: 'asya',
//       age: 25
//    },
//    {
//       id: 3,
//       name: 'vasy',
//       age: 24
//    },
//    {
//       id: 4,
//       name: 'vasya',
//       age: 21
//    },
// ];
//
// iterator (users) ;

// - створити функцію яка повертає найменьше число з
// масиву
// let arr = [ 1, 2, 3, 7];
//
// let minnum = (array) => {
//     let min = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min=item
//         }
//         return min
//
//     }
// }
//
// console.log(minnum(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
//
// let calc = (array) => {
//    let res = 0;
//    for (const argument of array) {
//       res = res + argument
//    }
//    return res;
// }
// let res1 = [1,2,3];
// console.log(calc(res1))

//
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let fn = (array) => {
//    let element = array[0];
//    array[0]=array[1];
//    array[1]=element;
//    return array
// }
// let arr = [
//     {
//         age:5
//     },
//     { age: 3}
// ];
//
// console.log(fn(arr));








// additional 7 task js 5
// let a = 2;
// let b = 7;
// let arr =[1,a,3,4,b,6];
// let fn = (array) => {
//     let newArr = [];
//     if (a < b) {
//         for (let i = a; i < b-1; i++) {
//             newArr.push(array[i]);
//         }
//     }
//     if (b > a) {
//         for (let i = b-1; i < 0; i--) {
//             newArr.push(array[i]);
//         }
//     }
//     return newArr
// }
// console.log(fn(arr));
//
// function sortArray(array) {
//     let temp = 0;
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i; j < array.length; j++) {
//             if (array[j] < array[i]) {
//                 temp = array[j];
//                 array[j] = array[i];
//                 array[i] = temp;
//             }
//         }
//     }
//     return array;
// }