const input = document.querySelector('#username');
const block = document.querySelector('#block');
const img = document.querySelector('#img');
const newDiv = document.createElement('div');
const username = document.getElementById('username');

class PromisedXHR {

    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    getData(url) {
        return new Promise((resolve, reject) => {
            this.xhr.open('GET', url, true);

            this.xhr.onload = () => {
                if (this.xhr.status === 200) {
                    resolve(parseJSON(this.xhr.responseText));
                } else {
                    const error = new Error(this.xhr.statusText);
                    reject(error);
                }
            };

            this.xhr.onerror = () => {
                reject(new Error('Some error occured'));
            };

            this.xhr.send();
        });
    }

    cancel() {
        console.log('casel?');
        if (this.xhr.readyState >= this.xhr.OPENED) {
            this.xhr.abort();
        }
        return this;
    }
}

function parseJSON(data) {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(data));
        } catch (e) {
            reject(e);
        }
    });
}

const pxhr = new PromisedXHR();

const getAvatar = (nickname) => {

    pxhr.cancel()
        .getData(`https://api.github.com/users/${nickname}`)
        .then(parseJSON)
        .then(({avatar_url}) => {
            img.src = avatar_url;
            console.log('get');
        })
        .catch(({message}) => {
            img.src = 'error.png';
            newDiv.innerHTML = `Error: ${message}`;
            block.appendChild(newDiv);
            console.log(message);
        });
};

const throttling = (func, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {func(...args);}, delay);
    };
};

const getAvatarEventHandler = throttling(getAvatar, 3000);
input.addEventListener('input', getAvatarEventHandler(username.value));

