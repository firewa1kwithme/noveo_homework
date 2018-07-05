/**
 * Отфильтровать объект по ключам из массива
 * (сделать задачу 2мя способами: с помощью цикла и с помощью reduce)
 */

function filterObject(obj, keys) {
    let res={};
    for (let key of keys) {
        if (Object.keys(obj).includes(key)) {
            console.log(`${key} : ${obj[key]}`);
            res[key] = obj[key];
        }
    }
    return res;
}

function filterObjectWithReduce(obj, keys) {
    return keys.reduce((acc, val) => {
        if (Object.keys(obj).includes(val)) {
            acc[val]= obj[val];
        }
        return acc;
    }, {});
}

const obj = {key1: 1, key2: 2, key3: 3}, keys = ['key1', 'key5', 'key2'];
console.log(filterObject(obj, keys));
console.log(`----`);
console.log(filterObjectWithReduce(obj, keys));
