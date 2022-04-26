// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами
// а і б

// function squareP (a,b) {
//     let result = a * b;
//     return result;
// }
// let answer = squareP(3,4);
// console.log(answer);

// - створити функцію яка обчислює та повертає площу кола
// з радіусом r

// function squareC (r) {
//     let result = 3.14 * (r ** 2) ;
//     return result;
// }
// let answer = squareC(2);
// console.log(answer);

// - створити функцію яка обчислює та повертає площу циліндру висотою h,
// та радіутом r

// function squareCyl (h,r) {
//     let result = 2 * 3.14 * r* ( r + h ) ;
//     return result;
// }
// let answer = squareCyl(1,2);
// console.log(answer);

// - створити функцію яка приймає масив та виводить
// кожен його елемент

// function iterator (array) {
//
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//
//     }
//
// }
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

// function paragraph (text) {
//     document.write(`<div> ${text} </div>`)
// } ;
// paragraph('hello');

// - створити функцію яка створює ul з трьома елементами li. 
// Текст li задати через аргумент всім однаковий


// function list (a){
//     document.write( `<div>` );
//     document.write( `<li> ${a} </li>` );
//     document.write( `<li> ${a} </li>` );
//     document.write( `<li> ${a} </li>` );
//     document.write( `</div>`);
//
// }
// list ('hello');
//
// list('by1');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list1 (size) {
//    document.write(`<ul>`);
//    for (let i = 0; i < size; i++) {
//       document.write(`<li> hello </li>`)
//    }
//    document.write(`</ul>`);
// }
// list1(2);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список

// function array () {
//    for (const argument of arguments) {
//       console.log(argument)
//    }
// }
// array(1,'lalala', true);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// function iterator (array) {
//
//    for (const item of array) {
//       document.write(`<div> `${item}`</div>`);
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
//       d: 2,
//       name: 'asya',
//       age: 25
//    },
//    {
//       d: 3,
//       name: 'vasy',
//       age: 24
//    },
//    {
//       d: 4,
//       name: 'vasya',
//       age: 21
//    },
// ];
//
// iterator (users) ;

// idk how to manage it  :(

// - створити функцію яка повертає найменьше число з
// масиву

// idk how to manage it too :(

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
//

// function calc () {
//    let res = 0;
//    for (const argument of arguments) {
//       res = res + argument
//    }
//    return res;
// }
// let res1 = calc (1,2,3);
// let res2 = calc (10,20,30);
// console.log(res1,res2)