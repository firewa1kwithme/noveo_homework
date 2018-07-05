/**
 * На вход подается строка из слов (слова разделены
 * пробелами) и массив строк - отдельных слов.
 * Функция должна вернуть строку:
 * Слова из входной строки расположены в обратном порядке
 * Из строки исключены все слова, переданные в массиве
 * При выполнении задачи обязательно использовать chaining
 */

function filterString(str, excludeWords) {
    let res = str.split(` `);
    for (let word in excludeWords) {
        res.splice(res.indexOf(word));
    }
    return res.reverse().join(` `);
}


function filterStringTwo(str, excludeWords) {
    let res = str.split(` `).filter((item) => !excludeWords.includes(item));
    return res.reverse().join(` `);
}

const str = `I am a javascript programmer`, excludeWords = ['programmer'];
console.log(filterString(str, excludeWords));
console.log(`-----`);
console.log(filterStringTwo(str, excludeWords));
