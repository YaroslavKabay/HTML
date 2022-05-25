
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
let input = document.createElement('input');
input.type = 'number';
let button = document.createElement('button');
button.textContent = 'Click';
let text = document.createElement('div')
text.style.background = 'silver'
text.style.height = '20px'

document.body.appendChild(text);
document.body.appendChild(input);
document.body.appendChild(button);
button.addEventListener('click', function () {
    if (input.value < 18) {
        text.innerText = 'You are younger than 18';
    }
    else if (input.value >=18){
       text.innerText = 'You are older than 18';
    }
    input.value = '';
    }
 )

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку
// // при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// // Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// // let form  = document.createElement('form');
// // let input = document.createElement('input');
// // let button = document.createElement('button');
// // button.textContent = 'Click';
// //
// // form.appendChild(input);
// // document.body.appendChild(form);
// // document.body.appendChild(form.cloneNode(true));
// // document.body.appendChild(button);
// /////