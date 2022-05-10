// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world' ;
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
// let fn = a.toUpperCase();
// console.log(fn);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих
// пробілів.
// let a = ' dirty string   ';
// let fn= a.trim();
// console.log(fn);

// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// ///
// let str = 'Ревуть воли як ясла повні';
// let fn = str.split (' ');
// console.log(fn);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// arr = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(arr.map(value => value + ''));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// let direction = 'ascending';
// let sortNums = (nums,direction) => {
//     if (direction === 'descending') {
//         console.log(nums.sort((m1,m2) => m2 - m1))
//     }
//     else if (direction === 'ascending') {
//         console.log(nums.sort((m1,m2) => m1 - m2))
//     }
//
// }
// sortNums(nums,'ascending');
// sortNums(nums,'descending');
//
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// //
//
//
// // console.log(coursesAndDurationArray.sort((m1,m2) => m2.monthDuration - m1.monthDuration));
//
//
// console.log(coursesAndDurationArray.filter(value => value.monthDuration >= 5));


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// let deck = [
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'diamond', value: '7', color: 'red'},
//     {cardSuit: 'diamond', value: '8', color: 'red'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
//     {cardSuit: 'diamond', value: '10', color: 'red'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '7', color: 'black'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'clubs', value: '6', color: 'black'},
//     {cardSuit: 'clubs', value: '7', color: 'black'},
//     {cardSuit: 'clubs', value: '8', color: 'black'},
//     {cardSuit: 'clubs', value: '9', color: 'black'},
//     {cardSuit: 'clubs', value: '10', color: 'black'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
//     {value: 'joker'},
//     {value: 'joker'}
// ] ;
//
// console.log(deck);
//
//
// // let find = deck.find(card => card.value === 'ace' && card.cardSuit ==='spade');
// // console.log(find);
//or
// console.log(deck.find(card => card.value === 'ace' && card.cardSuit ==='spade'))
//
//
// let filter = deck.filter(function (card){
//     if (card.value === '6'){
//         return true
//     }
//     return false;
// });
// console.log(filter);
//or
// console.log(deck.filter(card => card.value === '6'));
//
//
// console.log(deck.filter(card => card.color === 'red'));
//
//
// console.log(deck.filter(card => card.cardSuit === 'diamond'));
//
//
// console.log(deck.filter((card,index) => card.cardSuit === 'clubs' && index >= 30 && index <= 35 ));



