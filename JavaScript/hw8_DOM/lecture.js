// const divka = document.getElementById('my_div'); //1 element

// console.log(divka);
//
// divka.innerText = '<h1>bye</h1>' // will show text with h1
// divka.innerHTML = '<h1>bye</h1>' //affect on thml
//
// divka.style.background = 'blue'
//
// // let paragraphs = document.getElementsByTagName('p') // will not work with arr methods, however it is array
// let paragraphs = document.getElementsByClassName('my_class') // will not work with arr methods, however it is array
//
// console.log(paragraphs);
//
// for (let i = 0; i < paragraphs.length; i++) {
//     const singleP = paragraphs[i];
//      if(i%2){
//          singleP.style.color = 'green'
//      }
// }

// const myOwnP = document.createElement('p');
//
// myOwnP.innerText = 'my own p';
//
// divka.appendChild(myOwnP)

// let students = [
//     {name: 'oleg', score: 5},
//     {name: 'svet', score: 5},
//     {name: 'NANA', score: 5},
//     {name: 'KVITA', score: 5},
//     {name: 'oleg', score: 5}
// ];
//
// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const studentDiv = document.createElement('div');
//     studentDiv.style.background = 'silver';
//     studentDiv.innerHTML = `
//     ID: ${i+1} <br>
//     Name: ${student.name}<br>
//     Score: ${student.score}<hr>`
//
//     divka.appendChild(studentDiv)
//
// }

// let element = document.querySelector('p.second') // more flexible search
//
// console.log(element);
// element.style.background = 'red';
//
// let b = element.classList.contains('hello');
// console.log(b);
//
// element.classList.add('hello', 'one_more_class');
// element.classList.remove('hello', 'second');

// forms API:
// loginForm = document.forms.login;
// // console.log(loginForm);
//
// loginForm.onsubmit = (e) => {
//     e.preventDefault();
//     console.log(loginForm.username.value);
//     console.log(loginForm.password.value);
// }


let wrap = document.getElementById('wrap')
// console.log(wrap);

console.log(wrap.children); // HTML collection - shows html elements
console.log(wrap.childNodes); // NODE list - shows text (even probil) , comments, html and other 9


