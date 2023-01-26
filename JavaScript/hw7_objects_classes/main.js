// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user1 = new User(1,'anna','kob','lalal1@mail.com',380896565678)
// let user2 = new User(2,'lilia','kobr','lalal2@mail.com',380896755667)
// let user3 = new User(3,'stas','kobt','lalal3@mail.com',380896757778)
// let user4 = new User(4,'roman','koby','lalal4@mail.com',380896759998)
// let user5 = new User(5,'anri','kobu','lalal5@mail.com',380899795678)
// let user6 = new User(6,'dmytro','kobi','lalal6@mail.com',380800055678)
//
// let fn = function(...user) {
//     let arr = [];
//     arr.push(...user)
//     return arr
// }
// let array = fn(user1,user2,user3,user4,user5,user6)
// console.log(array);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(array.filter(value => {
//     if (value.id % 2 === 0) {
//         return array
//     }
// }));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(array.sort((m1,m2) => m1.id - m2.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let user1 = new Client(1,'anna','kob','lalal1@mail.com',380896565678,[11,])
// let user2 = new Client(2,'lilia','kobr','lalal2@mail.com',380896755667,[12,3,4])
// let user3 = new Client(3,'stas','kobt','lalal3@mail.com',380896757778,[13,6,])
// let user4 = new Client(4,'roman','koby','lalal4@mail.com',380896759998,[14,8,9,90,1301,1,1,,1,1,1,1,1,1,1,1,1,1,1])
// let user5 = new Client(5,'anri','kobu','lalal5@mail.com',380899795678,[15,1,2,3,4,5])
// let user6 = new Client(6,'dmytro','kobi','lalal6@mail.com',380800055678,[16,1,1,1,1,1,1,1,1,1])
//
// let fn = (...user) => {
//     let arr= [];
//     arr.push(...user)
//     return arr
// }
// let array = fn(user1,user2,user3,user4,user5,user6)
// console.log(array);
//
// // - !!!!!!Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = array.sort ((m1,m2) => m1.order.length - m2.order.length);
// console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// function Car (model, brand, year, maxSpeed, engine,) {
//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function drive() {
//         console.log(`їдемо зі швидкістю ${maxSpeed}`);
//     }
//     this.info = function info() {
//         console.log(`
//         model - ${this.model},
//         year - ${this.year},
//         brand - ${this.brand},
//         maxSpeed - ${this.maxSpeed},
//         engine - ${this.engine}`);
//     }
//
//     this.increaseMaxSpeed = function increaseMaxSpeed() {
//         maxSpeed += newSpeed
//         return maxSpeed
//     }
//
//     this.changeYear = function changeYear() {
//         year = newValue
//         return year
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver
//
//     }
// }
// let fn = function(...user) {
//     let arr = [];
//     arr.push(...user)
//     return arr
// }
// let car1 = new Car('S','Mersedes','2017',200 ,'nice',);
// let array = fn(car1);
// let newSpeed = 100;
// let newValue = 2000;
// console.log(array)
// car1.drive()
// car1.info()
// console.log(car1.increaseMaxSpeed());
// console.log(car1.changeYear());
// car1.addDriver('Petro');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, brand, year, maxSpeed, engine,) {
//         this.model = model;
//         this.brand = brand;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
//     };
//
//     info() {
//         for (const item in this) {
//             console.log(`${item} - ${this[item]}`);
//         }
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         return this.maxSpeed += newSpeed
//     };
//
//
//     changeYear(newYear) {
//          return this.year = newYear
//     };
//
//     addDriver (driver) {
//         this.driver = driver
//         }
// }
//
// // let fn = function(...user) {
// //     let arr = [];
// //     arr.push(...user)
// //     return arr
// // }
// let car1 = new Car('S','Mersedes','2017', 200 ,'nice',);
// // let array = fn(car1);
// let newSpeed = 100;
// let newYear = 2000;
// let driver = {
//     fullname: 'llalal',
//     surrname: 'lalalalalalal'}
//
// // console.log(array)
// // console.log(car1);
// // car1.drive()
// // car1.info()
// console.log(car1.increaseMaxSpeed(5));
// console.log(car1.changeYear(2000));
// car1.addDriver('Petro');
// console.log(car1);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// мій варіант:
//
// class Sinderella {
//
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// class Prince {
//
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
//
// }
// let Sinderella1 = new Sinderella('anna',22,36)
// let Sinderella2 = new Sinderella('lilia',19,39)
// let Sinderella3 = new Sinderella('stas',123,56)
// let Sinderella4 = new Sinderella('roman',23,7)
// let Sinderella5 = new Sinderella('anri',32,24)
// let Sinderella6 = new Sinderella('dmytro',29,45)
// let prince1 = new Prince('lilia',19,39)
//
// let fn = function(...sinderella) {
//     let arr = [];
//     arr.push(...sinderella)
//     return arr
// }
// let array = fn(Sinderella1,Sinderella2,Sinderella3,Sinderella4,Sinderella5,Sinderella6);
// console.log(array);
// console.log(prince1);
//
// let find = function (arr) {
//     let array = [];
//     for (const item of arr) {
//         if (item === prince1) {
//             array.push (item)
//         }
//     }
// }
// console.log(find(array));

// варіант з заняття:

function Sinderella (name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;

}
let arrCinderella = [
     new Sinderella('anna',22,36),
     new Sinderella('lilia',19,39),
     new Sinderella('stas',123,56),
     new Sinderella('roman',23,7),
     new Sinderella('anri',32,24),
     new Sinderella('dmytro',29,45),
     new Prince('lilia',19,39)
];

function Prince (name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
let NewPrince = new Prince( 'Petro', 30, 56)

let find = (arrCind,prince) => {
    for (const item of arrCind) {
        if(item.footSize === prince.footSize){
            return `${item.name}`
        }
    }
}
console.log(find(arrCinderella, NewPrince));


let cind = arrCinderella.find (value =>value.footSize === NewPrince.footSize);
console.log(cind);

