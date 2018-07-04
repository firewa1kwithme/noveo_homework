/*
 * Напишите функцию создания генератора sequence(start, step).
 * Она при вызове возвращает другую функцию-генератор,
 * которая при каждом вызове дает число измененное на переданный шаг, и так до бесконечности.
 * Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.
 * Шаг можно не указывать, тогда он будет равен одному.
 * Начальное значение по умолчанию равно 0.
 * Генераторов можно создать сколько угодно.
 */

function sequence(start = 0, step = 1) {
    return function() {
        return start += step;
    };
}

const generator = sequence(10, 3);
const generator2 = sequence(7, 1);
console.log(generator()); //10
console.log(generator()); //13
console.log(generator2()); //7
console.log(generator()); //16
console.log(generator2()); //8
