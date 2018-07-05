/**
 * Реализовать класс Clock.
 * В качестве параметров можно передавать объект options, который содержит интервал (tickTimeout),
 * через который будет вызываться функция обратного вызова
 * (по умолчанию интервал должен быть равен 1000 мс).
 * Для вызова функции обратного вызова через tickTimeout миллисекунд
 * использовать функцию setInterval
 */

class Clock {
    constructor({tickTimeout = 1000, endTimeout = 10000}) {
        this.tickTimeout = tickTimeout;
        this.endTimeout = endTimeout;
        this.intervalId = null;
    }
    start() {
        this.intervalId = setInterval(() => {
            console.log(new Date().getSeconds()); // eslint-disable-line
        }, this.tickTimeout);
    }
    stop() {
        setTimeout(() => {clearTimeout(this.intervalId);}, this.endTimeout);
    }
}

const clock = new Clock({tickTimeout: 2000, endTimeout: 14000});
clock.start();
clock.stop();
