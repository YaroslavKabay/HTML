// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
//
// let txt = document.createElement('div');
// txt.setAttribute('id','text');
// txt.style.height = '40px';
// txt.style.background = 'grey';
// txt.innerText = 'Hello'
// document.body.appendChild(txt);
//
// let button = document.createElement('input');
// button.setAttribute('type', 'button');
// button.setAttribute('id', 'hider');
// button.setAttribute('value', 'Click to hide');
// document.body.appendChild(button);
//
// let text = document.getElementById('text');
// let hider = document.getElementById('hider');
//
// // hider.onclick = fn;
// // function fn() {
// //     text.hidden = true;
// // }
//
// // or
// hider.onclick = function () {
//     text.style.visibility = 'hidden';
// }
// //or
// // hider.onclick = fn;
// // function fn() {
// //     text.style.display = 'none'
// // }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// let input = document.createElement('input');
// input.type = 'number';
// let button = document.createElement('button');
// button.textContent = 'Click';
// let text = document.createElement('div')
// text.style.background = 'silver'
// text.style.height = '20px'
//
// document.body.appendChild(text);
// document.body.appendChild(input);
// document.body.appendChild(button);
// button.addEventListener('click', function () {
//         if (input.value < 18) {
//             text.innerText = 'You are younger than 18';
//         }
//         else if (input.value >=18){
//             text.innerText = 'You are older than 18';
//         }
//         input.value = '';
//     }
// )
//
//
//or
//
//
// let input = document.createElement('input');
// input.type = 'number';
// let button = document.createElement('button');
// button.textContent = 'Click';
// document.body.appendChild(input);
// document.body.appendChild(button);
// button.addEventListener('click', function () {
//     if (input.value < 18) {
//         alert('You are younger than 18')
//     }
//     else if (input.value >=18){
//         alert('You are older than 18')
//     }
//     input.value = '';
//     }
//  )

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку
// при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let butt = document.getElementById('button');
//
// butt.addEventListener('click', function () {
//     console.log(document.forms.firstForm.one.value);
//     console.log(document.forms.firstForm.two.value);
//     console.log(document.forms.secondForm.three.value);
//     console.log(document.forms.secondForm.four.value);
//     });

// - Створити 3 инпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'Click';
document.body.append(input1, input2, input3, button);

button.addEventListener( 'click', function () {
    tr = input1.value;
    td = input2.value;
    text = input3.value;
    function fn (row, column, text) {
        let table = document.createElement('table');
        document.body.appendChild(table);

        for (let i = 0; i < tr; i++) {
            let tr = document.createElement('tr');
            table.appendChild(tr);
            for (let j = 0; j < td; j++) {
                let td = document.createElement('td');
                td.innerText = `${text}`;
                td.style.border = '1px solid black';
                tr.appendChild(td);
            }
        }
    }
    fn(tr,td,text)
})

