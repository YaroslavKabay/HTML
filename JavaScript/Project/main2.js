let wrap1 = document.createElement('div');
let id = localStorage.getItem('id');
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(value => {
        let div1 = document.createElement('div');
        div1.classList.add('div1');
        div1.innerHTML = `
                <h4>ID: ${value.id}</h4>
                <h5>Name: ${value.name}</h5>
                <h5>Username: ${value.username}</h5>
                <h5>Email: ${value.email}</h5>
                <h5>Street: ${value.address.street}</h5>
                <h5>Suite: ${value.address.suite}</h5>
                <h5>City: ${value.address.city}</h5>
                <h5>Zipcode: ${value.address.zipcode}</h5>
                <h5>Lat: ${value.address.geo.lat}</h5>
                <h5>Lng: ${value.address.geo.lng}</h5>
                <h5>Phone: ${value.phone}</h5>
                <h5>Website: ${value.website}</h5>
                <h5>Company Name: ${value.company.name}</h5>
                <h5>CatchPhrase: ${value.company.catchPhrase}</h5>
                <h5>Bs: ${value.company.bs}</h5>`
        wrap1.appendChild(div1);
        document.body.appendChild(wrap1);


        let button = document.createElement('button')
        button.classList.add('button')
        button.innerText = 'Click here to see posts';
        document.body.appendChild(button);

        button.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(value => {
                    wrapComments = document.createElement('div');
                    wrapComments.classList.add('wrapComments');
                    div1.appendChild(wrapComments);
                    for (const element of value) {
                        let divComments = document.createElement('div');
                        divComments.classList.add('divComments');
                        divComments.innerHTML = `<h5> Title: ${element.title}</h5>`;

                        let btnComments = document.createElement('button')
                        btnComments.classList.add('btn')
                        btnComments.innerText = 'Check more'
                        btnComments.onclick = function () {
                            location.href = 'post-details.html';
                            localStorage.setItem('id', element.id)
                        };
                        divComments.appendChild(btnComments);
                        wrapComments.appendChild(divComments);
                        document.body.appendChild(wrapComments);
                    }
                })
        }
    })