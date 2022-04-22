// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// // let digit = 0;
// // let digit = 1;
// // let digit = -3;
//
// if (digit !== 0) {
//     console.log('true')}
// else {
//     console.log('false')
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 0;
//
// if (time >= 0 && time <=15 ) {
//     console.log('1qtr'); }
// else if (time >= 16 && time <=30 ) {
//     console.log('2qtr'); }
// else if (time >= 31 && time <=45 ) {
//     console.log('3qtr'); }
// else if (time >= 46 && time <=59 ) {
//     console.log('4qtr'); }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//

// let month = prompt('please paste the needed date') ;
// if (month >= 1 && month <= 11 ) {
//     document.write('1decade'); }
// else if (month >= 12 && month <=22 ) {
//     document.write('2decade'); }
// else if (month >= 23 && month <=31) {
//     document.write('3decade'); }




// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//

// switch (prompt('Please choose required day')) {
//
//     case '1' :
//         console.log('monday');
//         break;
//     case '2' :
//         console.log('tuesday');
//         break;
//     case '3' :
//         console.log('wednesday');
//         break;
//     case '4' :
//         console.log('thursday');
//         break;
//     case '5' :
//         console.log('friday');
//         break;
//     case '6' :
//         console.log('saturday');
//         break;
//     case '7' :
//         console.log('sunday');
//         break;
//     default:
//         console.log('else')

// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a = +prompt('1number');
// let b = +prompt('2number')
//
// if ( a < b ) {
//     console.log(b); }
//
// else if ( a > b ) {
//     console.log(a); }
//
// else if ( a === b ) {
//     console.log('the numbers are equal');
//
// }
