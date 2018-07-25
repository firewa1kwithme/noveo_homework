const block = document.getElementById('block');
const img = document.getElementById('img');
const username = document.getElementById('username');

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

    pxhr.getData(`https://api.github.com/users/${nickname}`)
        .then(parseJSON)
        .then(({avatar_url}) => {
            img.src = avatar_url;
            console.log('get');
        })
        .catch(({message}) => {
            img.src = 'error.png';
            console.log(message);
        });
};

let timer = null;
username.addEventListener('input', () => {
    if (timer) {
        pxhr.cancel();
        clearTimeout(timer);
        timer = null;
    }
    timer = setTimeout(() => {
        getAvatar(username.value);
    }, 300);
});

