const input = document.querySelector('#username');
const block = document.querySelector('#block');
const img = document.querySelector('#img');


class PromisedXHR {
    constructor() {
        this.cancel = null;
    }
    getData(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    const error = new Error(xhr.statusText);
                    reject(error);
                }
            };

            xhr.onerror = () => {
                reject(new Error('Some error occured'));
            };
            this.cancel = xhr.abort;

            xhr.send();
        });
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

//TODO: race с throttling
function func() {

    const nickname = document.querySelector('#username').value;
    pxhr.getData(`https://api.github.com/users/${nickname}`)
        .then(parseJSON)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error.message);
        });
}

input.addEventListener('keyup', func);
