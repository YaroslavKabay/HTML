// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. ' +
// 'Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json()
    })
    .then(
        fn => {
            let mainDiv = document.createElement('div');
            mainDiv.classList.add('mainDiv');
            for (const element of fn) {
                let div = document.createElement('div');
                div.classList.add ('div')
                div.innerHTML = `
                <h3>ID: ${element.id}</h3>
                <h4>Title: ${element.title}</h4>
                <h5>Body: ${element.body}</h5>
                `
                mainDiv.appendChild(div);
                document.body.appendChild(mainDiv);
            }
        }
    );

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then (response => response.json())
//     .then (value => {
//             let mainDiv = document.createElement('div');
//             mainDiv.classList.add('mainDiv');
//             document.body.append(mainDiv)
//             for (let element of value) {
//                 let div = document.createElement('div')
//                 div.classList.add('div');
//                 div.innerHTML = `
//                         <h3>ID: ${element.id}</h3>
//                         <h4>Name: ${element.name}</h4>
//                         <h5>Email: ${element.email}</h5>
//                         <h6>Body: ${element.body}</h6>
//                         `;
//                 mainDiv.appendChild(div)
//             }
//     })
