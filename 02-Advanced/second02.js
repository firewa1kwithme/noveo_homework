/**
 * Создать абстрактный класс AbstractAccumulator,
 * при создании экземпляра которого должен выкидываться Error.
 * На вход в конструктор должен принимать value (со значением по умолчанию - 0).
 * Далее в нем создать метод read, который при вызове должен выкидывать Error.
 * Создать два новых класса WrongAccumulator и Accumulator и унаследовать их от AbstractAccumulator.
 * В WrongAccumulator мы ничего не переопределяем, просто наследуемся.
 * В Accumulator необходимо переопределить метод read,
 * которому на вход поступает value и его необходимо прибавить к this.value.
 */

class AbstractAccumulator {
    constructor(value = 0) {
        this.value = value;
        if (new.target === AbstractAccumulator) {
            throw new Error();
        }
    }
    read() {
        throw new Error();
    }
    get getval() {
        return this.value;
    }
}

class WrongAccumulator extends AbstractAccumulator {}

class Accumulator extends AbstractAccumulator {
    read(val) {
        this.value += val;
    }
}

try {
    const abstractAccumulator = new AbstractAccumulator();
} catch (error) {
    console.log('Error in new AbstractAccumulator'); // eslint-disable-line
}
const wrongAccumulator = new WrongAccumulator();

try {
    wrongAccumulator.read();
} catch (error) {
    console.log('Error in read method in WrongAccumulator'); // eslint-disable-line
}

const accumulator = new Accumulator();
accumulator.read(12);
accumulator.read(1);
accumulator.read(5);
console.log(accumulator.getval); // eslint-disable-line
