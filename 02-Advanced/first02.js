/*
 * Напишите сами функцию bind, которая позволяет привязать контекст (значение this) к функции.
 * Проверьте работу функции на функции суммирования.
 */
const b = 10;

function sum(a) {
    console.log(this);
    if (this.b !== undefined) {
        return a + this.b;
    } else {
        return a + b;
    }
}

function myBind(context, func) {
    return (val) => func.call(context, val);
}

const test1 = myBind(this, sum);
test1(3); //13
console.log(test1(3));

const obj1 = {b: 2};
const test2 = myBind(obj1, sum);
console.log(test2(2)); //4
