/**
 * Написать функцию, которая возвращает хранилище строк.
 * Если вызвать «хранилище», передав аргумент, то переменная должна сохраниться в хранилище,
 * если без - то вывести в консоль содержимое «хранилища».
 */

function createStorage(initial = []) {
    let res = initial;
    return function(...args) {
        if (args.length !== 0) {
            res.push(...args);
        } else {
            console.log(res);
            return res;
        }
    };
}

const storage = createStorage();
storage('Hey');
storage('Hello', 'Bye');
storage(); //['Hey', 'Hello']
