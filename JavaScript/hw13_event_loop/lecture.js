// !!!!!Джаваскрипт однопоточна мова програмування!!!!! тобто може робити одну операцію в момент часу
//
//The event loop is what allows Node. js to perform non-blocking I/O operations —
// despite the fact that JavaScript is single-threaded —
// by offloading operations to the system kernel whenever possible.
// Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background.
//
// main thread - the main потік в js, робить джс операції консолить мотає цикли і тд
//
// sub/slave thread - the additional потоки (async func)


// !!!!!Heap is the place (memory) where objects are stored when we define variables.
//
// дальше йде
//
// Call stack . - це те, де всі операції по черзі виконуються
// As always, calling a function creates a new stack frame for that function's use.
// The processing of functions continues until the stack is once again empty.
// Then, the event loop will process the next message in the queue (if there is one).
//
// дальше йде
//
// С++API - for browser
//                           // - for async operations
//or WEB API - for node.js
//
//task queue - queue for operations


//!!!!!Heap:
//
// sync -> go to call stack
//
// async -> go to API (яка швидше з асихронних виконалась та і летить в таск кю, та сама логіка і для таск кю)
// -> task queue (чекає поки виконаються всі синхронні) -> call stack
//
//dead lock - коли синхронні операції грузять кол стек і асинхронні дуже довго чекають в кю
//(висне браузер а потім все в момент відмальовує)

//пагінація - коли віддаєш інфу пачками, по сторінках наприклад


// !!!!!Promises
//
// стани:
//
//          -> resolved/fullfiled
// pending
//          -> rejected

//!!!!!!!promises allow to change async operation to sync (check the timeouts below):
function goWork(isJobCompleted) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (isJobCompleted){
                resolve(500) // резолв не зупинить функцію це не ретьорн
                // console.log(22); // ^ log will work
            } else{
                 reject('no work no money')
            }
        }, 500)
    })
}

function goToEgypt(moneyForTour){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            if (moneyForTour < 450){
                reject('no enough money for tour')
            }else{
                console.log('Horray');
                resolve(moneyForTour - 450)
            }
        },300 )
    })
}

function buySouvenirs(money, souvenirCount){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const totalPrice = souvenirCount * 10 ;
            if (totalPrice> money){
                reject('not enough money for souvenir')
            }else{
                resolve(`here you go ${souvenirCount} items`)
            }
        },1000)
    })
}


// goWork(true)
// // goWork(false)
//     .then((money) => {// money is a value - from resolve above^
//         console.log('good job', money, '$');
//         // goToEgypt(money)
//         // return 'test'         // наступний зен ловить ретьорн в велю !!!!promise chain!!!
//         return goToEgypt(money)
//     })
//     .then(moneyAfterTour => {
//         console.log('your new balance:', moneyAfterTour); // логне resolve goToEgypt
//         return buySouvenirs(moneyAfterTour,20)
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(reason =>{  // catch is needed щоб не дати браузеру зловити помилку(він її ловить червоною і може вбити цілу апку)
//         console.log('oops', reason); //  reason from reject above^
//     })
//     .finally(()=>{
//         console.log('Final'); // буде виконана енівей завжди
//     })

async function workation () { // async functions заміняють зени і проміси
    try{ // try catch заміняє зен і кетч
        const money = await goWork(false); // money will receive return from go work
        // const money = await goWork(true)
        console.log('good job', money, '$'); // кожен рядок знизу буде чекати поки виконається верхній навіть якщо він синхронний
        const moneyAfterTour = await  goToEgypt(money);
        console.log('your new balance:', moneyAfterTour);
        const souvenirs = await buySouvenirs(moneyAfterTour, 1);
        console.log(souvenirs);
    }catch (e) {
        console.log(e);
        console.warn(e);
        console.error(e);
    }
}
workation();


