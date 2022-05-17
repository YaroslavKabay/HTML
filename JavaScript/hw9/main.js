// Все робити за допомоги js.

// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let div = document.createElement('div');
// div.innerText = 'Hello'
// div.classList.add('wrap') ;
// div.classList.add('collapse') ;
// div.classList.add('alpha') ;
// div.classList.add('beta') ;
// div.style.background = 'silver';
// div.style.color = 'red';
// div.style.fontSize = '40px'
// document.body.appendChild(div);
// document.body.appendChild(div.cloneNode(true));
// console.log(div.classList);

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const item of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.innerText = ` title : ${item.title} , monthDuration: ${item.monthDuration}` ;
//     document.body.appendChild(div);
// }

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const item of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
//     h1.innerText = `${item.title}`;
//     p.innerText = `${item.monthDuration}`;
//     div.appendChild(h1);
//     div.appendChild(p);
//     document.body.appendChild(div);
// }
