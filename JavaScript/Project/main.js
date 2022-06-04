// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу
// user-details.html, которая имеет детальную информацию про объект на который кликнули

fetch(`https://jsonplaceholder.typicode.com/users`)
.then(response => response.json())
.then(value => {
    let wrap = document.createElement('div');
    wrap.classList.add('mainDiv');
            for (const element of value) {
                let div = document.createElement('div');
                div.classList.add('div')
                div.innerHTML = `
                <h3>ID: ${element.id}</h3>
                <h4>Title: ${element.name}</h4>`

                let btn = document.createElement('button')
                btn.setAttribute('id', 'myButton')
                btn.innerText = 'Click';
                btn.onclick = function () {
                    localStorage.setItem('id', element.id)
                    location.href = 'user-details.html';
                };
                div.appendChild(btn);
                wrap.appendChild(div);
                document.body.appendChild(wrap);
            }
})