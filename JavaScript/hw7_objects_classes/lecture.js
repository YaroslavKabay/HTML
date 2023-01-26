// class Car {
//     constructor(color,power) {
//         this._color = 'white';
//         this.power = power;
//     }
//
//     get color() { //getter
//         return this._color
//
//     }
//
//     set color(value){ //setter
//         // this._color =value //if we deny change just remove this <<
//         if (value === 'pink'){
//             this._color =value // or this accordingly <<
//         }
//     }
//
// }
//
// const newCar = new Car('red', '200')
//
// newCar.color = 'black';
// newCar._color = 'black'; // however, the _color will set and crash the rule
// // newCar.color = 'pink'; //<< will work for js.14
// console.log(newCar);
//
// function counter(){
//     x = 0;
// }
//
// console.log(x); // (closures/замикання)will be returned only if the there is return
//
// maxSpeed += newSpeed // значення maxSpeed  збільшить на newSpeed

//наслідування класів:
class User {
    constructor(name, age) {
        this.name = 'anna';
        this.age = '21';
    }
}

let user1 = new User('anna', 32)

class User1 extends User {
    constructor(name, age, status) {
        super(name, age) // - тут вказується те що наслідується від батька
        this.status = status;

    }
}

let user2 = new User1('vasya', 23, true)

console.log(user1);
console.log(user2);