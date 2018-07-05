// global = global || window;
/**
 * Напишите сами функцию bind, которая позволяет привязать контекст (значение this) к функции.
 * Проверьте работу функции на функции суммирования.
 */
global.b = 10;
global.a = 1;
const obj1 = {b: 2, a: 1};

function sum() {
    return this.a + this.b;
}

function myBind(context, func) {
    return (...args) => func.call(context, args);
}

const test1 = myBind(global, sum);
test1(3); //13
console.log(test1());

const test2 = myBind(obj1, sum);
console.log(test2()); //4
