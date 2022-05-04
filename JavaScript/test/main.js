// Всі функції повинні бути описані стрілочним типом!!!!]


// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let arr = [2,0.75,0.5];
// let fn = (array) => {
//     let min = array[0];
//     for (const item of array) {
//         if (min > item){
//             min = item;
//         }
//     }
//     console.log(min);
// }
// fn(arr)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let fnm = (...array) =>  {
//     let max  = array[0];
//     for (const item of array) {
//         if (max < item) {
//             max = item;
//         }
//     }
//     console.log(max);
// }
// fnm(1, 2, 3, 4, 5, 6);

// - створити функцію яка повертає найбільше число з масиву
// let fnm = (...array) =>  {
//     let max  = array[0];
//     for (const item of array) {
//         if (max < item) {
//             max = item;
//         }
//     }
//     return max;
// }
// console.log(fnm(1, 2, 3, 4, 5, 6));;

// // - створити функцію яка повертає найменьше число з масиву
// let arr = [2,0.75,0.5];
// let fn = (array) => {
//     let min = array[0];
//     for (const item of array) {
//         if (min > item){
//             min = item;
//         }
//     }
//     return min;
// }
// console.log(fn(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1,2,3,4,5];
// let fn = (arguments) => {
//     let def = 0;
//     for (const item of arguments) {
//         def += item;
//     }
//     return def;
// }
// console.log(fn(arr));

// - Дано натуральное число n. Выведите все числа от 1 до n.
// let fn = (array) => {
//     let newArr = [];
//     for (let i = 0; i < n; i++) {
//         newArr.push(array[i])
//     }
//     return newArr;
// }
// let arr = [1,2,3,4,5,6,7];
// let n = 5;
// console.log (fn(arr))

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// /
// let a = 2;
// let b = 5;
// let arr =[1,a,3,5,4,b,6];
// let fn = (array) => {
//     newArr = 0;
//     if (a < b) {
//         for (let i = a; i < b; i++) {
//             for (let j = i; j < array.length; j++) {
//                 if (array[j] < array[i]) {
//                     newArr = array[j];
//                     array[j] = array[i];
//                     array[i] = newArr;
//                 }
//             }
//         }
//     }
//     if (a > b) {
//         for (let i = a; i < b; i++) {
//             for (let j = 0; j < array.length; j++) {
//                 if (array[j] < array[i]) {
//                     newArr = array[j];
//                     array[j] = array[i];
//                     array[i] = newArr;
//                 }
//             }
//         }
//     }
//     return array
// }
// console.log(fn(arr))
// let a = 7;
// let b = 10;
// let arr =[1,a,3,5,4,b,6];
// let fn = (array) => {
//     newArr = [];
//     if (a < b) {
//         for (let i = 0; i < b; i++) {
//             newArr.push(array[i]);
//         }
//
//         return newArr
//     }
// }
// console.log(fn(arr));

//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let fn = (a,array) => {
//     a[i]=a[i+1];
//
// }
// let foo = [1,2,3,4];
// let a = 2;
// console.log(fn(foo));

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
