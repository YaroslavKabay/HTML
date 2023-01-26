let x = confirm('are you 18?')? 10 : undefined
console.log(x); // тернарний оператор


x++ //постфіксний інкремент
++x // префіксний декремент

function (...nums){
    console.log(nums);
} //- rest parametr/argument (коли ми не знаєм скільки занчень буде всередині)

container.push(item)  //item will be pushed in the end of the arr

rec() =>{
    rec()
} //рекурсивна функція

str = 'lalala' // string literal primitive
str = new String ('lalala') // referal type

const innerText = `name: ${user.name}\nAge:${user.age}\n` // \n переносить на наступний рядок 