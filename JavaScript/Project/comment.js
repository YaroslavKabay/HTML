let wrap2 = document.createElement('div');
let id = localStorage.getItem('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(value => {
            let div2 = document.createElement('div');
            div2.classList.add('div2');
            div2.innerHTML = `
<h3>UserID: ${value.userId}</h3>
<h4>ID: ${value.id}</h4>
<h4>Title: ${value.title}</h4>
<h4>Body: ${value.body}</h4>
`
            wrap2.appendChild(div2);
            document.body.appendChild(wrap2);
        }
    )

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(fn => {
        let postDiv = document.createElement ('div');
        postDiv.classList.add('postDiv')
        for (const element of fn) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('commentDiv')
            commentDiv.innerHTML = `
            <h5>Name: ${element.name}</h5>
            <h5>Email: ${element.email}</h5>
            <h5>Body: ${element.body}</h5>
            `
            postDiv.appendChild(commentDiv)
            document.body.appendChild(postDiv)
        }
    })