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
    let res = start - step;
    return function() {
        return res += step;
    };
}

const generator = sequence(10, 3);
const generator2 = sequence(7, 1);
console.log(generator());
console.log(generator());
console.log(generator2());
console.log(generator());
console.log(generator2());
