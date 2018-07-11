const input = document.querySelector('#username');
const block = document.querySelector('#block');
const img = document.querySelector('#img');
const newDiv = document.createElement('div');

class PromisedXHR {

    constructor () {
        this.xhr = new XMLHttpRequest();
    }
    getData(url) {
        return new Promise((resolve, reject) => {
            this.xhr.open('GET', url, true);

            this.xhr.onload = () => {
                if (this.xhr.status === 200) {
                    resolve(this.xhr.responseText);
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
        // return new Promise((resolve, reject) => {
        //     if (this.xhr.readyState === this.xhr.OPENED) {
        //         this.xhr.abort();
        //         resolve('cancelled');
        //     } else {
        //         const error = new Error(this.xhr.statusText);
        //         this.xhr.abort();
        //         reject(error);
        //     }
        // });
        if (this.xhr.readyState === this.xhr.OPENED) {
            this.xhr.abort();
        }
    }
}

const pxhr = new PromisedXHR();

function parseJSON(data) {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(data));
        } catch (e) {
            reject(e);
        }
    });
}

function throttling(func, delay) {
    let timer = null;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    };
}


function getAvatar() {
    const nickname = document.querySelector('#username').value;
    pxhr.getData(`https://api.github.com/users/${nickname}`)
        .then((result) => {
            pxhr.cancel();
            return result;
        })
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
    // pxhr.cancel();
}

const throttledGetAvatar = throttling(getAvatar, 2000);

input.addEventListener('input', () => {
    throttledGetAvatar();
});
