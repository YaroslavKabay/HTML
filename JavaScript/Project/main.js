fetch(`https://jsonplaceholder.typicode.com/users`)
.then(response => response.json())
.then(value => {
    let wrap = document.createElement('div');
    wrap.classList.add('wrap');
            for (const element of value) {
                let div = document.createElement('div');
                div.classList.add('div')
                div.innerHTML = `
                <h3>ID: ${element.id}</h3>
                <h4>Title: ${element.name}</h4>`

                let btn = document.createElement('button')
                btn.setAttribute('id', 'myButton')
                btn.classList.add('button')
                btn.innerText = 'Check';
                btn.onclick = function () {
                    localStorage.setItem('id', element.id)
                    location.href = 'user-details.html';
                };
                div.appendChild(btn);
                wrap.appendChild(div);
                document.body.appendChild(wrap);
            }
})
