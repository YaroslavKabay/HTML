
// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// let butt = document.getElementById('button');
// butt.addEventListener('click', function () {
//     let name = document.forms.form.name.value;
//     let age = document.forms.form.age.value;
//     localStorage.setItem('user', JSON.stringify({name: name, age: age}))
//     });

//or
let {name, age} = document.forms.form;
let key = 'key';
let btn = document.getElementById('button');

let save = (name, age) => {
    let obj = {name, age};
    localStorage.setItem(key, JSON.stringify(obj));
}

btn.onclick = () => {
    save (name.value, age.value)
};

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
// let {model, type, volume}= document.forms.form;
// let btn = document.getElementById('button');
//
// let key = 'key';
// let save = (model, type, value) => {
//     let store = JSON.parse(localStorage.getItem(key)) || [] ;
//     store.push({model, type, volume});
//     localStorage.setItem(key, JSON.stringify(store))
// }
//
// btn.onclick = () =>{
//     save(model.value, type.value, volume.value)
// }