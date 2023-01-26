// // localStorage
//
// localStorage.setItem('1', 'one'); // set items in localstorage
//
// user1= {name: 'kokos'};
//
// user2 = '{"name": "kokos"}'; // JSON java script object notation
// user3 = JSON.stringify(user1); //  to string
// // console.log(user3);
//
// let user3_JSON = JSON.parse(user3); // to object
// // console.log(user3_JSON);
//
// localStorage.setItem('TheChosenOne', user3); // set item in localstorage
// let chosenJSON = localStorage.getItem('TheChosenOne') // get item from local storage
// console.log(chosenJSON);
// console.log(JSON.parse(chosenJSON));

//sessionStorage - поки відкритий сайт, сесія триватиме, навіть якшо сайт відкритий в інакшому вікні

//бекенд може дістатись до кукі але не може дістатись до локалсторедж
// document.cookie = 'max-age=32234423432' //- in seconds, cookie lifecycle
// live template cookie!!!
// let cookies = document.cookie.split(';');
// let obj = {};
// for (let i = 0; i < cookies.length; i++) {
//     let cookieTuple = cookies[i].split('=');
//     obj[cookieTuple[0].trim()] = cookieTuple[1];
// }
// console.log(obj);

// let name = 'vasya';
// let age = 29;
// obj = {name, age, foo() { } };
// // - it is not needed to write name: name, age: age if the keys are similar
// // - also, it is not needed to write foo: function (bar){return bar}; you may use foo(bar) {return bar}/!!!! Only for objects

// let {name, wife: {name: wifename}, wife} = {name: 'orest', age: 31, wife: {name: 'oliya'} }
// console.log(name, wife, wifename); //wifename change the name key of the wife

// Spread operator makes the copy of the object or array (проте найкращий варіант джйсон стрінгліфай в браузерному варіанті)
// let user = {name: 'vasya', age: 27};
// let user1 = {...user}; //Spread operator
// console.log(user, user1);
//
// let user = {name: 'vasya', age: 27, skils: ['typing', 'swimming']};
// // Ми можемо перзаписувати array ключі на свої , щоб уникнути копіювання в 1 обєкт (ссилочних типів даних)
// let user1 = {...user, skils: [...user.skils]};
//
//
// let arr = [1,2,3]; //Spread operator i array
// let arr1 = [0,0,0,0,...arr];
// console.log(arr, arr1);

// //array Destructuring
// let [one,,two] = [1,2,3]
// console.log(one, two);

// Якщо треба вернути якесь поле
//
// function foo({name, age}) {  // obj
//     console.log(name);
// }
// foo({name:'asd', age: 19});
//
// function foo([one, two]) {  //arr
//     console.log(two);
// }
// foo([1, 2])

// !!!!!Джаваскрипт однопоточна мова програмування!!!!! тобто може робити одну операцію в момент часу
// main thread - the main потік в js


