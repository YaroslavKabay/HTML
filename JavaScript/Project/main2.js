let wrap1 = document.createElement('div');
let id = localStorage.getItem('id');
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(value => {
        let div1 = document.createElement('div');
        div1.classList.add('div1');
        div1.innerHTML = `
                <h3>ID: ${value.id}</h3>
                <h4>Name: ${value.name}</h4>
                <h4>Username: ${value.username}</h4>
                <h4>Email: ${value.email}</h4>
                <h4>Street: ${value.address.street}</h4>
                <h4>Suite: ${value.address.suite}</h4>
                <h4>City: ${value.address.city}</h4>
                <h4>Zipcode: ${value.address.zipcode}</h4>
                <h4>Geo: ${value.address.geo}</h4>
                <h4>Lat: ${value.address.geo.lat}</h4>
                <h4>Lng: ${value.address.geo.lng}</h4>
                <h4>Phone: ${value.phone}</h4>
                <h4>Website: ${value.website}</h4>
                <h4>Company Name: ${value.company.name}</h4>
                <h4>CatchPhrase: ${value.company.catchPhrase}</h4>
                <h4>Bs: ${value.company.bs}</h4>`
            wrap1.appendChild(div1);
            document.body.appendChild(wrap1);


        let button = document.createElement('button')
        button.innerText = 'Posts';
        div1.appendChild(button);

        button.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(value => {
                  wrapComments = document.createElement('div');
                  div1.appendChild(wrapComments);
                    for (const element of value) {
                        let divComments = document.createElement('div');
                        divComments.innerHTML = `<h4> Title: ${element.title}</h4>`;

                        let btnComments = document.createElement('button')
                        btnComments.innerText = 'Check more'
                        btnComments.onclick = function () {
                            location.href = 'post-details.html';
                            localStorage.setItem('id', element.id)
                        };
                        divComments.appendChild(btnComments);
                        wrapComments.appendChild(divComments);
                    }
                })
        }
    })
