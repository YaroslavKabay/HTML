let wrap2 = document.createElement('div');
let id = localStorage.getItem('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(value => {
            console.log(value);
            let div2 = document.createElement('div');
        div2.classList.add('div2');
        div2.innerHTML = `
<h4>Email: ${value.userId}</h4>
<h4>Email: ${value.id}</h4>
<h4>Email: ${value.title}</h4>
<h4>Email: ${value.body}</h4>
`
        wrap2.appendChild(div2);
        document.body.appendChild(wrap2);
    }
)

