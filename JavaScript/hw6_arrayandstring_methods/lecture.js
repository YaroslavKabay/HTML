
    let str = 'hello okten !!!';
    // console.log(str);
    // // let s = str.concat('!!!');
    // // console.log(s);
    // console.log(str.toUpperCase());
    // console.log(str.toLowerCase());
    // console.log(str.startsWith('hel'));
    // console.log(str.endsWith('en'));
    // console.log(str.substring(0, 7));
    // console.log(str.indexOf('o'));
    // console.log(str.lastIndexOf('o'));
    // console.log(str.indexOf('o', 5));
    // console.log(str.charAt(8));
    // // console.log(str.replace('e', '!'));
    // console.log(str.replaceAll('e', '!'));
    // let split = str.split(' ');
    // console.log(split);

    let arr = [];
    // console.log(Array.isArray(arr));
    // // arr[arr.length] = 100;
    // console.log(arr.push('new element1'));
    // console.log(arr.push('new element2'));
    // console.log(arr.push('new element3'));
    // console.log(arr.push('new element4'));
    // console.log(arr.push('new element5'));
    // console.log(arr);
    //
    // console.log(arr.pop()); // removes the last element of array
    // console.log(arr);
    //
    // console.log(arr.unshift('!!!')); //adds new element on the beginning
    // console.log(arr);
    //
    // console.log(arr.shift()); //removes element on the beginning
    // console.log(arr);
    //
    // let join = arr.join(';'); // turn into string and split by ;(exmpl)
    // console.log(join);
    // let nums = [11, 22, 33];
    //
    // let concat = arr.concat(nums); //adds new elements
    // console.log(concat);
    // console.log(arr);
    // console.log(nums.reverse());
    //
    // console.log(concat);
    // let slice = concat.slice(0, 4);
    // console.log(slice);
    // console.log(concat);
    //
    // // let splice = concat.splice(0, 2, '!!!', '#$%^', '*&&^%$65'); //0- from which needs to count, 2-how many after 0,
    // //symbols come insted of changed det
    // // console.log(splice);
    // // console.log(concat);
    // // concat.splice(concat.indexOf(11), 1);
    //
    // console.log(concat.includes(11));
    // console.log('hello okten'.includes('ok'));


    // let users = [
    //     {name: 'vasya', age: 31, status: false},
    //     {name: 'petya', age: 30, status: true},
    //     {name: 'kolya', age: 29, status: true},
    //     {name: 'olya', age: 28, status: false},
    //     {name: 'max', age: 30, status: true},
    //     {name: 'anya', age: 31, status: false},
    //     {name: 'oleg', age: 28, status: false},
    //     {name: 'andrey', age: 29, status: true},
    //     {name: 'masha', age: 30, status: true},
    //     {name: 'olya', age: 31, status: false},
    //     {name: 'max', age: 31, status: true}
    // ];
    //
    //
    // // users.forEach(function (value) {
    // //     console.log(value);
    // // });
    // //
    // // users.forEach(value => console.log(value)); // iteration
    // //
    // // let filteredUsers = users.filter(value => value.age > 30); // returnes filtered values
    // // console.log(filteredUsers);
    // // console.log(users);
    // //
    // // let mapedUsers = users.map(function (value, index) {   // tranformation of object
    // //     return {...value, id: index + 1};
    // // });
    // // console.log(mapedUsers);
    // //
    // // users.map((value, index) => {
    // //     return {id: index + 1, name: value.name, age: value.age, status: value.status}
    // // })
    // //
    // //
    // // let find = users.find(value => value.name === 'max');
    // // console.log(find);
    // //
    // // console.log(users.every(value => value.status));
    // // console.log(users.some(value => value.status));
    //
    //
    // // let sort = users.sort((u1, u2) => {
    // //     return u2.age - u1.age;
    // // });
    // // console.log(sort);
    //
    // // console.log(users.sort((a, b) => {
    // //     if (a.name < b.name) {
    // //         return 1;
    // //     }
    // //     if (a.name > b.name) {
    // //         return -1
    // //     }
    // //     if (a.name === b.name) {
    // //         return 0
    // //     }
    // // }));
    //
    //
    // console.log(users.reduce((accumulator, user) => {
    //     if (user.status) {
    //         accumulator.statT.push(user);
    //     } else {
    //         accumulator.statF.push(user);
    //     }
    //     return accumulator;
    // }, {statT: [], statF: []}));
    //
    // console.log(users);


    let users = [
{name: 'vasya', age: 31, status: false},
{name: 'petya', age: 30, status: true},
{name: 'kolya', age: 29, status: true},
{name: 'olya', age: 28, status: false},
{name: 'max', age: 30, status: true},
{name: 'anya', age: 31, status: false},
{name: 'oleg', age: 28, status: false},
{name: 'andrey', age: 29, status: true},
{name: 'masha', age: 30, status: true},
{name: 'olya', age: 31, status: false},
{name: 'max', age: 31, status: true}
    ];

    function filter(array, predicateFn) {
    let filterArr = [];
    for (const item of array) {
    if (predicateFn(item)) {
    filterArr.push(item);
}
}
    return filterArr;
}

    console.log(filter(users, (item) => item.status));
    console.log(filter(users, (item) => item.age > 30));


    let products = [
{
    title: 'milk',
    price: 22,
    image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
},
{
    title: 'juice',
    price: 27,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
},
{
    title: 'tomato',
    price: 47,
    image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
},
{
    title: 'tea',
    price: 15,
    image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
},
    ];

    console.log(filter(products, (value) => value.price > 15));


