// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(value => console.log(value)) //перший зен приймає відповідь і преводить її в люлський обєкст а другий зен вже можна юзати
//


// trycatch
// let user = {};
// try{
//     console.log(user.name);
// }catch (e) {
//     console.log(e);
// }finally {
//     console.log('alalalalalala');
// }
// console.log('end');
//Finally  спрацює завжди при будь-яких умовах
// Трай кетч потрібний для потенційно небезпечного коду

function divide(a,b) {
    if(b ===0 ){
        throw new Error('b is 0') // викинути свою еррору
    }
    return a/b;
}

try{
    divide(10,0)
}catch (e) {
    console.log(e);
}